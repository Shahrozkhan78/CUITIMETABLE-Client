import React from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Booking from "./pages/booking";
import Reminder from "./pages/reminder";
import Report from "./pages/report";
import Timetable from "./pages/timetable";
import Fulltimetable from "./pages/fulltimetable";
import Room from "./pages/room";
import Datesheet from "./pages/datesheet";
import TeacherDatesheetLOGIN from "./pages/datesheetlogin";
import TeacherDatesheet from "./pages/teacherdatesheet";
import { Switch, Route } from "react-router-dom";
import Director from "./pages/director";
import Login from "./Admin/pages/Login";
import adminLogin from "./Admin/pages/AdminLogin";
import MainAdminpanel from "./Admin/pages/Admin/MainAdmin";
import MainAdminAboutus from "./Admin/pages/Admin/Aboutus";
import MainAdminDirector from "./Admin/pages/Admin/DirectorV";
import MainAdminFeedback from "./Admin/pages/Admin/Feedback";
import AdminDashboard from "./Admin/pages/Adminpanel";
import ITcontactus from "./Admin/pages/Contactus";
import ITSetting from "./Admin/pages/Settingit";
import Newituser from "./Admin/pages/Admin/Newituser";
import FeedbackAdmin from "./Admin/pages/Admin/FeedbackAdmin";
import Profilesetting from "./Admin/pages/Admin/Settingadmin";
import AdminRegisterUserPage from "./Admin/pages/Admin/AdminRegisterUser";
import AdminAllUserPage from "./Admin/pages/Admin/AdminAllUsers";
import ManagementAllUsers from "./Admin/pages/Admin/ManagementUsers";
import ManagementRegisterUsers from "./Admin/pages/Admin/ManagementRegiseterUser";
import Fileuploadit from "./Admin/pages/Admin/Fileuploadit";
import Reportsit from "./Admin/pages/Reportsit";
import MoniteringUsersSettings from "./Admin/pages/Admin/MoniteringUsers";
import ProtectedRoute from "./Admin/components/ProtectedRoute";
import AdminProtectedRoute from "./Admin/components/AdminProtectedRoute";
import ManagProtectedRoute from "./Admin/pages/VisitorAdmin/ManagementProtectedRout";
import Visitoradmin from "./Admin/pages/VisitorAdmin/Report";
import Profilesettingmang from "./Admin/pages/VisitorAdmin/ProfileSettingManag";
import DashboardAdminV from "./Admin/pages/VisitorAdmin/Dashboard";
import Feedbackmanag from "./Admin/pages/VisitorAdmin/FeedbackManag";
import MoniteringPage from "./Admin/pages/MoniteringMainpage/MoniteringMainpage";
import MoniteringPageLogin from "./Admin/pages/MoniteringMainpage/MoniteringLogin";
// import { NotificationProvider } from "./contexts/NotificationContext";
import StudentWeek from "./components/studentWeek/StudentWeek"; // it is correct, ignore error
import Schedulerapp from "./Admin/components/calendar/Schedulerapp"
import UserSchedulerapp from "./components/scalendar/UserSchedulerapp";

function App() {
  return (
    <>
      <Switch>
        {/* <NotificationProvider> */}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/booking" component={Booking}></Route>
        <Route exact path="/director" component={Director}></Route>
        <Route exact path="/reminder" component={Reminder}></Route>
        <Route exact path="/report" component={Report}></Route>
        <Route exact path="/timetable" component={Timetable}></Route>
        <Route exact path="/fulltimetable" component={Fulltimetable}></Route>
        <Route exact path="/rooms" component={Room}></Route>
        <Route exact path="/datesheet" component={Datesheet}></Route>
        <Route exact path="/studentWeek" component={StudentWeek}></Route>
        <Route exact path="/UserSchedulerapp" component={UserSchedulerapp}></Route>
        {/* <Route exact path="/Schedulerapp" component={Schedulerapp}></Route> */}
        <Route
          exact
          path="/teacherdatesheet"
          component={TeacherDatesheetLOGIN}
        ></Route>

        {/* ===============Main Admin panel Routes  =========================== */}

        <AdminProtectedRoute
          exact
          path="/admin/main"
          component={MainAdminpanel}
        />

        <AdminProtectedRoute
          exact
          path="/admin/about-us"
          component={MainAdminAboutus}
        />
        <AdminProtectedRoute
          exact
          path="/admin/director"
          component={MainAdminDirector}
        />
        <AdminProtectedRoute
          exact
          path="/admin/feedback"
          component={MainAdminFeedback}
        />
        <AdminProtectedRoute
          exact
          path="/admin/monitering_users_settings"
          component={MoniteringUsersSettings}
        />
        <AdminProtectedRoute
          exact
          path="/Admin/Addituser"
          component={Newituser}
        />
        <AdminProtectedRoute
          exact
          path="/Admin/Profilesetting"
          component={Profilesetting}
        />
        <AdminProtectedRoute
          exact
          path="/admin/register_new_user"
          component={AdminRegisterUserPage}
        />
        {/* ******************************************************* */}
        <AdminProtectedRoute
          exact
          path="/admin/Schedulerapp"
          component={Schedulerapp}
        />
        <AdminProtectedRoute
          exact
          path="/admin/admin_all_users"
          component={AdminAllUserPage}
        />
        <AdminProtectedRoute
          exact
          path="/mangement/register"
          component={ManagementRegisterUsers}
        />
        <AdminProtectedRoute
          exact
          path="/mangement/allusers"
          component={ManagementAllUsers}
        />
        <AdminProtectedRoute
          exact
          path="/admin/files_uploding"
          component={Fileuploadit}
        />
        <AdminProtectedRoute
          exact
          path="/admin/feedbacksection"
          component={FeedbackAdmin}
        />

        <Route exact path="/admin/login" component={adminLogin}></Route>
        {/* ==========================IT Admin panel Routes======================================= */}
        <Route exact path="/Admin" component={Login}></Route>
        <ProtectedRoute
          exact
          path="/Admin/Adminpanel"
          component={AdminDashboard}
        />
        <ProtectedRoute
          exact
          path="/Admin/Contactusit"
          component={ITcontactus}
        />
        <ProtectedRoute exact path="/Admin/Reports" component={Reportsit} />
        <ProtectedRoute exact path="/Admin/Setting" component={ITSetting} />

        {/* =============================Visitor Routing=========================================== */}
        <ManagProtectedRoute
          exact
          path="/managment/report"
          component={Visitoradmin}
        />
        <ManagProtectedRoute
          exact
          path="/managment/profilesetting"
          component={Profilesettingmang}
        />
        <ManagProtectedRoute
          exact
          path="/managment/feedback"
          component={Feedbackmanag}
        />
        <ManagProtectedRoute
          exact
          path="/management/dashboard"
          component={DashboardAdminV}
        />
        {/* ==================================================================== */}
        <Route exact path="/monitering" component={MoniteringPage}></Route>
        <Route
          exact
          path="/visitor/login"
          component={MoniteringPageLogin}
        ></Route>
        {/* ==========================Dashboard Admin========================================== */}
        {/* </NotificationProvider> */}
      </Switch>
    </>
  );
}

export default App;
