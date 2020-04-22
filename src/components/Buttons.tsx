import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, Switch } from "react-native";

import { Color, getTheme } from "../styles/colors";
import { styles as Typography } from "../styles/typography";

type ButtonProps = {
  themeType: "income" | "expense" | "savings";
  type: "done" | "close" | "toggle";
};

export const Button = (props: ButtonProps) => {
  const Theme: Color = getTheme(props.themeType);
  const doneStyle = [
    Typography.h2,
    Typography.smallMarginH,
    Typography.capitalize,
    { color: Theme.darkTheme },
  ];

  switch (props.type) {
    case "done":
      return (
        <TouchableOpacity style={[styles.buttonContainer]}>
          {/* todo: implement typeahead, limit max characters */}
          <Text style={doneStyle}>{props.type}</Text>
          <AntDesign name="checkcircle" size={32} color={Theme.darkTheme} />
        </TouchableOpacity>
      );
    case "close":
      return (
        <TouchableOpacity style={[styles.buttonContainer]}>
          {/* todo: implement typeahead, limit max characters */}
          <Text style={doneStyle}>{props.type}</Text>
          <AntDesign name="checkcircle" size={32} color={Theme.darkTheme} />
        </TouchableOpacity>
      );
  }
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 20,
  },
});
