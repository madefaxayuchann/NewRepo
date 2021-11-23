import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { registration } from "../API/firebaseMethod";
import {
  Text,
  View,
  TextInput,
  Image,
  Alert,
  ScrollView,
  Keyboard,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emptyState = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handlePress = () => {
    if (!username) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      registration(email, password, username);
      navigation.navigate("Loading");
      emptyState();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://i.ibb.co/y85TSGW/1545020444821-waifu2x-art-noise3-scale-tta-1-waifu2x-photo-noise3-scale-tta-1.png",
          }}
        />
        <ScrollView onBlur={Keyboard.dismiss}>
          <TextInput
            style={styles.input}
            value={username}
            placeholder="Username"
            placeholderTextColor="grey"
            onChangeText={(username) => setUsername(username)}
          />
          <TextInput
            style={styles.input}
            value={email}
            placeholder="example@gmail.com"
            placeholderTextColor="grey"
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(password2) => setConfirmPassword(password2)}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.submit}
            underlayColor="#fff"
            onPress={handlePress}
          >
            <Text style={[styles.submitText]}>Register</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  image: {
    width: 230,
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 60,
    marginTop: 120,
  },
  button: {
    borderRadius: 70,
    backgroundColor: "#A9A9A9",
  },
  submit: {
    marginRight: 65,
    marginLeft: 65,
    marginTop: -18,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: "#0000FF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
  },
  input: {
    width: 300,
    marginBottom: 30,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    color: "#DCDCDC",
  },
});
