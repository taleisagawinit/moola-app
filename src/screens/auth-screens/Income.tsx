import * as React from "react";
import { Text, ScrollView } from "react-native";

import Modal from "../../components/Modal";
import { appColor, incomeColor } from "../../styles/colors";
import { styles as Typography } from "../../styles/typography";

export default function IncomeScreen(props: any) {
  return (
    <ScrollView contentContainerStyle={Typography.screenContainer}>
      <Text style={[Typography.h1, { color: appColor.darkTheme }]}>
        Your Income
      </Text>
      <Modal type="income" />
    </ScrollView>
  );
}
