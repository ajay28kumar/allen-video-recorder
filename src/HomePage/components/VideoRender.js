import React from "react";
import {Card, CardActions, CardContent } from "@material-ui/core";
import {ActionGroup} from "./Action";

export const VideoRender = () => {
  React.useEffect(() => {
    hasUserMedia();
  });
  const hasUserMedia = () => {
    navigator.getUserMedia(
      {video: true},
      handleVideo,
        e => console.log("e :", e))
      // .then(stream => console.log("stream data : ", stream));
  }
  
  let timeStarted;
  let totalTime;
  
  const handleVideo = (stream) => {
    const video = document.querySelector('video');
    video.srcObject = stream;
  };
  let mediaRecorder;
  const recordedBlobs = [];
  
  const onVideoRecording = () => {
    let options = { mimeType: "video/webm;codecs=vp9,opus" };
    try {
      mediaRecorder = new MediaRecorder(window.localStream, options);
    } catch (e) {
      console.error("Exception while creating MediaRecorder:", e);
    }
    
    mediaRecorder.ondataavailable = e => {
      if(e.data && e.data.size > 0) {
        if(!timeStarted) {
          timeStarted = e.timecode;
        }
        totalTime = e.timecode - timeStarted;
        console.log("totalTime : ", totalTime);
        recordedBlobs.push(e.data)
      }
    }
    mediaRecorder.start(e => console.log(e));
  }
  const onVideoStop = () => {
    mediaRecorder.stop();
    const recordedBlob = new Blob(recordedBlobs, {type: "video/webm"});
    const videoData = URL.createObjectURL(recordedBlob);
    const tempLink = document.createElement('a');
    tempLink.href = videoData;
    tempLink.setAttribute('download', 'temp-record');
    tempLink.click();
  }
  const onVideoPause = () => {
    mediaRecorder.pause();
  }
  return (
    <Card>
      <CardContent>
        <video
          height='90%'
          width="90%"
          autoPlay
          id="video"
        />
      </CardContent>
      <CardActions style={{justifyContent: "center"}}>
        <ActionGroup
          onVideoRecording={onVideoRecording}
          onVideoStop = {onVideoStop}
          onVideoPause={onVideoPause}
          recordedBlobs={recordedBlobs}
        />
        
      </CardActions>
    </Card>
  )
}