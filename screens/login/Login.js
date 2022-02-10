import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
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
  const [toggleRegister, setToggleRegister] = useState(false);

  const db = getDatabase();

  const register = () => {
    createUserWithEmailAndPassword(props.userAuth, email, password);
  };

  const login = () => {
    signInWithEmailAndPassword(props.userAuth, email, password);
  };

  useEffect(() => {
    if (props.userId !== "") {
      props.navigation.navigate("Home");
    } else {
      setEmail("");
      setPassword("");
    }
  }, [props.userId]);

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          //  secureTextEntry
        />

        {toggleRegister ? (
          <TouchableOpacity style={styles.login} onPress={register}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.login} onPress={login}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        )}
        <br />
        <br />
        <Pressable onPress={() => setToggleRegister(!toggleRegister)}>
          <Text>Register For Account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

// {toggleRegister ? (
//     <Pressable onPress={() => setToggleRegister(!toggleRegister)}>
//       <Text>Need An Account?</Text>
//     </Pressable>
//   ) : (
//     <View>
//       <TouchableOpacity style={styles.login} onPress={register}>
//         <Text style={styles.text}>register</Text>
//       </TouchableOpacity>
//     </View>
//   )}
