import React, { useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { ImProfile } from "react-icons/im";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineSchool } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";

import "./Navbar.css";
import { Link } from "@mui/material";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


// import { useNotification } from "../../contexts/NotificationContext";

const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // Start Notification
  // useEffect(() => {}, []);
  // const { copiedNotifications } = useNotification();

  const [notifications, setNotifications] = useState([]); // Set the initial state
  const [userEmailList, setUserEmailList] = useState([]); // Set the initial state
  const [notificationCount, setNotificationCount] = useState(); // Set the initial count
  const [isDialogOpen, setIsDialogOpen] = useState(false);
 
  // console.log(notifications);
  // link of my realtime dataset on firebase
  const appSettings = {
    databaseURL:
      "https://cui-timetable-c2fa6-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };
  // connect over project to firebase
  const app = initializeApp(appSettings);
  const database = getDatabase(app);
  const notificationsListInDB = ref(database, "notificationsList");
  const userEmailListInDB = ref(database, "userEmailList");

  useEffect(() => {
    // show lenght only when their are items in firebase database
    onValue(notificationsListInDB, function (snapshot) {
      if (snapshot.exists()) {
        const newNotificationCount = notifications.length;
        setNotificationCount(newNotificationCount);
      }
    });
  }, [notifications]);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
    // markNotificationsAsRead();
    setNotificationCount("");
    // console.log("new notifi " + notifications);
    // to clear messages after reading them
    // if (!isDialogOpen === false) {
    //   getNotifications([]);
    // }
  };

  // fetching data from firebase
  useEffect(() => {
    onValue(notificationsListInDB, function (snapshot) {
      if (snapshot.exists()) {
        // firebase gives us data in object from
        // convert that object into Array
        let itemsArray = Object.values(snapshot.val());
        for (let i = 0; i < itemsArray.length; i++) {
          let currentItem = itemsArray[i];
          let currentItemID = currentItem[0];
          let currentItemValue = currentItem[1];

          setNotifications(itemsArray);
        }
      } else {
        setNotifications(["No Notifications here..."]);
        // shoppingListEl.innerHTML = "No items here...";
      }
    });
  }, []);

  // fetching email data from firebase
  useEffect(() => {
    onValue(userEmailListInDB, function (snapshot) {
      if (snapshot.exists()) {
        // firebase gives us data in object from
        // convert that object into Array
        let itemsArray = Object.values(snapshot.val());
        for (let i = 0; i < itemsArray.length; i++) {
          let currentItem = itemsArray[i];
          let currentItemID = currentItem[0];
          let currentItemValue = currentItem[1];

          setUserEmailList(itemsArray);
        }
      } else {
        setUserEmailList(["No Notifications here..."]);
        // shoppingListEl.innerHTML = "No items here...";
      }
    });
  }, []);


   // State to track whether notifications are read or not***********************************************
  //  const [notificationsRead, setNotificationsRead] = useState(false);

  //  useEffect(() => {
  //    // Check local storage to see if notifications are already marked as read
  //    const storedNotificationsRead = localStorage.getItem('notificationsRead');
 
  //    // Update state based on local storage value
  //    if (storedNotificationsRead) {
  //      setNotificationsRead(JSON.parse(storedNotificationsRead));
  //    }
  //  }, []); // Empty dependency array ensures the effect runs only once on component mount
 
  //  // Function to mark notifications as read
  //  const markNotificationsAsRead = () => {
  //    setNotificationsRead(true);
  //    // Update local storage to reflect that notifications are now marked as read
  //    localStorage.setItem('notificationsRead', JSON.stringify(true));
  //  };

  
  // Getting email and user name for email notifications*********************************
  const [myEmail, setEmail] = useState("");
  const [myName, setName] = useState("");


  function handleSubmit (e){
    e.preventDefault();

      // Create an object from the form data
      const dataObject = {
        email: myEmail,
        name: myName,
      };
      // console.log(dataObject)

      // Push the data to Firebase
      push(userEmailListInDB, dataObject);
      setEmail("")
      setName("")
    
  };

 

 

  const IconWrapper = styled(IoMdNotifications)`
    margin-right: 10px;
    color: ${(props) => (props.isOpen ? "white" : "white")};
    font-size: 28px;
    cursor: pointer;
  `;

  // console.log(userEmailList)

  // End Notification

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="pt-4 pb-4 p-2 " style={{ backgroundColor: "#0AA5FF" }}>
        <NavLink className=" logo d-flex align-items-center" to="/">
          <img src="./assets/images/logopng1231.png" alt="logo" />
          <div className="logoname ">
            <h1 className="text-light">CUI TIMETABLE</h1>
            <p className="text-light">Comsats University Sahiwal</p>
          </div>
        </NavLink>
      </div>

      <div>
        <ul className="">
          <li className="list-unstyled">
            <NavLink className="" to="/director">
              <div className="d-flex align-items-center mt-4 ">
                <ImProfile className="me-3 " style={{ color: "#0AA5FF" }} />
                <p className="m-0 p-0 NavLInkclass text-dark">Director Vison</p>
              </div>
            </NavLink>
          </li>
          <li className="list-unstyled">
            <NavLink className="" to="/about">
              <div className="d-flex align-items-center mt-4 ">
                <HiOutlineUserGroup
                  className="me-3 "
                  style={{ color: "#0AA5FF" }}
                />
                <p className="m-0 p-0 text-decoration-none text-dark">
                  About us
                </p>
              </div>
            </NavLink>
          </li>

          <li className="list-unstyled">
            <NavLink className="" to="/booking">
              <div className="d-flex align-items-center mt-4 ">
                <BsJournalBookmarkFill
                  className="me-3 "
                  style={{ color: "#0AA5FF" }}
                />
                <p className="m-0 p-0 text-decoration-none text-dark">
                  Booking
                </p>
              </div>
            </NavLink>
          </li>
          <li className="list-unstyled">
            <NavLink className="" to="/report">
              <div className="d-flex align-items-center mt-4 ">
                <AiOutlineFileProtect
                  className="me-3 "
                  style={{ color: "#0AA5FF" }}
                />
                <p className="m-0 p-0 text-decoration-none text-dark">
                  FeedBack / Report
                </p>
              </div>
            </NavLink>
          </li>
          
          <li className="list-unstyled">
            <a
              className=""
              href="https://swl-cms.comsats.edu.pk:8082/"
              target={"_blank"}
            >
              <div className="d-flex align-items-center mt-4 ">
                <SiGoogleclassroom
                  className="me-3 "
                  style={{ color: "#0AA5FF" }}
                />
                <p className="m-0 p-0 text-decoration-none text-dark">
                  Student Portal
                </p>
              </div>
            </a>
          </li>
          <li className="list-unstyled">
            <a
              className=""
              href="https://faculty.comsats.edu.pk/Home/login?returnUrl=https://faculty.comsats.edu.pk/"
              target={"_blank"}
            >
              <div className="d-flex align-items-center mt-4 ">
                <MdOutlineSchool
                  className="me-3 "
                  style={{ color: "#0AA5FF" }}
                />
                <p className="m-0 p-0 text-decoration-none text-dark">
                  Teacher Portal
                </p>
              </div>
            </a>
          </li>

          <li className="list-unstyled">
            <NavLink className="" to="/monitering">
              <div className="d-flex align-items-center mt-4 ">
                <VscSignIn className="me-3 " style={{ color: "#0AA5FF" }} />
                <p className="m-0 p-0 text-decoration-none text-dark">
                  Monitering
                </p>
              </div>
            </NavLink>
          </li>

