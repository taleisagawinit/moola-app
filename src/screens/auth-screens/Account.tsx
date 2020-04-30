import * as React from "react";
import { Text, View } from "react-native";

import { appColor } from "../../styles/colors";
import { styles as Typography } from "../../styles/typography";

export default function AccountScreen(props: any) {
  return (
    <View style={Typography.screenContainer}>
      <Text style={[Typography.h1, { color: appColor.darkTheme }]}>
        Your Account
      </Text>
    </View>
  );
}
