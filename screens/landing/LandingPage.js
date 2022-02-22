import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "./styles";
// import { LinearGradient } from "expo-linear-gradient";
import Login from "../login/Login";

const LandingPage = (props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <Image source={require("./sky.png")} style={styles.container} />
      <Image source={require("./sun.png")} style={styles.sun} />
      <Image source={require("./left-hill.png")} style={styles.leftHill} />
      <Image source={require("./right-hill.png")} style={styles.rightHill} />
      <Image source={require("./rock-and-flag.png")} style={styles.rockFlag} />
      <View>
        <Text style={styles.welcome}>You Can Do It</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.btnText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
      {/* <Animated.Image
        style={{
          position: "absolute",
          width: 464.5,
          height: 1014.5,
          left: -36.5,
          top: 897.5,
          transform: [{ translateY: translation }],
        }}
        source={require("./scrolling-rock.png")}
      /> */}
    </SafeAreaView>
  );
};

export default LandingPage;
