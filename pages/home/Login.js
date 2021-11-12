import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default class Login extends React.Component {
  render() {
    return (
      <View className={styles.container}>
        <Text>login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
