import React from "react";
import { StyleSheet, View } from "react-native";

import { Modal } from "./src/components/Modal";
import { appColor } from "./src/styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Modal type="expense" />
    </View>
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
