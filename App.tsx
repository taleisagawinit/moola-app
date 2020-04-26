import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import IncomeScreen from "./src/screens/auth-screens/Income";
import { appColor } from "./src/styles/colors";

export default function App() {
  return (
    <Provider store={store}>
      <IncomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColor.lightTheme,
  },
});
