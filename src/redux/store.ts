import { createStore } from "redux";

import reducer from "./reducer";

// const rootReducer = combineReducers({
//   firstsReducer: firstsReducer,
//   authReducer: authReducer
// });

const store = createStore(reducer);

export default store;
