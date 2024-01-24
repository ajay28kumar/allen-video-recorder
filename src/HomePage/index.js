import {status} from "../utils/permission";
import {VideoRender} from "./components/VideoRender";

export const HomePage = ({permissionStatus}) => {
  switch (permissionStatus) {
    case status.LOADING:
      return <h1>Loading ...</h1>
    case status.DENIED:
      return <h1>error</h1>
    case status.ALLOWED:
      return <VideoRender/>;
    default:
      return <h1>Loading ...</h1>
  }
}

