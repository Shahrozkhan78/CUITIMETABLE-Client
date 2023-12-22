import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, } from 'recharts';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HashLoader from "react-spinners/BeatLoader";
import "./DashboardAdminV.css"
import { useState, useEffect } from 'react';

import { baseurl } from '../../baseurl/baseurl';
import { PieChart, Pie, Legend, Sector, Cell, Tooltip, ResponsiveContainer } from 'recharts';

import LinearProgress from '@mui/material/LinearProgress';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00BC28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const DashboardAdminV = () => {
  const [visibleloading, setvisibleloading] = useState(true)
  const [getAllData,setAllData]=useState("")
  // ===============================================================
  const [getData, setData] = useState("")
  const [getDataYes, setDataYes] = useState("")
  const [getDataNo, setDataNo] = useState("")
  const [getDataLate, setDataLate] = useState("")
  //======================================================
  const [getDataS, setDataS] = useState("")
  const [getDataS1, setDataS1] = useState("")
  const [getDataS2, setDataS2] = useState("")
  const [getDataS3, setDataS3] = useState("")
  // ========================================================
  //======================================================
  const [getDataU, setDataU] = useState("")
  const [getDataU1, setDataU1] = useState("")
  const [getDataU2, setDataU2] = useState("")
  const [getDataU3, setDataU3] = useState("")
  // ========================================================
  //======================================================
  const [getDataV, setDataV] = useState("")
  const [getDataV1, setDataV1] = useState("")
  const [getDataV2, setDataV2] = useState("")
  const [getDataV3, setDataV3] = useState("")
  // ========================================================
  //======================================================
  const [getDataW, setDataW] = useState("")
  const [getDataW1, setDataW1] = useState("")
  const [getDataW2, setDataW2] = useState("")
  const [getDataW3, setDataW3] = useState("")
  // ========================================================
  //======================================================
  const [getDataY, setDataY] = useState("")
  const [getDataY1, setDataY1] = useState("")
  const [getDataY2, setDataY2] = useState("")
  const [getDataY3, setDataY3] = useState("")
// ====================================================
    const[getMondayis,setMondayis]=useState("")
    const[getTuesdayis,setTuesdayis]=useState("")
    const[getThursdayis,setThursdayis]=useState("")
    const[getWednesdayis,setWednesdayis]=useState('')
    const[getFridayis,setFridayis]=useState("")
  // ========================================================

  // ==============================Get Data================
  const getdata = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // January is 0, so we add 1
    const day = today.getDate();

    const formattedDate = `${year}-${month}-${day}`;

    const res = await fetch(baseurl + "/lecturerocord/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res1 = await fetch(baseurl + "/lecture/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    const data1 = await res1.json();
    setAllData(data1)
    data.reverse()
    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      // console.log("test")
      // console.log(data)
      setData(data1.length)

      const t = data.filter((element) => {
        return element.Option === "4" || element.Option === "3"
      })
      const t1 = data.filter((element) => {
        return element.Option === "2"
      })
      const t2 = data.filter((element) => {
        return element.Option === "1"
      })
      setDataYes(t.length)
      setDataLate(t1.length)
      setDataNo(t2.length)



      // ================================================
  
      const s = data.filter((element) => {
        return element.Lecture == "1"
      })
      setDataS(s.length)
      const s1 = data.filter((element) => {
        return (element.Option === "4" || element.Option === "3") && element.Lecture == "1"
      })
      setDataS1(s1.length)
      const s2 = data.filter((element) => {
        return element.Option === "2" && element.Lecture == "1"
      })
      setDataS2(s2.length)
      const s3 = data.filter((element) => {
        return element.Option === "1" && element.Lecture == "1"
      })
      setDataS3(s3.length)
      // ==================================================
      
      // ========================Slote 3========================
      const u = data.filter((element) => {
        return element.Lecture == "2"
      })
      setDataU(u.length)
      const u1 = data.filter((element) => {
        return (element.Option === "4" || element.Option === "3") && element.Lecture == "2"
      })
      setDataU1(u1.length)
      const u2 = data.filter((element) => {
        return element.Option === "2" && element.Lecture == "2"
      })
      setDataU2(u2.length)
      const u3 = data.filter((element) => {
        return element.Option === "1" && element.Lecture == "2"
      })
      setDataU3(u3.length)
      // ==================================================

      // ========================Slote 3========================
      const v = data.filter((element) => {
        return element.Lecture == "3"
      })
      setDataV(v.length)
      const v1 = data.filter((element) => {
        return (element.Option === "4" || element.Option === "3") && element.Lecture === "3";
      });
      
      setDataV1(v1.length)

      const v2 = data.filter((element) => {
        return element.Option === "2" && element.Lecture == "3"
      })
      setDataV2(v2.length)
      const v3 = data.filter((element) => {
        return element.Option === "1" && element.Lecture == "3"
      })
      setDataV3(v3.length)
      // ==================================================

      // ========================Slote 4========================
      const w = data.filter((element) => {
        return element.Lecture == "4"
      })
      setDataW(w.length)
      const w1 = data.filter((element) => {
        return (element.Option === "4" || element.Option === "3") && element.Lecture == "4"
      })
      setDataW1(w1.length)
      const w2 = data.filter((element) => {
        return element.Option === "2" && element.Lecture == "4"
      })
      setDataW2(w2.length)
      const w3 = data.filter((element) => {
        return element.Option === "1" && element.Lecture == "4"
      })
      setDataW3(w3.length)
      // ==================================================
      // ========================Slote 5========================
      const y = data.filter((element) => {
        return element.Lecture == "5"
      })
      setDataY(y.length)
      const y1 = data.filter((element) => {
        return (element.Option === "4" || element.Option === "3" )&& element.Lecture == "5"
      })
      setDataY1(y1.length)
      const y2 = data.filter((element) => {
        return element.Option === "2" && element.Lecture == "5"
      })
      setDataY2(y2.length)
      const y3 = data.filter((element) => {
        return element.Option === "1" && element.Lecture == "5"
      })
      setDataY3(w3.length)
      // ==================================================
      const mondayisis=data1.filter((element)=>{
        return element.Day==="10000"
      })
     setMondayis(mondayisis.length)
      const tuesdayis=data1.filter((element)=>{
        return element.Day==="1000"
      })
     setTuesdayis(tuesdayis.length)
      const wednesdayis=data1.filter((element)=>{
        return element.Day==="100"
      })
     setWednesdayis(wednesdayis.length)
      const thursdayis=data1.filter((element)=>{
        return element.Day==="10"
      })
      setThursdayis(thursdayis.length)
      
      const fridayis=data1.filter((element)=>{
        return element.Day==="1"
      })
      setFridayis(fridayis.length)

 
      setvisibleloading(false)
    }
  };
  useEffect(() => {
    getdata();
  }, []);

