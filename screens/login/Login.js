import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  Button,
  ImageBackground,
  Image,
} from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
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
// import Login from './Login';
// import { BackgroundImage } from "react-native-elements/dist/config";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleRegister, setToggleRegister] = useState(false);

  const db = getDatabase();

  const register = () => {
    createUserWithEmailAndPassword(props.userAuth, email, password);
    setToggleRegister(true);
  };

  const login = () => {
    signInWithEmailAndPassword(props.userAuth, email, password);
    setToggleRegister(false);
  };

  useEffect(() => {
    // if (props.userId ==="") {
    //   props.navigation.navigate("Login");
    if (props.userId !== "") {
      props.navigation.navigate("Home");
    } else {
      setEmail("");
      setPassword("");
    }
  }, [props.userId]);

  return (
    <View style={styles.container}>
      <Image
        // style={styles.imgBgd}
        source={require("../../assets/Loginimg2.png")}
      />
      <View style={styles.loginContainer}>
        {toggleRegister ? (
          <View>
            <Text style={styles.loginTitle}>Register</Text>
            <View style={styles.textInputContaine}>
              <Text style={styles.emailTitle}>Email/Username</Text>
              <TextInput
                style={styles.emailInput}
                placeholder="Type your email or username"
                value={email}
                onChangeText={setEmail}
              />
              <Text style={styles.passwordTitle}>Password</Text>
              <TextInput
                style={styles.passwordInput}
                placeholder="Type your password"
                value={password}
                onChangeText={setPassword}
                //  secureTextEntry
              />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={register}>
              <Text style={styles.btnText}>Let's Go</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.registerBtn}
                onPress={() => setToggleRegister(!toggleRegister)}
              >
                <Text>Need to login?</Text>
              </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.textInputContaine}>
              <Text style={styles.emailTitle}>Email/Username</Text>
              <TextInput
                style={styles.emailInput}
                placeholder="Type your email or username"
                value={email}
                onChangeText={setEmail}
              />
              <Text style={styles.passwordTitle}>Password</Text>
              <TextInput
                style={styles.passwordInput}
                placeholder="Type your password"
                value={password}
                onChangeText={setPassword}
                //  secureTextEntry
              />

              <TouchableOpacity style={styles.loginBtn} onPress={login}>
                <Text style={styles.btnText}>Let's Go</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.registerBtn}
                onPress={() => setToggleRegister(!toggleRegister)}
              >
                <Text>Need an account?</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      {/* {toggleRegister ? (
          <TouchableOpacity style={styles.login} onPress={login}>
          <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.login} onPress={register}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity
          title="Register"
          onPress={() => setToggleRegister(!toggleRegister)}
        >
          <Text>Do you have account?</Text>
        </TouchableOpacity> */}

      {/* <TouchableOpacity onPress={register}>
          <Text style={styles.text}>Register / </Text>
        </TouchableOpacity> */}
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
