import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Picker,
  TouchableOpacity,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { Color, getTheme } from "../styles/colors";
import { styles as Typography } from "../styles/typography";
type ModalProps = {
  type: "income" | "expense" | "savings";
};

export const amountInput = (props: ModalProps) => {
  const Theme: Color = getTheme(props.type);
  const formLabel = [Typography.h3, Typography.dark, Typography.smallMargin];
  const formInput = [
    styles.inputContainer,
    Typography.h2,
    Typography.centerText,
    { color: Theme.darkTheme },
  ];
  const [amount, setAmount] = useState("");

  return (
    <View>
      {/* todo: implement typeahead, limit max characters */}
      <Text style={formLabel}>Reason</Text>
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

export const dateInput = (props: ModalProps) => {
  const Theme: Color = getTheme(props.type);
  const formLabel = [Typography.h3, Typography.dark, Typography.smallMargin];
  const formInput = [
    styles.inputContainer,
    Typography.h2,
    Typography.centerText,
    { color: Theme.darkTheme },
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

export const FormInput = (props: ModalProps) => {
  const Theme: Color = getTheme(props.type);
  const formLabel = [Typography.h3, Typography.dark, Typography.smallMargin];
  const formInput = [
    styles.inputContainer,
    Typography.h2,
    Typography.centerText,
    { color: Theme.darkTheme },
  ];
  const [selectedValue, setSelectedValue] = useState("Daily");

  return (
    <KeyboardAvoidingView>
      <KeyboardAvoidingView style={Typography.centerContent}>
        <Text style={formLabel}>Repeat</Text>
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
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
};

export const TypeaheadInput = (props: ModalProps) => {
  const Theme: Color = getTheme(props.type);
  const formLabel = [Typography.h3, Typography.dark, Typography.smallMargin];
  const formInput = [
    styles.inputContainer,
    Typography.h2,
    Typography.centerText,
    { color: Theme.darkTheme },
  ];
  const [reason, setReason] = useState("Daily");

  return (
    <KeyboardAvoidingView>
      <KeyboardAvoidingView style={Typography.centerContent}>
        <Text style={formLabel}>Reason</Text>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
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
    padding: 20,
    width: 250,
  },
  cornerIcon: {
    position: "absolute",
    right: 25,
    top: 25,
  },
  pickerStyles: {
    maxHeight: 150,
  },
});
