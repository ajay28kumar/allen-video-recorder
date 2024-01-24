import {status} from "../utils/permission";
import {VideoRender} from "./components/VideoRender";
import {PermissionDenied} from "./components/PermissionDenied";

export const HomePage = ({permissionStatus}) => {
  switch (permissionStatus) {
    case status.LOADING:
      return <h1>Loading ...</h1>
    case status.DENIED:
      return <PermissionDenied/>
    case status.ALLOWED:
      return <VideoRender/>;
    default:
      return <h1>Loading ...</h1>
  }
}

