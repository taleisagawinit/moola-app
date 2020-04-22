import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { incomeColor } from './src/styles/colors';
import { useFonts } from '@use-expo/font';
import { Ionicons } from '@expo/vector-icons';

export default function AppCopy() {
  let [fontsLoaded] = useFonts({
    'OpenSans-ExtraBold': require('./assets/Open_Sans/OpenSans-ExtraBold.ttf'),
  });
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Font Loading
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'OpenSans-ExtraBold', fontSize: 24, fontWeight: '700' }}>
          hello world
        </Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: incomeColor.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
