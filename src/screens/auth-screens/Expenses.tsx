import * as React from "react";
import { Text, ScrollView } from "react-native";

import Modal from "../../components/Modal";
import { appColor, expenseColor } from "../../styles/colors";
import { styles as Typography } from "../../styles/typography";

export default function ExpensesScreen(props: any) {
  return (
    <ScrollView contentContainerStyle={Typography.screenContainer}>
      <Text style={[Typography.h1, { color: appColor.darkTheme }]}>
        Your Expenses
      </Text>
      <Modal type="expense" />
    </ScrollView>
  );
}
