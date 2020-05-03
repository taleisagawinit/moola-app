import * as React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";

import { RecurringTile, AddNewTile, HistoryTile } from "../../components/Tiles";
import { appColor, incomeColor } from "../../styles/colors";
import { styles as Typography } from "../../styles/typography";

export default function IncomeScreen(props: any) {
  return (
    <ScrollView contentContainerStyle={[Typography.screenContainer]}>
      <View>
        <Text
          style={[Typography.h1, { color: appColor.darkTheme }, styles.title]}
        >
          Your Income
        </Text>
        <View style={styles.highlight} />
      </View>
      {/* statement highlight */}
      <View style={styles.statementContainer}>
        <Text style={[Typography.h2, { color: appColor.darkTheme }]}>
          You currently have
        </Text>
        <View style={styles.highlightContainer}>
          <View style={styles.statementHighlight}>
            <Text style={[Typography.h2, { color: incomeColor.darkTheme }]}>
              $2,100.0
            </Text>
          </View>
          <Text style={[Typography.h2, { color: appColor.darkTheme }]}>
            of regular
          </Text>
        </View>
        <Text style={[Typography.h2, { color: appColor.darkTheme }]}>
          income per month
        </Text>
      </View>
      <View>
        <Text style={[Typography.h3, { color: appColor.darkTheme }]}>
          Regular Income Sources
        </Text>
        <View style={[Typography.largeMarginV, { height: 200 }]}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // style={{ height: 500 }}
          >
            <RecurringTile id={1} amount={1200} name="work" type="income" />
            <AddNewTile />
          </ScrollView>
        </View>
      </View>
      <View>
        <Text
          style={[
            Typography.h3,
            Typography.largeMarginV,
            { color: appColor.darkTheme },
          ]}
        >
          History
        </Text>
        <View>
          <HistoryTile
            id={1}
            amount={300}
            name="paycheck"
            type="income"
            date="5/2/20"
          />
          <HistoryTile
            id={2}
            amount={300}
            name="paycheck"
            type="income"
            date="4/23/20"
          />
          <HistoryTile
            id={3}
            amount={300}
            name="paycheck"
            type="income"
            date="4/11/20"
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
    width: 100,
    backgroundColor: incomeColor.lightTheme,
    height: 20,
    transform: [{ skewX: "-20deg" }],
    position: "absolute",
    right: 10,
    bottom: -5,
  },
  statementHighlight: {
    borderWidth: 3,
    borderColor: incomeColor.darkTheme,
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
    backgroundColor: incomeColor.lightTheme,
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
