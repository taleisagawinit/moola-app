import React from "react";
import { StyleSheet, View } from "react-native";

import { Transaction } from "./moolaTypes";
import { FormInput } from "./src/components/FormInputs";
import { appColor } from "./src/styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <FormInput type="expense" />
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
