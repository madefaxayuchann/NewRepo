import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { signIn } from "../API/firebaseMethod";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View, TextInput, Image, Alert } from "react-native";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (!email) {
      Alert.alert("Email field is required.");
    }

    if (!password) {
      Alert.alert("Password field is required.");
    }

    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.ibb.co/y85TSGW/1545020444821-waifu2x-art-noise3-scale-tta-1-waifu2x-photo-noise3-scale-tta-1.png",
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        placeholderTextColor="grey"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.submit}
        underlayColor="#fff"
        onPress={handlePress}
      >
        <Text style={[styles.submitText]}>Log In</Text>
      </TouchableOpacity>
      <Text style={[styles.centerText]}>
        Belum Memiliki Akun ?
        <Text
          onPress={() => navigation.navigate("SignUp")}
          style={[styles.centerText]}
        >
          {" "}
          Buat disini{" "}
        </Text>
      </Text>

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
    marginTop: -5,
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
  centerText: {
    textAlign: "center",
    marginTop: 10,
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
