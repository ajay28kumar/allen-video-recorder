import React from 'react';
import  {
  FiberManualRecord,
  FiberSmartRecord,
  Stop,
  PlayArrow,
  Pause
} from '@material-ui/icons';

import { IconButton} from "@material-ui/core";


export const ActionGroup= (props) => {
  const [isRecording, setIsRecording] = React.useState('init');
  const { onVideoRecording, onVideoStop, onVideoPause } = props || {}
  
  return (
    <div style={{
      display: "flex"
    }}>
      <IconButton disabled>
        {isRecording==='record' ? <FiberSmartRecord
          htmlColor = 'red'
        /> : <FiberManualRecord disabled/>}
      </IconButton>
      <IconButton>
        {isRecording==='record' ?
          <Pause
            color = 'primary'
            onClick={() => {
              onVideoPause();
              setIsRecording('paused')
            }}/>
        : <PlayArrow color = 'primary' onClick = {() => {
            setIsRecording('record');
            onVideoRecording();
          }}/>
        }
      </IconButton>
      <IconButton disabled={isRecording==='init'}>
        <Stop color ={isRecording !== 'init' ? 'primary': 'disabled'} onClick={() => {
          onVideoStop();
          setIsRecording('init')
        }}/>
      </IconButton>
    </div>
  )
}