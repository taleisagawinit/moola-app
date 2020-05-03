import * as React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";

import {
  RecurringTile,
  AddNewTile,
  HistoryTile,
  GoalsTile,
} from "../../components/Tiles";
import { appColor, savingsColor } from "../../styles/colors";
import { styles as Typography } from "../../styles/typography";

export default function SavingsSreen(props: any) {
  return (
    <ScrollView contentContainerStyle={[Typography.screenContainer]}>
      <View>
        <Text
          style={[Typography.h1, { color: appColor.darkTheme }, styles.title]}
        >
          Your Savings
        </Text>
        <View style={styles.highlight} />
      </View>
      {/* statement highlight */}
      <View style={styles.statementContainer}>
        <Text style={[Typography.h2, { color: appColor.darkTheme }]}>
          You currently saving
        </Text>
        <View style={styles.highlightContainer}>
          <View style={styles.statementHighlight}>
            <Text style={[Typography.h2, { color: savingsColor.darkTheme }]}>
              0.05%
            </Text>
          </View>
          <Text style={[Typography.h2, { color: appColor.darkTheme }]}>
            of your regular
          </Text>
        </View>
        <Text style={[Typography.h2, { color: appColor.darkTheme }]}>
          income per month
        </Text>
      </View>
      <View>
        <Text
          style={[
            Typography.h3,
            { color: appColor.darkTheme, marginBottom: 25 },
          ]}
        >
          Goals
        </Text>
        <View>
          <GoalsTile
            id={1}
            amount={52}
            name="Groceries"
            type="savings"
            date="5/2/20"
          />
          <GoalsTile
            id={2}
            amount={25}
            name="Postmates"
            type="savings"
            date="5/1/20"
          />
          <GoalsTile
            id={3}
            amount={1100}
            name="Rent"
            type="savings"
            date="5/1/20"
          />
        </View>
      </View>
      <View>
        <Text
          style={[
            Typography.h3,
            { color: appColor.darkTheme, marginBottom: 25 },
          ]}
        >
          History
        </Text>
        <View>
          <HistoryTile
            id={1}
            amount={52}
            name="Groceries"
            type="savings"
            date="5/2/20"
          />
          <HistoryTile
            id={2}
            amount={25}
            name="Postmates"
            type="savings"
            date="5/1/20"
          />
          <HistoryTile
            id={3}
            amount={1100}
            name="Rent"
            type="savings"
            date="5/1/20"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    zIndex: 100,
  },
  highlight: {
    width: 120,
    backgroundColor: savingsColor.lightTheme,
    height: 20,
    transform: [{ skewX: "-20deg" }],
    position: "absolute",
    right: 5,
    bottom: -5,
  },
  statementHighlight: {
    borderWidth: 3,
    borderColor: savingsColor.darkTheme,
    padding: 10,
    marginRight: 5,
    marginVertical: 5,
    borderRadius: 30,
  },
  highlightContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: savingsColor.lightTheme,
    width: 125,
    height: 150,
    marginVertical: 8,
    marginRight: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // marginHorizontal: 16,
  },
  scrollViewContainer: {
    marginTop: 50,
  },
  statementContainer: {
    marginVertical: 50,
  },
});
