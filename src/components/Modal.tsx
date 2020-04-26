import React, { useState } from "react";
import { StyleSheet, View, Modal as MyModalContainer } from "react-native";

import { Transaction } from "../../moolaTypes";
import { Color, getTheme } from "../styles/colors";
import Button from "./Buttons";
import FormInput from "./FormInputs";

type ModalProps = {
  type: "income" | "expense" | "savings";
  item?: Transaction;
};

export const Modal = (props: ModalProps) => {
  const Theme: Color = getTheme(props.type);
  const isNewItem: boolean = !!props.item;
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <MyModalContainer animationType="slide" visible={modalVisible}>
      <View
        style={[styles.modalContainer, { backgroundColor: Theme.lightTheme }]}
      >
        <Button
          themeType={props.type}
          type="cornerIcon"
          isNewItem={isNewItem}
          onPress={() => setModalVisible(!modalVisible)}
        />
        {/* <KeyboardAvoidingView behavior="padding"> */}
        <FormInput title="amount" type="money" themeType={props.type} />
        <FormInput title="reason" type="typeahead" themeType={props.type} />
        <FormInput title="repeat" type="picker" themeType={props.type} />

        <Button
          themeType={props.type}
          type="submitButton"
          isNewItem={isNewItem}
        />
        {/* </KeyboardAvoidingView> */}
      </View>
    </MyModalContainer>
  );
};

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
