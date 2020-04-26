import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { appColor, incomeColor } from "../../styles/colors";
import { styles as Typography } from "../../styles/typography";

export default function IncomeScreen(props: any) {
  const screenSubheading = [Typography.h3, { color: appColor.darkTheme }];
  const headerStyle = [Typography.h2, { color: appColor.darkTheme }];
  return (
    <ScrollView contentContainerStyle={[styles.incomeContainer]}>
      <Text style={[Typography.h1, { color: appColor.darkTheme }]}>
        Your Income
      </Text>
      <View style={styles.header}>
        <Text style={headerStyle}>You currently have</Text>
        <Text style={[headerStyle, styles.headerHighlight]}> $2,100.0 </Text>
        <Text style={[headerStyle]}> of regular income per month</Text>
      </View>

      <Text style={screenSubheading}>Regular Income Sources</Text>
      <Text style={screenSubheading}>Summary</Text>
      <Text style={screenSubheading}>History</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  incomeContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 25,
  },
  header: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    // width: "80%",
  },
  headerHighlight: {
    color: incomeColor.darkTheme,
    paddingVertical: 10,
    paddingHorizontal: 5,
    // marginHorizontal: 5,
    borderWidth: 3,
    borderRadius: 28,
    borderColor: incomeColor.darkTheme,
  },
});
