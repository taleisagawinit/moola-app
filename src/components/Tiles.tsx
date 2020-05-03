import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Transaction } from "../../moolaTypes";
import { Color, getTheme, appColor } from "../styles/colors";
import { styles as Typography } from "../styles/typography";

export const RecurringTile = (props: Transaction) => {
  const Theme: Color = getTheme(props.type);

  return (
    <TouchableOpacity
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
        ${props.amount}/mo
      </Text>
    </TouchableOpacity>
  );
};

export const AddNewTile = () => {
  return (
    <TouchableOpacity
      style={[
        styles.regTile,
        // Typography.shadow,
        { backgroundColor: appColor.medTheme },
      ]}
      // key={props.id}
    >
      <Text
        style={[
          Typography.h2,
          Typography.capitalize,
          { color: appColor.darkTheme },
        ]}
      >
        Add New
      </Text>
    </TouchableOpacity>
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

export const GoalsTile = (props: Transaction) => {
  const Theme: Color = getTheme(props.type);

  return (
    <View
      style={[styles.goalsTile, { borderColor: Theme.darkTheme }]}
      key={props.id}
    >
      <View
        style={[
          styles.progressBar,
          // todo: get width dynamically
          { backgroundColor: Theme.lightTheme, width: "50%" },
        ]}
      >
        <View
          style={[
            styles.skew,
            { borderColor: Theme.darkTheme, backgroundColor: Theme.lightTheme },
          ]}
        />
      </View>
      <View style={styles.goals}>
        <View>
          <Text style={[Typography.h1, { color: Theme.darkTheme }]}>
            ${props.amount.toFixed(2)}
          </Text>
        </View>
        <View style={styles.hisDetails}>
          <Text style={[Typography.p, { color: Theme.darkTheme }]}>
            {props.date}
          </Text>
          <View
            style={[
              styles.hisTag,
              {
                backgroundColor: "#fff",
                borderColor: Theme.darkTheme,
                borderWidth: 1,
              },
            ]}
          >
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
    </View>
  );
};

const styles = StyleSheet.create({
  regTile: {
    width: 150,
    height: 175,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 25,
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
    marginBottom: 10,
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
  goalsTile: {
    backgroundColor: "#fff",
    width: 300,
    height: 100,
    borderRadius: 20,
    // borderWidth: 1,
    marginBottom: 10,
  },
  goals: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
    zIndex: 100,
  },
  progressBar: {
    position: "absolute",
    height: "100%",
    borderRadius: 20,
    zIndex: 10,
  },
  skew: {
    height: "100%",
    position: "absolute",
    width: 50,
    // borderRadius: 20,
    // borderWidth: 1,
    right: -15,
    transform: [{ skewX: "-20deg" }],
  },
});
