import * as React from "react";
import { Text, ScrollView } from "react-native";

import Modal from "../../components/Modal";
import { appColor, savingsColor } from "../../styles/colors";
import { styles as Typography } from "../../styles/typography";

export default function SavingsScreen(props: any) {
  return (
    <ScrollView contentContainerStyle={Typography.screenContainer}>
      <Text style={[Typography.h1, { color: appColor.darkTheme }]}>
        Your Savings
      </Text>
      <Modal type="savings" />
    </ScrollView>
  );
}
