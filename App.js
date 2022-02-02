import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/login/Login";
import Profile from "./screens/profile/Profile";
import Todo from "./screens/todo/Todo";
import Home from "./screens/home/Home";

import "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

function App() {
  const [userId, setUserId] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const userAuth = getAuth();

  useEffect(() => {
    onAuthStateChanged(userAuth, (user) => {
      if (user !== null) {
        setUserId(user.uid);
      } else {
        setUserId("");
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login">
          {(props) => <Login {...props} userAuth={userAuth} userId={userId} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} userAuth={userAuth} userId={userId} />}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => (
            <Profile {...props} userAuth={userAuth} userId={userId} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Todo">
          {(props) => (
            <Todo
              {...props}
              userAuth={userAuth}
              userId={userId}
              allTasks={allTasks}
              setAllTasks={setAllTasks}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
