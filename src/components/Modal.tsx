import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, Modal as ModalContainer } from "react-native";

import { Transaction } from "../../moolaTypes";
import { Color, getTheme } from "../styles/colors";
import { styles as Typography } from "../styles/typography";

type ModalProps = {
  type: "income" | "expense" | "savings";
  item?: Transaction;
};

export const Modal = (props: ModalProps) => {
  const Theme: Color = getTheme(props.type);
  const isNewItem: boolean = !!props.item;

  return (
    <View
      style={[styles.modalContainer, { backgroundColor: Theme.lightTheme }]}
    >
      <AntDesign
        name={isNewItem ? "delete" : "closecircle"}
        size={32}
        color={Theme.darkTheme}
        style={styles.cornerIcon}
      />
      <View
        style={[Typography.roundedContainer, { borderColor: Theme.darkTheme }]}
      >
        <Text
          style={[
            Typography.h2,
            { color: Theme.darkTheme },
            Typography.capitalize,
          ]}
        >
          {isNewItem ? "Edit " + props.type : "Add " + props.type}
        </Text>
      </View>
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
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
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
});
