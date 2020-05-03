import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import AccountScreens from "../screens/auth-screens/Account";
import ExpensesScreen from "../screens/auth-screens/Expenses";
import HomeScreen from "../screens/auth-screens/Home";
import IncomeScreen from "../screens/auth-screens/Income";
import SavingsScreen from "../screens/auth-screens/Savings";
import { getTheme, appColor } from "../styles/colors";
import { styles as Typography } from "../styles/typography";

const Drawer = createDrawerNavigator();

export default function Sidebar() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Income"
        screenOptions={{}}
        drawerStyle={{
          borderRadius: 40,
          // flexDirection: "column",
          // alignItems: "flex-end",
        }}
        drawerContentOptions={{
          inactiveTintColor: appColor.darkTheme,
          activeTintColor: getTheme("income").darkTheme,
          // activeBackgroundColor: "#fff",
          labelStyle: Typography.h3,
          contentContainerStyle: {},
          style: {},
          itemStyle: {
            paddingVertical: 10,
            // borderWidth: 5,
            flexDirection: "row",
            justifyContent: "flex-end",
            // alignItems: "flex-end",
          },
        }}
      >
        <Drawer.Screen name="Budget" component={HomeScreen} />
        <Drawer.Screen name="Income" component={IncomeScreen} />
        <Drawer.Screen name="Expenses" component={ExpensesScreen} />
        <Drawer.Screen name="Savings" component={SavingsScreen} />
        <Drawer.Screen name="Account" component={AccountScreens} />
        {/* <DrawerItem onPress={() => console.log("logged out")} label="Log Out" /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
