import { createStore, combineReducers } from "redux";

import reducer from "./reducer";

export const rootReducer = combineReducers({
  user: reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
