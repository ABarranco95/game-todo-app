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
  ImageBackground, Image
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
       <BackgroundImage 
        style={styles.imgBgd}
        source={
          require( '../../assets/Loginimg2.png')
        }
        
      > 
       </BackgroundImage>
      <View>
     
       
        <TextInput
          style={styles.textInput}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          //  secureTextEntry
        />
         <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        {/* {toggleRegister ? (
         <TouchableOpacity style={styles.login} onPress={login}>
         <Text style={styles.text}>Login</Text>
       </TouchableOpacity>
        ) : (
          
           <TouchableOpacity style={styles.login} onPress={register}>
           <Text style={styles.text}>Register</Text>
         </TouchableOpacity>
        )}
       
        <TouchableOpacity title="Register"onPress={() => setToggleRegister(!toggleRegister)}><Text>Do you have account?</Text></TouchableOpacity>
       */}
      </View>
      <View style={styles.login}>
     
        <TouchableOpacity  onPress={register}>
        <Text style={styles.text}>Register / </Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity  onPress={login}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>


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
