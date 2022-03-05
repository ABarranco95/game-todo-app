import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { getDatabase, onValue, set, ref } from "firebase/database";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

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
      <Image
        style={styles.homeImg}
        source={require("../../assets/home-screen.png")}
      />
      <Text style={styles.month}>February</Text>
      <Image
        style={styles.monthArrow}
        source={require("../../assets/month-arrow.png")}
      />
      <TouchableOpacity
        style={styles.userIcon}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <FontAwesome5 name="user-circle" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut} style={styles.signOutButton}>
        <AntDesign
          name="logout"
          size={30}
          color="black"
        />
      </TouchableOpacity>
      <Image style={styles.dates} source={require("../../assets/dates.png")} />

      <Image
        style={styles.todosButton}
        source={require("../../assets/my-todos.png")}
      />
      <TouchableOpacity
        style={styles.viewTasksButton}
        onPress={() => props.navigation.navigate("Todo")}
      >
        <Text style={styles.viewTasksText}>View Tasks</Text>
      </TouchableOpacity>
      <Text style={styles.todosTitle}>My ToDo's</Text>

      <TouchableOpacity
        style={styles.finishBtn}
        onPress={() => props.navigation.navigate("Todo")}
      >
        <Text style={styles.finishText}>Finish Task</Text>
      </TouchableOpacity>
      <Image
        style={styles.todosFlag}
        source={require("../../assets/todos-flag.png")}
      />
      <TouchableOpacity
        style={styles.notesBtn}
        onPress={() => props.navigation.navigate("Complete")}
      >
        <Text style={styles.notesText}>Completed</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
        <Text style={styles.btnStyle}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Complete")}>
        <Text style={styles.btnStyle}>Completed Todos</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Home;
