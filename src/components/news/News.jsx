import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";
const News = () => {
  const [formData, setFormData] = useState({
    column1: "",
    column2: "",
    column3: "",
    column4: "",
    column5: "",
    column6: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log("Form submitted:", formData);
  // };

  return (
    <>
      <section class="news container">
        <div className="mb-3 newslink d-flex align-items-center justify-content-between">
          <h1 class="ml-5  latestnews">Latest News</h1>
          <a
            class="text-end"
            href="https://sahiwal.comsats.edu.pk/"
            target="_blank"
          >
            <p class="develop m-0 p-0  ">More</p>
          </a>
        </div>

        <div class="cover ">
          <div class="newsfied  p-4  mt-5 mb-5">
            <h5
              className="p-3 m-2 text-light rounded-3"
              style={{ backgroundColor: "#027BFF" }}
            >
              Convocation Registration 2022
            </h5>
            <p class=" mb-2 mt-4">
              Students who have graduated in Fall 2021 and Spring 2022 are
              eligible to participate in the Convocation to be held at CUI,
              Sahiwal Campus on Wednesday, November 09th, 2022.
            </p>
            <div className="text-center">
              <a
                href="https://sahiwal.comsats.edu.pk/Convocation_Reg.aspx"
                className=" fw-bold"
                style={{ color: "#027BFF" }}
                target={"_blank"}
              >
                Click Here For More Details
              </a>
            </div>
          </div>
          <div class="newsfied  p-4  mt-5 mb-5">
            <h5
              className="p-3 m-2 text-light rounded-3"
              style={{ backgroundColor: "#027BFF" }}
            >
              Academic Calendar FALL 2022
            </h5>
            <p class=" mb-2 mt-4">
              Semester Calendar for Undergraduate and Graduate FALL 2022
              semester has been declared.
            </p>
            <div className="text-center">
              <a
                href="https://sahiwal.comsats.edu.pk/Academic_Calendar.aspx"
                className=" fw-bold"
                style={{ color: "#027BFF" }}
                target={"_blank"}
              >
                Click Here to download
              </a>
            </div>
          </div>
          <div class="newsfied  p-4  mt-5 mb-5">
            <h5
              className="p-3 m-2 text-light rounded-3"
              style={{ backgroundColor: "#027BFF" }}
            >
              Admissions Fall 2022
            </h5>
            <p class=" mb-2 mt-4">Last date to apply is September 02, 2022.</p>
            <div className="text-center">
              <a
                href="https://admissions.comsats.edu.pk/"
                className=" fw-bold"
                style={{ color: "#027BFF" }}
                target={"_blank"}
              >
                Click Here to Apply
              </a>
            </div>
          </div>
          {/* Student week */}
          <div class="newsfied  p-4  mt-5 mb-5">
            <h5
              className="p-3 m-2 text-light rounded-3"
              style={{ backgroundColor: "#027BFF" }}
            >
              Student week Fall 2022
            </h5>
            {/* <p class=" mb-2 mt-4">Last date to apply is September 02, 2022.</p> */}
            <form onSubmit={""} style={{ overflow: "auto" }}>
              <table
                style={{
                  borderCollapse: "collapse",
                  // width: "1100px",
                  width: "100%",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        minWidth: "15%",
                        whiteSpace: "nowrap",
                        padding: "0 10px",
                      }}
                    >
                      <h5>Society Name</h5>
                    </th>
                    <th
                      style={{
                        minWidth: "30%",
                        whiteSpace: "nowrap",
                        padding: "0 10px",
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
                    <th
                      style={{
                        minWidth: "15%",
                        whiteSpace: "nowrap",
                        padding: "0 10px",
                      }}
                    >
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
                        Public Society
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
                        Main Pandal
                      </h6>
                    </td>
                    <td>
                      <Link to="#" target={"_blank"}>
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
                      <Link to="#" target={"_blank"}>
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
                      <Link to="#" target={"_blank"}>
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
            </form>
            <div className="text-center">
              <Link
                to="/studentWeek"
                className=" fw-bold"
                style={{ color: "#027BFF" }}
                target={"_blank"}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <script type="text/javascript"></script>
    </>
  );
};

export default News;
