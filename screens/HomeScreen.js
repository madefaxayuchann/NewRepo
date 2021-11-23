import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
import { loggingOut } from "../API/firebaseMethod";

export default function SignInScreen({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      try {
        let doc = await firebase
          .firestore()
          .collection("users")
          .doc(currentUserUID)
          .get();

        if (!doc.exists) {
          Alert.alert("No user data found!");
        } else {
          let dataObj = doc.data();
          setUsername(dataObj.username);
        }
      } catch (err) {
        Alert.alert("There is an error.", err.message);
      }
    }
    getUserInfo();
  });

  const handlePress = () => {
    loggingOut();
    navigation.replace("SignIn");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} underlayColor="#fff">
        <Text style={[styles.text]}>Selamat Datang</Text>
        <Text style={styles.text}>Hi {username}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Attandance")}
        style={styles.submit}
        underlayColor="#fff"
      >
        <Text style={[styles.submitText]}>Absensi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submit}
        underlayColor="#fff"
        onPress={handlePress}
      >
        <Text style={[styles.submitText]}>Menu Lainya</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  submit: {
    marginRight: 65,
    marginLeft: 65,
    marginTop: 30,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: "#FFA500",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    marginTop: 90,
  },
  box: {
    borderRadius: 10,
    backgroundColor: "#0000FF",
    height: 170,
    marginBottom: 150,
  },
});
