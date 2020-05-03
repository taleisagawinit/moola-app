import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Switch,
  TextInput,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { Color, getTheme } from "../styles/colors";
import { styles as Typography } from "../styles/typography";

type FormInputProps = {
  themeType: "income" | "expense" | "savings";
  type: "money" | "date" | "typeahead" | "picker";
  title: string;
  value?: string;
  onChangeText?: any;
};

export default function FormInput(props: FormInputProps) {
  const Theme: Color = getTheme(props.themeType);
  const formLabel = [
    Typography.h3,
    Typography.dark,
    Typography.smallMarginV,
    Typography.capitalize,
  ];
  const formInput = [
    styles.inputContainer,
    Typography.h2,
    Typography.centerText,
    { color: Theme.darkTheme },
    Typography.extraPadding,
  ];
  const [isEnabled, setIsEnabled] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("Daily");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");
  // const [reason, setReason] = useState("");
  const toggleSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsEnabled((previousState) => !previousState);
  };
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  switch (props.type) {
    case "money":
      return (
        <View style={Typography.centerContent}>
          <Text style={formLabel}>{props.title}</Text>
          <TextInputMask
            style={formInput}
            placeholder="$100.00"
            keyboardType="number-pad"
            returnKeyType="done"
            placeholderTextColor={Theme.lightTheme}
            type="money"
            options={{
              unit: "$",
              separator: ".",
              delimiter: ",",
            }}
            value={props.value}
            onChangeText={props.onChangeText}
          />
        </View>
      );
    case "date":
      return (
        <View>
          <Text style={formLabel}>{props.title}</Text>
          <TextInputMask
            style={formInput}
            placeholder="MM/DD/YY"
            keyboardType="number-pad"
            returnKeyType="done"
            placeholderTextColor={Theme.lightTheme}
            type="datetime"
            options={{
              format: "MM/DD/YY",
            }}
            value={props.value}
            onChangeText={props.onChangeText}
          />
        </View>
      );
    case "typeahead":
      return (
        <View style={Typography.centerContent}>
          <Text style={formLabel}>{props.title}</Text>
          <TextInput
            style={formInput}
            returnKeyType="done"
            placeholder={
              props.themeType === "expense" ? "Postmates" : "Work Bonus"
            }
            placeholderTextColor={Theme.lightTheme}
            value={props.value}
            onChangeText={props.onChangeText}
          />
        </View>
      );
    case "picker":
      return (
        <View style={[Typography.centerContent]}>
          <View style={[Typography.centerContentRow]}>
            <Text style={formLabel}>{props.title}</Text>
            <Switch
              trackColor={{ false: Theme.lightTheme, true: "#fff" }}
              thumbColor={Theme.darkTheme}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={[
                styles.switchStyle,
                Typography.smallMarginH,
                {
                  borderColor: Theme.darkTheme,
                },
              ]}
            />
          </View>
          {isEnabled && (
            <Picker
              selectedValue={props.value}
              itemStyle={[formInput, styles.pickerStyles]}
              onValueChange={props.onChangeText}
            >
              <Picker.Item label="Daily" value="Daily" />
              <Picker.Item label="Weekly" value="Weekly" />
              <Picker.Item label="Every 2 Weeks" value="2 Weeks" />
              <Picker.Item label="Monthly" value="Monthly" />
            </Picker>
          )}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 250,
    marginBottom: 10,
  },
  cornerIcon: {
    position: "absolute",
    right: 25,
    top: 25,
  },
  pickerStyles: {
    height: 125,
  },
  switchStyle: { borderWidth: 3, borderRadius: 15 },
});
