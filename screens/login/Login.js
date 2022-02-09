import React, { useState, useEffect } from "react";
import { Text, View, Alert, TextInput, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  getDatabase,
  onValue,
  set,
  ref,
  push,
  child,
  update,
  remove,
} from "firebase/database";
import styles from "./styles";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //   const Profile = ({ userId }) => {
  //   //const [scoreCount, setScoreCount] = useState(0);
  // }
  const db = getDatabase();
  const profileRef = ref(db, "profiles/" + props.userId);
  console.log(props.userId);

  const register = () => {
    createUserWithEmailAndPassword(props.userAuth, email, password);
  };

  const login = () => {
    signInWithEmailAndPassword(props.userAuth, email, password);
  };

  useEffect(() => {
    if (props.userId !== "") {
      set(profileRef, {
        firstName: firstName,
        lastName: lastName,
      });
      props.navigation.navigate("Home");
    } else {
      setEmail("");
      setPassword("");
    }
  }, [props.userId]);

  //   useEffect(() => {
  //     return onValue(profileRef, (snapshot) => {
  //       if (snapshot.val() === null) {
  //         set(profileRef, {
  //           firstName: firstName,
  //           lastName: lastName,
  //         });
  //       } else {
  //       }
  //     });
  //   }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholder="name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="lastname"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        //  secureTextEntry
      />

      <TouchableOpacity style={styles.login} onPress={login}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login} onPress={register}>
        <Text style={styles.text}>register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
