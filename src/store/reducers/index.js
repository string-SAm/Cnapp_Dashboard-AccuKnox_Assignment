import { combineReducers } from "redux";
import widgetsReducer from "./widgetsReducer";

const rootReducer = combineReducers({
  widgets: widgetsReducer,
});

export default rootReducer;
