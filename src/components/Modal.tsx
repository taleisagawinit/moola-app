import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Switch,
} from "react-native";

import { Transaction } from "../../moolaTypes";
import { Color, getTheme } from "../styles/colors";
import { styles as Typography } from "../styles/typography";
import { AmountInput, TypeaheadInput, PickerInput } from "./FormInputs";

type ModalProps = {
  type: "income" | "expense" | "savings";
  item?: Transaction;
};

export const Modal = (props: ModalProps) => {
  const Theme: Color = getTheme(props.type);
  const isNewItem: boolean = !!props.item;
  const doneStyle = [
    Typography.h2,
    Typography.smallMarginH,
    Typography.capitalize,
    { color: Theme.darkTheme },
  ];

  return (
    <View
      style={[styles.modalContainer, { backgroundColor: Theme.lightTheme }]}
    >
      <TouchableOpacity style={styles.cornerIcon}>
        <AntDesign
          name={isNewItem ? "delete" : "closecircle"}
          size={32}
          color={Theme.darkTheme}
        />
      </TouchableOpacity>
      <KeyboardAvoidingView behavior="padding">
        <AmountInput type={props.type} />
        <TypeaheadInput type={props.type} />
        <PickerInput type={props.type} />

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            Typography.roundedContainer,
            { borderColor: Theme.darkTheme },
          ]}
        >
          {/* todo: implement typeahead, limit max characters */}
          <Text style={doneStyle}>
            {isNewItem ? "Edit " + props.type : "Add " + props.type}
          </Text>
          <AntDesign name="checkcircle" size={32} color={Theme.darkTheme} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    padding: 25,
  },
  cornerIcon: {
    position: "absolute",
    right: 25,
    top: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // width: "80%",
    paddingVertical: 20,
    marginVertical: 20,
  },
});