// ============================================

  const data01 = [
    { name: 'Monday', value: getMondayis},
    { name: 'Tuesday', value: getTuesdayis },
    { name: 'Wednesday', value: getWednesdayis },
    { name: 'Thursday', value: getThursdayis},
    { name: 'Friday', value: getFridayis },
  ];



  // ====================================================
  const data = [
    {
      name: '1',
      total: getDataS,
      conducted: getDataS1,
      late: getDataS2,
      cancel: getDataS3,


    },
    {
      name: '2',
      total: getDataU,
      conducted: getDataU1,
      late: getDataU2,
      cancel: getDataU3,
    },
    {
      name: '3',
      total: getDataV,
      conducted: getDataV1,
      late: getDataV2,
      cancel: getDataV3,
    },
    {
      name: '4',
      total: getDataW,
      conducted: getDataW1,
      late: getDataW2,
      cancel: getDataW3,
    },
    {
      name: '5',
      total: getDataY,
      conducted: getDataY1,
      late: getDataY2,
      cancel: getDataY3,
    },
   
   
  ];
  // ===================


  return (
    <>
      {
        visibleloading ?
          <div className="loading-style " >  <HashLoader color={"#0AA5FF"} loading={visibleloading} className="" aria-label="Loading Spinner" data-testid="loader"
          /></div>
          :
          <div className='content-wrapper'>
            <div className='container mt-5 pt-4'>
              <h4 className='font-link mb-3'>Dashboard</h4>
              <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card  h-100 py-1 px-2 py-2">
                    <div className="card-body m-0 p-0 d-flex">
                      <div className="row no-gutters align-items-center w-100 m-0 p-0  ">
                        <div className="col mx-2 p-0 ">
                          <div className=' d-inline text-light  p-3 rounded-circle align-items-center justify-content-center' style={{ backgroundColor: "#ED6D03" }}>  <GroupsRoundedIcon className='m-0 p-0' /></div>
                        </div>
                        <div className="col-auto mx-2 p-0  ">
                          <p className='font-link font-weight-medium m-0 p-0 text-gray'>Total Lectures</p>
                          <p className='font-link font-weight-medium m-0 p-0 text-end ' style={{ fontSize: "30px" }}>{getData}</p>
                        </div>
                      </div>
                    </div>
                    <LinearProgress variant="determinate" color="warning" value={100} sx={{ borderRadius: "5px" }} />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card  h-100 py-1 px-2 py-2">
                    <div className="card-body m-0 p-0 d-flex">
                      <div className="row no-gutters align-items-center w-100 m-0 p-0  ">
                        <div className="col mx-2 p-0 ">
                          <div className='bg-primary d-inline p-3 rounded-circle align-items-center justify-content-center'>  <GroupsRoundedIcon className='m-0 p-0' /></div>
                        </div>
                        <div className="col-auto mx-2 p-0  ">
                          <p className='font-link font-weight-medium m-0 p-0 text-gray'>Conducted Lectures</p>
                          <p className='font-link font-weight-medium m-0 p-0 text-end ' style={{ fontSize: "30px" }}>{getDataYes}</p>
                        </div>
                      </div>
                    </div>
                    <LinearProgress variant="determinate" color="primary" value={100} sx={{ borderRadius: "5px" }} />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card  h-100 py-1 px-2 py-2">
                    <div className="card-body m-0 p-0 d-flex">
                      <div className="row no-gutters align-items-center w-100 m-0 p-0  ">
                        <div className="col mx-2 p-0 ">
                          <div className='bg-pink d-inline p-3 rounded-circle align-items-center justify-content-center'>  <GroupsRoundedIcon className='m-0 p-0' /></div>
                        </div>
                        <div className="col-auto mx-2 p-0  ">
                          <p className='font-link font-weight-medium m-0 p-0 text-gray'>Cancel Lectures</p>
                          <p className='font-link font-weight-medium m-0 p-0 text-end ' style={{ fontSize: "30px" }}>{getDataNo}</p>
                        </div>
                      </div>
                    </div>
                    <LinearProgress variant="determinate" color="secondary" value={100} sx={{ borderRadius: "5px" }} />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card  h-100 py-1 px-2 py-2">
                    <div className="card-body m-0 p-0 d-flex">
                      <div className="row no-gutters align-items-center w-100 m-0 p-0  ">
                        <div className="col mx-2 p-0 ">
                          <div className='bg-success d-inline p-3 rounded-circle align-items-center justify-content-center'>  <GroupsRoundedIcon className='m-0 p-0' /></div>
                        </div>
                        <div className="col-auto mx-2 p-0  ">
                          <p className='font-link font-weight-medium m-0 p-0 text-gray'>Late Lectures</p>
                          <p className='font-link font-weight-medium m-0 p-0 text-end ' style={{ fontSize: "30px" }}>{getDataLate}</p>
                        </div>
                      </div>
                    </div>
                    <LinearProgress variant="determinate" color="success" value={100} sx={{ borderRadius: "5px" }} />
                  </div>
                </div>
                {/* Earnings (Monthly) Card Example */}

              </div>
              <div className='row'>
                <div className="col-md-6 col-sm-12 mb-4  ">
                  <div className='card p-3'>
                    <p className='text-center mb-2 font-link font-weight-medium'>Lectures slotes overview</p>
                    <ResponsiveContainer width="100%" aspect={2}>
                      <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill=" #ED6D03" />
                        <Bar dataKey="cancel" fill="#E83F8B" />
                        <Bar dataKey="conducted" fill="#198754" />
                        <Bar dataKey="late" fill="#303134" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4  ">
                  <div className='card p-3'>
                    <p className='text-center mb-2 font-link font-weight-medium'>Lectures week overview</p>
                    <ResponsiveContainer width="100%" aspect={2}>
                      <PieChart width={400} height={400}>
                        <Tooltip />
                        <Legend />
                        <Pie
                          data={data01}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}

                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                </div>

              </div>


            </div>
          </div>
      }
    </>

  )
}

export default DashboardAdminV