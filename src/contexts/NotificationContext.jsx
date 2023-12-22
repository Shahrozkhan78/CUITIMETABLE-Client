/* import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

// 1. Create context
const NotificationContext = createContext();

// const initialState = {
//   notifications: [
//     "Hello i'm a bummy",
//     "Hello i'm a bummy",
//     "Hello i'm a bummy",
//     "Hello i'm a bummy",
//     "Hello i'm a bummy",
//   ],
//   notificationCount: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "notifications":
//       return {
//         ...state,
//         notifications: action.payload,
//       };

//     default:
//       throw new Error("Unknown action type");
//   }
// }

function NotificationProvider({ children }) {
  // const [{ notifications, notificationCount }, dispatch] = useReducer(
  //   reducer,
  //   initialState
  // );
  const [notifications, setNotifications] = useState([
    "message 1",
    "message 2",
  ]);
  const [copiedNotifications, setCopiedNotifications] = useState([]);

  function getNotifications(data) {
    // console.log("new data " + [data]);
    // dispatch({ type: "notifications", payload: data });
    setNotifications((notifi) => [...notifi, data]);
    // setNotifications(data);
  }

  useEffect(() => {
    setCopiedNotifications([...notifications]);
  }, [notifications]);

  console.log("new notofi ");
  console.log(copiedNotifications);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        getNotifications,
        copiedNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

// Custom Hook
function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined)
    throw new Error(
      "NotificationContext was used outside the NotificationProvider"
    );
  return context;
}
export { NotificationProvider, useNotification };
*/
