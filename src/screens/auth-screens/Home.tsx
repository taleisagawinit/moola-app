import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

import Modal from "../../components/Modal";
import {
  appColor,
  incomeColor,
  expenseColor,
  savingsColor,
} from "../../styles/colors";
import { styles as Typography } from "../../styles/typography";

export default function HomeScreen(props: any) {
  return (
    <View style={[Typography.centerContent, { flex: 1 }]}>
      <Text style={[Typography.h1, { color: appColor.darkTheme }]}>
        Here is your budget for today
      </Text>
      <Text>$35.90</Text>

      <View style={styles.homeButtons}>
        <View style={[styles.button, styles.addIncome]}>
          <TouchableOpacity style={styles.iconStyle}>
            <FontAwesome5 name="plus" size={42} color={incomeColor.darkTheme} />
          </TouchableOpacity>
          <Image source={require("../../../assets/pink.png")} />
        </View>
        <View style={[styles.button, styles.addExpense]}>
          <TouchableOpacity style={styles.iconStyle}>
            <FontAwesome5
              name="minus"
              size={42}
              color={expenseColor.darkTheme}
            />
          </TouchableOpacity>
          <Image source={require("../../../assets/purple.png")} />
        </View>
        <View style={[styles.button, styles.addSavings]}>
          <TouchableOpacity style={styles.iconStyle}>
            <FontAwesome5
              name="piggy-bank"
              size={42}
              color={savingsColor.darkTheme}
            />
          </TouchableOpacity>
          <Image source={require("../../../assets/blue.png")} />
        </View>
      </View>
      {/* <Modal type="income" /> */}
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
    left: "25%",
    top: "25%",
    zIndex: 100,
  },
});
