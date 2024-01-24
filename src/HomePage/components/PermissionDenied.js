import React from 'react';
import {IconButton, Typography} from "@material-ui/core";
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicOffIcon from '@material-ui/icons/MicOff';

export const PermissionDenied = () => {
  const [cameraPermission, setCameraPermission] = React.useState(true);
  const [audioPermission, setAudionPermission] = React.useState(true)
  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true})
      .catch(e => setCameraPermission(false));
    navigator.mediaDevices
      .getUserMedia({ audio: true})
      .catch(e => setAudionPermission(false))
  });
  
  const getIcon = () => {
    if(!cameraPermission) {
      return <VideocamOffIcon color='error' style={{fontSize:200}}/>
    }
    if(!audioPermission) {
      return <MicOffIcon color='error' style={{fontSize:200}}/>
    }
  };
  const getText = () => {
    if(!cameraPermission) {
      return 'Please give permission for camera'
    }
    if(!audioPermission) {
      return  'Please give permission for Microphone'
    }
  };
  
  return (
    <div style={{
      height: '100vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div>
        <IconButton disabled>
          {getIcon()}
        </IconButton>
        <Typography variant="h3" component="h3">
          {getText()}
        </Typography>
      </div>
    </div>
  )
}
