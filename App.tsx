import React from "react";
import { StyleSheet } from "react-native";

import { Modal } from "./src/components/Modal";
import Sidebar from "./src/navigation/Sidebar";
import { appColor } from "./src/styles/colors";

export default function App() {
  return <Modal type="income" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColor.lightTheme,
  },
});
