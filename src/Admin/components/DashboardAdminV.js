import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,  } from 'recharts';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./DashboardAdminV.css"
import { PieChart, Pie,Legend, Sector, Cell,Tooltip, ResponsiveContainer } from 'recharts';

import LinearProgress from '@mui/material/LinearProgress';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
const data01 = [
  { name: 'Monday', value: 280 },
  { name: 'Tuesday', value: 300 },
  { name: 'Wednesday', value: 300 },
  { name: 'Thursday', value: 260 },
  { name: 'Friday', value: 240 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#00BC28'];

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
  const data = [
    {
      name: '1',
      total: 230,
      cancel: 30,
      conducted: 200,
      resecduale: 10,
      swap: 10,
      late: 10,
    },
    {
      name: '2',
      total: 280,
      cancel: 40,
      conducted: 200,
      resecduale: 10,
      swap: 10,
      late: 10,
    },
    {
      name: '3',
      total: 240,
      cancel: 30,
      conducted: 210,
      resecduale: 10,
      swap: 10,
      late: 10,
    },
    {
      name: '4',
      total: 280,
      cancel: 30,
      conducted: 250,
      resecduale: 10,
      swap: 10,
      late: 10,
    },
    {
      name: '5',
      total: 260,
      cancel: 20,
      conducted: 240,
      resecduale: 10,
      swap: 10,
      late: 10,
    },
  ];

  return (
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
                    <div className=' d-inline text-light  p-3 rounded-circle align-items-center justify-content-center' style={{backgroundColor:"#ED6D03"}}>  <GroupsRoundedIcon className='m-0 p-0'  /></div>
                
                   
                  </div>
                  <div className="col-auto mx-2 p-0  ">
                  
                  <p className='font-link font-weight-medium m-0 p-0 text-gray'>Total Lectures</p>
                  <p className='font-link font-weight-medium m-0 p-0 text-end ' style={{fontSize:"30px"}}>1230</p>
                   
                  </div>

                </div>
                

              </div>
              <LinearProgress variant="determinate" color="warning" value={100} sx={{borderRadius:"5px"}}/>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card  h-100 py-1 px-2 py-2">
              <div className="card-body m-0 p-0 d-flex">
                <div className="row no-gutters align-items-center w-100 m-0 p-0  ">
                  <div className="col mx-2 p-0 ">
                    <div className='bg-primary d-inline p-3 rounded-circle align-items-center justify-content-center'>  <GroupsRoundedIcon className='m-0 p-0'  /></div>
                
                   
                  </div>
                  <div className="col-auto mx-2 p-0  ">
                  
                  <p className='font-link font-weight-medium m-0 p-0 text-gray'>Conducted Lectures</p>
                  <p className='font-link font-weight-medium m-0 p-0 text-end ' style={{fontSize:"30px"}}>1230</p>
                   
                  </div>

                </div>
                

              </div>
              <LinearProgress variant="determinate"color="primary" value={100} sx={{borderRadius:"5px"}}/>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card  h-100 py-1 px-2 py-2">
              <div className="card-body m-0 p-0 d-flex">
                <div className="row no-gutters align-items-center w-100 m-0 p-0  ">
                  <div className="col mx-2 p-0 ">
                    <div className='bg-pink d-inline p-3 rounded-circle align-items-center justify-content-center'>  <GroupsRoundedIcon className='m-0 p-0'  /></div>
                
                   
                  </div>
                  <div className="col-auto mx-2 p-0  ">
                  
                  <p className='font-link font-weight-medium m-0 p-0 text-gray'>Cancel Lectures</p>
                  <p className='font-link font-weight-medium m-0 p-0 text-end ' style={{fontSize:"30px"}}>1230</p>
                   
                  </div>

                </div>
                

              </div>
              <LinearProgress variant="determinate" color="secondary" value={100} sx={{borderRadius:"5px"}}/>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card  h-100 py-1 px-2 py-2">
              <div className="card-body m-0 p-0 d-flex">
                <div className="row no-gutters align-items-center w-100 m-0 p-0  ">
                  <div className="col mx-2 p-0 ">
                    <div className='bg-success d-inline p-3 rounded-circle align-items-center justify-content-center'>  <GroupsRoundedIcon className='m-0 p-0'  /></div>
                
                   
                  </div>
                  <div className="col-auto mx-2 p-0  ">
                  
                  <p className='font-link font-weight-medium m-0 p-0 text-gray'>Late Lectures</p>
                  <p className='font-link font-weight-medium m-0 p-0 text-end ' style={{fontSize:"30px"}}>1230</p>
                   
                  </div>

                </div>
                

              </div>
              <LinearProgress variant="determinate" color="success"  value={60} sx={{borderRadius:"5px"}}/>
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
          <Bar dataKey="resecduale" fill="#4A55BC" />
          <Bar dataKey="swap" fill="#1A9FDF" />
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
  )
}

export default DashboardAdminV