{/* ============================================================================ */}
          <li className="list-unstyled">
            <NavLink className="" to="/">
              <div className="d-flex align-items-center mt-4 ">
                <VscSignIn className="me-3 " style={{ color: "#0AA5FF" }} />
                <p className="m-0 p-0 text-decoration-none text-dark">
                  Events
                </p>
              </div>
            </NavLink>
          </li>
{/* ============================================================================ */}
        </ul>
      </div>
    </Box>
  );
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  fluid-containers navbackg">
        <div className="container ">
          <div className="name">
            <NavLink className=" logo d-flex align-items-center" to="/">
              <img src="./assets/images/logopng1231.png" alt="logo" />
              <div className="logoname ">
                <h1>CUI TIMETABLE</h1>
                <p>Comsats University Sahiwal</p>
              </div>
            </NavLink>
          </div>

          {/* ============================================================================ */}

          <div>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button
                  className="navbar-toggler text-light m-0 p-0"
                  type="button"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          {/*=================================================================================  */}
          <div
            className=" collapse navbar-collapse nav-links justify-content-end "
            id=""
          >
            <ul className="navbar-nav mr-auto mb-5 mb-lg-0">
              <li className="nav-item mt-5 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/director"
                >
                  Director Vision
                </NavLink>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/booking"
                >
                  Bookings
                </NavLink>
              </li>

              <li className="nav-item mt-3 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/report"
                >
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/monitering"
                >
                  Monitering
                </NavLink>
              </li>
 {/*=================================================================================  */}
 <li className="nav-item mt-3 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/UserSchedulerapp"
                >
                  Events
                </NavLink>
              </li>
 {/*=================================================================================  */}
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div style={{ position: "relative" }}>
              <div className="notifiIcon" onClick={toggleDialog} isOpen={isDialogOpen}>
                {notificationCount > 0 && (
                  <div className="notifiIconBadge">{notificationCount}</div>
                )}
                <IconWrapper isOpen={isDialogOpen} />
              </div>
              {isDialogOpen && (
                <div className="notifiDialog">
                  {/* Notification content goes here */}
                  {/* <p>You have a new notification!</p> */}
                  <ul>
                    {notifications
                      .map((item, index) => (
                        <li key={index} index={index}>
                          {/* <p>{item}</p> */}
                          <Link
                            to="/"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {item.message ? item.message :item}
                            
                          </Link>
                          <p className="notiDate">{item.date}</p>
                        </li>
                      ))
                      .reverse()}
                  </ul>

                  {/* <p>{notifications}</p> */}
                  <hr />
                  <form className="notiForm" onSubmit={handleSubmit} style={{ padding: "0 10px" }}>
                  <input type="email" placeholder="Enter Email" value={myEmail}  onChange={(e)=>setEmail(e.target.value)} required/>
                  <input type="text" placeholder="Enter Name" value={myName}  onChange={(e)=>setName(e.target.value)} required/>
                    <button type="submit" className="signupButtonForEmail">
                      Sign up
                    </button>
                    <label style={{ marginBottom: "0px",fontSize:"14px",marginLeft:"5px" }}>
                       for email notifications
                    </label>
                  </form>
                </div>
              )}

              <button
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                type="button"
                className="btns btns-primary textb"
              >
                Sign In
              </button>
            </div>
            {/* ********************** model box ******************* */}
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content bg-primary">
                  <div class="modal-header">
                    <h5 class="modal-title text-light" id="staticBackdropLabel">
                      Sign In
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <a
                      className="text-light"
                      target="blank"
                      href="https://swl-cms.comsats.edu.pk:8082/"
                    >
                      Student
                    </a>
                  </div>
                  <div class="modal-body">
                    <a
                      className="text-light"
                      target="blank"
                      href="https://faculty.comsats.edu.pk/Home/login?returnUrl=https://faculty.comsats.edu.pk/"
                    >
                      Teacher
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
