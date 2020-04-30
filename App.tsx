import React from "react";
import { Provider } from "react-redux";

import Sidebar from "./src/navigation/Sidebar";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Sidebar />
    </Provider>
  );
}
