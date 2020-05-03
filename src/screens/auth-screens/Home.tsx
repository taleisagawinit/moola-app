import { FontAwesome5 } from "@expo/vector-icons";
import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

import Modal from "../../components/Modal";
import {
  appColor,
  incomeColor,
  expenseColor,
  savingsColor,
} from "../../styles/colors";
import { styles as Typography } from "../../styles/typography";

export default function HomeScreen(props: any) {
  const [incomeModal, setIncomeModal] = React.useState(false);
  const [expenseModal, setExpenseModal] = React.useState(false);
  const [savingsModal, setSavingsModal] = React.useState(false);
  const expenseArr = useSelector((appState: any) => appState.user.income);
  console.log("EXPENSE_ARR", expenseArr);
  function toggleModal(type: string) {
    switch (type) {
      case "income":
        setIncomeModal(!incomeModal);
        break;
      case "expense":
        setExpenseModal(!expenseModal);
        break;
      case "savings":
        setSavingsModal(!savingsModal);
        break;
    }
  }

  // function dismissModal()
  return (
    <View style={[Typography.centerContent, { flex: 1 }]}>
      <Text style={[Typography.h1, { color: appColor.darkTheme }]}>
        Here is your budget for today
      </Text>
      <Text>$35.90</Text>

      <View style={styles.homeButtons}>
        <View style={[styles.button, styles.addIncome]}>
          <TouchableOpacity
            onPress={() => toggleModal("income")}
            style={styles.iconStyle}
          >
            <FontAwesome5
              name="plus"
              size={42}
              color={incomeColor.darkTheme}
              style={styles.addIcon}
            />
          </TouchableOpacity>
          <Image source={require("../../../assets/pink.png")} />
        </View>
        <View style={[styles.button, styles.addExpense]}>
          <TouchableOpacity
            onPress={() => toggleModal("expense")}
            style={styles.iconStyle}
          >
            <FontAwesome5
              name="minus"
              size={42}
              color={expenseColor.darkTheme}
              style={styles.minusIcon}
            />
          </TouchableOpacity>
          <Image source={require("../../../assets/purple.png")} />
        </View>
        <View style={[styles.button, styles.addSavings]}>
          <TouchableOpacity
            onPress={() => toggleModal("savings")}
            style={styles.iconStyle}
          >
            <FontAwesome5
              name="piggy-bank"
              size={42}
              color={savingsColor.darkTheme}
              style={styles.savingsIcon}
            />
          </TouchableOpacity>
          <Image source={require("../../../assets/blue.png")} />
        </View>
      </View>
      {/* modals for the buttons on the bottom, consider creating a bottom app bar component to put these */}
      <Modal
        type="income"
        visible={incomeModal}
        dismiss={() => toggleModal("income")}
      />
      <Modal
        type="expense"
        visible={expenseModal}
        dismiss={() => toggleModal("expense")}
      />
      <Modal
        type="savings"
        visible={savingsModal}
        dismiss={() => toggleModal("savings")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  homeButtons: {
    position: "absolute",
    width: "100%",
    bottom: "11%",
  },
  button: {
    position: "absolute",
  },
  addIncome: {
    left: 0,
    top: 5,
  },
  addExpense: {
    left: "25%",
  },
  addSavings: {
    right: 0,
  },
  iconStyle: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    right: 20,
  },
  minusIcon: {
    top: 5,
  },
  savingsIcon: {
    // right: 0,
    left: 20,
  },
});
