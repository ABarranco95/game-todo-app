import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import { getDatabase, onValue, set, ref } from "firebase/database";
// import DatePicker from "react-datepicker";
  // import "react-datepicker/dist/react-datepicker.css";

import styles from "./styles";
import { BackgroundImage } from "react-native-elements/dist/config";


const Home = (props) => {
  const [date, setDate] = useState(new Date());
 
  const db = getDatabase();
  const profileRef = ref(db, "profiles/" + props.userId);

  const signOut = () => {
    props.userAuth.signOut();
  };

  useEffect(() => {
    if (props.userId === "") props.navigation.navigate("Login");
  }, [props.userId]);

  return (
    
    <View style={styles.container}>
       
      {/* <Image styles={ {width: 250,
    height: 200,}} source={require('../../assets/bgdImg.png')} /> */}
    <BackgroundImage 
        style={{width:500, height:500, }}
        source={
          require( '../../assets/bgdImg.png')
        }
      ></BackgroundImage>
       <View style={{marginTop:-350, marginBottom:170, zIndex:100}}>
      {/* <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        style={{width:200, zIndex:100, marginBottom:-50, position:'relative'}}
      /> */}
      </View> 
      <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
        <Text style={styles.btnStyle}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Todo")}>
        <Text style={styles.btnStyle}>Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Complete")}>
        <Text style={styles.btnStyle}>Completed Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={signOut}>
        <Text style={styles.btnStyle}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
