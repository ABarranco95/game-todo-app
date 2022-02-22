import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import React from "react";
import styles from "./styles";
import { BackgroundImage } from "react-native-elements/dist/config";

const StartPage = (props) => {
  return (
    <View style={styles.container}>
      <BackgroundImage
        style={styles.container}
        source={require("../../assets/bgdimg2.png")}
      ></BackgroundImage>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={styles.btnText}>Let's get started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartPage;
