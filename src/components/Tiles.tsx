import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Transaction } from "../../moolaTypes";
import { Color, getTheme } from "../styles/colors";
import { styles as Typography } from "../styles/typography";

export const RecurringTile = (props: Transaction) => {
  const Theme: Color = getTheme(props.type);

  return (
    <View
      style={[
        styles.regTile,
        Typography.shadow,
        { backgroundColor: Theme.lightTheme },
      ]}
      key={props.id}
    >
      <Text
        style={[
          Typography.h2,
          Typography.capitalize,
          { color: Theme.darkTheme },
        ]}
      >
        {props.name}
      </Text>
      <Text style={[Typography.h2, { color: Theme.darkTheme }]}>
        ${props.amount.toFixed(2)}/mo
      </Text>
    </View>
  );
};

export const HistoryTile = (props: Transaction) => {
  const Theme: Color = getTheme(props.type);

  return (
    <View
      style={[styles.hisTile, { borderColor: Theme.darkTheme }]}
      key={props.id}
    >
      <View>
        <Text style={[Typography.h1, { color: Theme.darkTheme }]}>
          ${props.amount.toFixed(2)}
        </Text>
      </View>
      <View style={styles.hisDetails}>
        <Text style={[Typography.p, { color: Theme.darkTheme }]}>
          {props.date}
        </Text>
        <View style={[styles.hisTag, { backgroundColor: Theme.lightTheme }]}>
          <Text
            style={[
              Typography.p,
              Typography.capitalize,
              { color: Theme.darkTheme },
            ]}
          >
            {props.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  regTile: {
    width: 175,
    height: 200,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  hisTile: {
    backgroundColor: "#fff",
    width: 300,
    height: 100,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
  },
  hisDetails: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  hisTag: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
  },
});
