import React, { useState, useEffect } from 'react'
import { Text, View, Alert, TextInput, TouchableOpacity,} from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import styles from "./styles"



const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const register = () => {
        createUserWithEmailAndPassword(props.userAuth, email, password)
    };  

    const login = () => {
        signInWithEmailAndPassword(props.userAuth, email, password)
    }

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
            <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            
            />

            
            <TextInput 
             placeholder='password'
             value={password}
             onChangeText={setPassword}
            //  secureTextEntry
            
            
            />
            <TouchableOpacity onPress={login}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={register}>
                <Text>register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;


