
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useState,useEffect } from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { baseurl } from '../../baseurl/baseurl';
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/BeatLoader";
import swal from 'sweetalert';
import DeleteIcon from '@mui/icons-material/Delete';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Feedback = () => {
  const [value, setValue] = React.useState(0);
  
  const [visibleloading,setvisibleloading]=useState(true)
  
  const [getuserdata,setuserdata]=useState([])
  const getdataValuesFun = async () => {
    
    const res = await fetch(baseurl+"/getfeedback/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        
      },
    });
    const data = await res.json();
  
    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      
      setuserdata(data)
      setvisibleloading(false)
      
    }
    
  };
  useEffect(()=>{
    getdataValuesFun()
  },[])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
// ===============================================================
const asktoconfirm=(id)=>{
  const ids=id
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this record!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Your Record save successfully!",{
        icon: "success", 
        buttons:false,
        timer: 800,
        margin: "300px"
      });
      deleteuser(ids)
    } else {
      swal("Your Record is safe!");
    }
  });
}
const deleteuser = async (id) => {
  
  const res2 = await fetch(baseurl+ `/feedback/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const deletedata = await res2.json();

  if (res2.status === 422 || !deletedata) {
    console.log("error");
   
  } else {
   
    window.location.reload(true)
  }
};
  return (
    <>
    <div className='content-wrapper mt-5 p-4'>
      <h1 className='my-3  mx-2'>Feedback</h1>
      <div className='bg-white p-3 '>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Managment" {...a11yProps(0)} />
          <Tab label="IT Department" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className='mt-1 overflow-auto'>
                {
                  getuserdata.filter(obj=>obj.department==="managdepartment").map((element, id) => {
                    return (
                      <>
                      <div className='border rounded p-3 mb-1'>
                      <div className='m-2'>Name : <span className=''>{element.name}</span></div>
                      <div className='m-2'>Email : <span className=''>{element.email}</span></div>
                      <div className='m-2'>Phone Number : <span className=''>{element.number}</span></div>
                      <div className='m-2'>Message</div>
                      <div className='m-2'>{element.message}</div>
                      <div className='m-2 text-end'>
                        <button className='btn btn-warning' onClick={() => asktoconfirm(element._id)}>Delete</button>
                      </div>



                      </div>
                      </>
                    )
                  })
                }
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='mt-1 overflow-auto'>
                {
                  getuserdata.filter(obj=>obj.department==="itdepartment").map((element, id) => {
                    return (
                      <>
                      <div className='border rounded p-3 mb-1'>
                      <div className='m-2'>Name : <span className=''>{element.name}</span></div>
                      <div className='m-2'>Email : <span className=''>{element.email}</span></div>
                      <div className='m-2'>Phone Number : <span className=''>{element.number}</span></div>
                      <div className='m-2'>Message</div>
                      <div className='m-2'>{element.message}</div>
                      <div className='m-2 text-end'>
                        <button className='btn btn-warning' onClick={() => asktoconfirm(element._id)}>Delete</button>
                      </div>



                      </div>
                      </>
                    )
                  })
                }
      </div>
      </TabPanel>
      
    </Box>
      </div>
    
    </div>
    </>
    
  );
}

export default Feedback