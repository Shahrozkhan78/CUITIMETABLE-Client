import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../navbar/Navbar";
import { Link } from "@mui/material";
import "./StudentWeek.css";

function StudentWeek() {
  const getTimetableData = [
    {
      Society_Name: "CLS",
      Event_Name: "Public Society",
      Date: "20 Nov 2020",
      Time: "2:00pm - 3:30pm",
      Venue: "Main Pandal",
      Registration_Link: "#",
    },
    {
      Society_Name: "CSDS",
      Event_Name: "Spelling Bee",
      Date: "20 Nov 2020",
      Time: "11:30am - 2:00pm",
      Venue: "Small Pandal",
      Registration_Link: "#",
    },
    {
      Society_Name: "CDS",
      Event_Name: "Podcast",
      Date: "20 Nov 2020",
      Time: "1:00pm - 3:30pm",
      Venue: "C5",
      Registration_Link: "#",
    },
  ];

  const [timetableData, setTimetableData] = useState(getTimetableData);

  const sortByTime = () => {
    const sortedData = [...timetableData].sort((a, b) => {
      const timeA = new Date("1970-01-01 " + a.Time.split(" - ")[0]);
      const timeB = new Date("1970-01-01 " + b.Time.split(" - ")[0]);
      return timeA - timeB;
    });

    setTimetableData(sortedData);
  };

  return (
    <div>
      <Navbar />

      {/* *********************** Monday ******************************** */}
      <div
        htmlFor=""
        style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}
      >
        Monday
      </div>
      <div style={{ overflow: "auto" }} class=" container">
        <div style={{ margin: "10px 0" }}></div>
        <div style={{ margin: "10px 0" }}></div>
        <table
          style={{
            borderCollapse: "collapse",
            // width: "1100px",
            width: "100%",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#027BFF",
                color: "white",
              }}
            >
              <th className="th-left-rounded  no-border">
                <h5>Society Name</h5>
              </th>
              <th
                style={{
                  minWidth: "30%",
                  whiteSpace: "nowrap",
                }}
              >
                <h5>Event Name</h5>
              </th>
              <th
                style={{
                  minWidth: "10%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Date</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Time</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Venue</h5>
              </th>
              <th className="th-right-rounded  no-border">
                <h5>Registration Link</h5>
              </th>
            </tr>
          </thead>
          <div style={{ margin: "10px 0" }}></div>

          {/* <div style={{ width: "100%", backgroundColor: "red" }}>
            <button onClick={sortByTime}>Filter by date</button>
          </div> */}
          <tbody>
            {/* 1st row */}
            {timetableData.map((item, index) => (
              <tr key={index}>
                <td>
                  <h6
                    style={{
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                    htmlFor=""
                  >
                    {item.Society_Name}
                  </h6>
                </td>
                <td>
                  <h6
                    style={{
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                    htmlFor=""
                  >
                    {item.Event_Name}
                  </h6>
                </td>
                <td>
                  <h6
                    style={{
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                    htmlFor=""
                  >
                    {item.Date}
                  </h6>
                </td>
                <td>
                  <h6
                    style={{
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                    htmlFor=""
                  >
                    {item.Time}
                  </h6>
                </td>
                <td>
                  <h6
                    style={{
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                    htmlFor=""
                  >
                    {item.Venue}
                  </h6>
                </td>
                <td>
                  <Link
                    to={item.Registration_Link}
                    target={"_blank"}
                    style={{ textDecoration: "none" }}
                  >
                    <h6
                      style={{
                        fontSize: "14px",
                        color: "#027BFF",
                        whiteSpace: "nowrap",
                        padding: "0 10px",
                      }}
                    >
                      Apply Here
                    </h6>
                  </Link>
                </td>
              </tr>
            ))}
            {/* 2nd row */}
            {/* <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CSDS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Spelling Bee
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  20 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  2:00pm - 4:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Small Pandal
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr> */}
            {/* 3rd row */}
            {/* <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CDS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Podcast
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  20 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  2:00pm - 4:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  C5
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr> */}
          </tbody>
        </table>

        {/* <button type="submit">Submit</button> */}
        <div style={{ margin: "20px 0" }}></div>
      </div>

      {/* *********************** Tuesday ******************************** */}
      <div
        htmlFor=""
        style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}
      >
        Tuesday
      </div>
      <div style={{ overflow: "auto" }} class=" container">
        <div style={{ margin: "10px 0" }}></div>
        <div style={{ margin: "10px 0" }}></div>
        <table
          style={{
            borderCollapse: "collapse",
            // width: "1100px",
            width: "100%",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#027BFF",
                color: "white",
              }}
            >
              <th className="th-left-rounded  no-border">
                <h5>Society Name</h5>
              </th>
              <th
                style={{
                  minWidth: "30%",
                  whiteSpace: "nowrap",
                }}
              >
                <h5>Event Name</h5>
              </th>
              <th
                style={{
                  minWidth: "10%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Date</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Time</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Venue</h5>
              </th>
              <th className="th-right-rounded  no-border">
                <h5>Registration Link</h5>
              </th>
            </tr>
          </thead>
          <div style={{ margin: "10px 0" }}></div>
          <tbody>
            {/* 1st row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CFAS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Canvas Painting
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  21 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  11:30pm - 2:00pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Exam Road
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
            {/* 2nd row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CMC{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Sufi Songs
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  21 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  11:30pm - 2:00pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Main pandal
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
            {/* 3rd row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CDS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Movie & song guess game
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  21 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  2:00pm - 4:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  C5
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <button type="submit">Submit</button> */}
        <div style={{ margin: "20px 0" }}></div>
      </div>
      {/* *********************** Wednesday ******************************** */}
      <div
        htmlFor=""
        style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}
      >
        Wednesday
      </div>
      <div style={{ overflow: "auto" }} class=" container">
        <div style={{ margin: "10px 0" }}></div>
        <div style={{ margin: "10px 0" }}></div>
        <table
          style={{
            borderCollapse: "collapse",
            // width: "1100px",
            width: "100%",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#027BFF",
                color: "white",
              }}
            >
              <th className="th-left-rounded  no-border">
                <h5>Society Name</h5>
              </th>
              <th
                style={{
                  minWidth: "30%",
                  whiteSpace: "nowrap",
                }}
              >
                <h5>Event Name</h5>
              </th>
              <th
                style={{
                  minWidth: "10%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Date</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Time</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Venue</h5>
              </th>
              <th className="th-right-rounded  no-border">
                <h5>Registration Link</h5>
              </th>
            </tr>
          </thead>
          <div style={{ margin: "10px 0" }}></div>
          <tbody>
            {/* 1st row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CLS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Book Review
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  22 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  2:00pm - 4:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  C1
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
            {/* 2nd row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CSDS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Campus Shark tank
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  22 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  11:30pm - 4:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Cs Ground
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
            {/* 3rd row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CSS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  E-gaming
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  22 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  2:00pm - 4:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  C lab 5
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <button type="submit">Submit</button> */}
        <div style={{ margin: "20px 0" }}></div>
      </div>
      {/* *********************** Thursday ******************************** */}
      <div
        htmlFor=""
        style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}
      >
        Thursday
      </div>
      <div style={{ overflow: "auto" }} class=" container">
        <div style={{ margin: "10px 0" }}></div>
        <div style={{ margin: "10px 0" }}></div>
        <table
          style={{
            borderCollapse: "collapse",
            // width: "1100px",
            width: "100%",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#027BFF",
                color: "white",
              }}
            >
              <th className="th-left-rounded  no-border">
                <h5>Society Name</h5>
              </th>
              <th
                style={{
                  minWidth: "30%",
                  whiteSpace: "nowrap",
                }}
              >
                <h5>Event Name</h5>
              </th>
              <th
                style={{
                  minWidth: "10%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Date</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Time</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Venue</h5>
              </th>
              <th className="th-right-rounded  no-border">
                <h5>Registration Link</h5>
              </th>
            </tr>
          </thead>
          <div style={{ margin: "10px 0" }}></div>
          <tbody>
            {/* 1st row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CMS & CDS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Tappay War
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  23 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  11:30pm - 2:00pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Main Pandal
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
            {/* 2nd row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CSDS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Ballon Pop Challange
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  23 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  2:00pm - 4:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  A-Block Main Entrance
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
            {/* 3rd row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CFAS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Pot decoration
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  23 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  11:30pm - 1:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Exam Road
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <button type="submit">Submit</button> */}
        <div style={{ margin: "20px 0" }}></div>
      </div>

      {/* *********************** Friday ******************************** */}
      <div
        htmlFor=""
        style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}
      >
        Friday
      </div>
      <div style={{ overflow: "auto" }} class=" container">
        <div style={{ margin: "10px 0" }}></div>
        <div style={{ margin: "10px 0" }}></div>
        <table
          style={{
            borderCollapse: "collapse",
            // width: "1100px",
            width: "100%",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#027BFF",
                color: "white",
              }}
            >
              <th className="th-left-rounded  no-border">
                <h5>Society Name</h5>
              </th>
              <th
                style={{
                  minWidth: "30%",
                  whiteSpace: "nowrap",
                }}
              >
                <h5>Event Name</h5>
              </th>
              <th
                style={{
                  minWidth: "10%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Date</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Time</h5>
              </th>
              <th
                style={{
                  minWidth: "15%",
                  whiteSpace: "nowrap",
                  padding: "0 10px",
                }}
              >
                <h5>Venue</h5>
              </th>
              <th className="th-right-rounded  no-border">
                <h5>Registration Link</h5>
              </th>
            </tr>
          </thead>
          <div style={{ margin: "10px 0" }}></div>
          <tbody>
            {/* 1st row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  CLS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Lok Virsa
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  24 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  9:30pm - 12:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Main Pandal
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
            {/* 2nd row */}
            <tr>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Student Affair Core, CLS{" "}
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Closing Cermony Prize Distribution
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  24 Nov 2020
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  1:30pm - 4:30pm
                </h6>
              </td>
              <td>
                <h6
                  style={{
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    padding: "0 10px",
                  }}
                  htmlFor=""
                >
                  Main Pandal
                </h6>
              </td>
              <td>
                <Link
                  to="#"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#027BFF",
                      whiteSpace: "nowrap",
                      padding: "0 10px",
                    }}
                  >
                    Apply here
                  </h6>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <button type="submit">Submit</button> */}
        <div style={{ margin: "20px 0" }}></div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentWeek;
