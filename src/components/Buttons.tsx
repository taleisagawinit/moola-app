import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  LayoutAnimation,
} from "react-native";

import { Color, getTheme } from "../styles/colors";
import { styles as Typography } from "../styles/typography";

type ButtonProps = {
  themeType: "income" | "expense" | "savings";
  type: "submitButton" | "toggle" | "cornerIcon";
  isNewItem: boolean;
  onPress?: any;
};

export default function Button(props: ButtonProps) {
  const Theme: Color = getTheme(props.themeType);
  const doneStyle = [
    Typography.h2,
    Typography.smallMarginH,
    Typography.capitalize,
    { color: Theme.darkTheme },
  ];
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsEnabled((previousState) => !previousState);
  };
  switch (props.type) {
    case "submitButton":
      return (
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            Typography.roundedContainer,
            { borderColor: Theme.darkTheme },
          ]}
        >
          <Text style={doneStyle}>
            {props.isNewItem ? "Edit" : "Add"} {props.themeType}
          </Text>
          <AntDesign name="checkcircle" size={32} color={Theme.darkTheme} />
        </TouchableOpacity>
      );
    case "toggle":
      return (
        <Switch
          trackColor={{ false: Theme.lightTheme, true: "#fff" }}
          thumbColor={Theme.darkTheme}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={[
            styles.toggleStyle,
            Typography.smallMarginH,
            {
              borderColor: Theme.darkTheme,
            },
          ]}
        />
      );
    case "cornerIcon":
      return (
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.cornerIcon}
          // onPress={() => setModalVisible(!modalVisible)}
        >
          <AntDesign
            name={props.isNewItem ? "delete" : "closecircle"}
            size={32}
            color={Theme.darkTheme}
          />
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
    // width: "80%",
    paddingVertical: 20,
    marginTop: 10,
  },
  cornerIcon: {
    position: "absolute",
    right: 25,
    top: 25,
  },
  toggleStyle: { borderWidth: 3, borderRadius: 15 },
});
