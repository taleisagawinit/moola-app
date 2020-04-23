import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Switch,
  TextInput,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { Color, getTheme } from "../styles/colors";
import { styles as Typography } from "../styles/typography";
type FormInputProps = {
  type: "income" | "expense" | "savings";
};

export const AmountInput = (props: FormInputProps) => {
  const Theme: Color = getTheme(props.type);
  const formLabel = [Typography.h3, Typography.dark, Typography.smallMarginV];
  const formInput = [
    styles.inputContainer,
    Typography.h2,
    Typography.centerText,
    { color: Theme.darkTheme },
    Typography.extraPadding,
  ];
  const [amount, setAmount] = useState("");

  return (
    <View style={Typography.centerContent}>
      {/* todo: implement typeahead, limit max characters */}
      <Text style={formLabel}>Amount</Text>
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
          // the options for your mask if needed
        }}
        // dont forget to set the "value" and "onChangeText" props
        value={amount}
        onChangeText={(text) => {
          setAmount(text);
        }}
      />
    </View>
  );
};

export const DateInput = (props: FormInputProps) => {
  const Theme: Color = getTheme(props.type);
  const formLabel = [Typography.h3, Typography.dark, Typography.smallMarginV];
  const formInput = [
    styles.inputContainer,
    Typography.h2,
    Typography.centerText,
    { color: Theme.darkTheme },
    Typography.extraPadding,
  ];
  const [date, setDate] = useState("");

  return (
    <View>
      {/* todo: implement mask for $ value, limit max characters */}
      <Text style={formLabel}>Amount</Text>
      <TextInputMask
        style={formInput}
        placeholder="MM/DD/YY"
        keyboardType="number-pad"
        returnKeyType="done"
        placeholderTextColor={Theme.lightTheme}
        type="datetime"
        options={{
          format: "MM/DD/YY",
          // the options for your mask if needed
        }}
        // dont forget to set the "value" and "onChangeText" props
        value={date}
        onChangeText={(text) => {
          setDate(text);
        }}
      />
    </View>
  );
};

export const PickerInput = (props: FormInputProps) => {
  const Theme: Color = getTheme(props.type);
  const formLabel = [Typography.h3, Typography.dark, Typography.smallMarginV];
  const formInput = [
    styles.inputContainer,
    Typography.h2,
    Typography.centerText,
    { color: Theme.darkTheme },
  ];
  const [selectedValue, setSelectedValue] = useState("Daily");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={Typography.centerContent}>
      <View style={Typography.centerContentRow}>
        <Text style={formLabel}>Repeat</Text>
        <Switch
          trackColor={{ false: Theme.lightTheme, true: "#fff" }}
          thumbColor={Theme.darkTheme}
          // ios_backgroundColor="#3e3e3e"
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

      {isEnabled ? (
        <Picker
          selectedValue={selectedValue}
          itemStyle={[formInput, styles.pickerStyles]}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Daily" value="Daily" />
          <Picker.Item label="Weekly" value="Weekly" />
          <Picker.Item label="Every 2 Weeks" value="2 Weeks" />
          <Picker.Item label="Monthly" value="Monthly" />
        </Picker>
      ) : null}
    </View>
  );
};

export const TypeaheadInput = (props: FormInputProps) => {
  const Theme: Color = getTheme(props.type);
  const formLabel = [Typography.h3, Typography.dark, Typography.smallMarginV];
  const formInput = [
    styles.inputContainer,
    Typography.h2,
    Typography.centerText,
    { color: Theme.darkTheme },
    Typography.extraPadding,
  ];

  const [reason, setReason] = useState("");

  return (
    <View style={Typography.centerContent}>
      <Text style={formLabel}>Reason</Text>
      <TextInput
        style={formInput}
        returnKeyType="done"
        placeholder={props.type == "expense" ? "Postmates" : "Work Bonus"}
        placeholderTextColor={Theme.lightTheme}
        // dont forget to set the "value" and "onChangeText" props
        value={reason}
        onChangeText={(text) => {
          setReason(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: "70%",
    borderRadius: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
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
    maxHeight: 125,
  },
  switchStyle: { borderWidth: 3, borderRadius: 15 },
});
