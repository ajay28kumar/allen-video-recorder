import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import videoData from "./reducers/videoData";
const configureStore = () => {
  return createStore(
    videoData,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export const store = configureStore();