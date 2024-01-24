import {status} from "../utils/permission";
import {VideoRender} from "./components/VideoRender";
import {PermissionDenied} from "./components/PermissionDenied";
import {Loader} from "./components/Loader";

export const HomePage = ({permissionStatus}) => {
  switch (permissionStatus) {
    case status.LOADING:
      return <Loader/>
    case status.DENIED:
      return <PermissionDenied/>
    case status.ALLOWED:
      return <VideoRender/>;
    default:
      return <h1>Loading ...</h1>
  }
}

