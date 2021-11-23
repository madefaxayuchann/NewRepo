import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

export default function Attandance({ navigation }) {
  let [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds
    setTimeout(() => {
      setCurrentDate(
        date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
      );
    }, 1000);
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Current Date Time</Text>
          <Text style={styles.textStyle}>{currentDate}</Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "grey",
          }}
        >
          React Native Get Current Date Time
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
          }}
        >
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "black",
  },
});
