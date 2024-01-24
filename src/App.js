import React from "react";
import './App.css';
import {getLocalStreamPermission, status} from "./utils/permission";
import { HomePage } from "./HomePage";

function App() {
  const [permissionStatus, setPermissionStatus] = React.useState(status.LOADING);
  React.useEffect(() => {
    getLocalStreamPermission()
      .then((stream) => {
        window.localStream = stream;
        setPermissionStatus(status.ALLOWED);
      })
      .catch((errorStatus) => {
        setPermissionStatus(status.DENIED);
      })
  });
  
  return (
    <div className="App">
      <HomePage permissionStatus={permissionStatus}/>
    </div>
  );
}

export default App;
