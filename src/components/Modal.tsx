import React, { useState } from "react";
import { StyleSheet, View, Modal as MyModalContainer } from "react-native";

import { Transaction } from "../../moolaTypes";
import { submitInputValues } from "../redux/actions";
import { Color, getTheme } from "../styles/colors";
import Button from "./Buttons";
import FormInput from "./FormInputs";

type ModalProps = {
  type: "income" | "expense" | "savings";
  visible: boolean;
  item?: Transaction;
  dismiss: any;
};

export default function Modal(props: ModalProps) {
  const Theme: Color = getTheme(props.type);
  const isNewItem: boolean = !!props.item;
  // const [isEnabled, setIsEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Daily");
  const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  function submitValues() {
    console.log({
      AMOUNT: amount,
      REASON: reason,
      SELECTED_VALUE: selectedValue,
    });
  }

  return (
    <MyModalContainer animationType="slide" visible={props.visible}>
      <View
        style={[styles.modalContainer, { backgroundColor: Theme.lightTheme }]}
      >
        <Button
          themeType={props.type}
          type="cornerIcon"
          isNewItem={isNewItem}
          onPress={props.dismiss}
        />
        <FormInput
          title="amount"
          type="money"
          themeType={props.type}
          value={amount}
          onChangeText={(text: any) => setAmount(text)}
        />
        <FormInput
          title="reason"
          type="typeahead"
          themeType={props.type}
          value={reason}
          onChangeText={(text: any) => setReason(text)}
        />
        <FormInput
          title="repeat"
          type="picker"
          themeType={props.type}
          value={selectedValue}
          onChangeText={(text: any) => setSelectedValue(text)}
        />

        <Button
          themeType={props.type}
          type="submitButton"
          isNewItem={isNewItem}
          onSubmit={() => submitInputValues(props.type, { amount, reason })}
        />
      </View>
    </MyModalContainer>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 40,
    height: "80%",
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    bottom: 0,
    padding: 25,
  },
});
