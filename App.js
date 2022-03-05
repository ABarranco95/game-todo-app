import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/login/Login";
import Profile from "./screens/profile/Profile";
import Todo from "./screens/todo/Todo";
import Home from "./screens/home/Home";
import Complete from "./screens/complete/Complete";
import StartPage from "./screens/startedpage/StartPage";
import LandingPage from "./screens/landing/LandingPage";

import Score from "./screens/complete/Score";

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
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="landingPage"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <LandingPage {...props} userAuth={userAuth} userId={userId} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Login {...props} userAuth={userAuth} userId={userId} />}
        </Stack.Screen>

        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Home {...props} userAuth={userAuth} userId={userId} />}
        </Stack.Screen>
        <Stack.Screen
          name="Complete"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <Complete {...props} userAuth={userAuth} userId={userId} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Profile"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <Profile {...props} userAuth={userAuth} userId={userId} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Todo"
          options={{
            headerShown: false,
          }}
        >
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
        {/* <Stack.Screen name="Score" options={{ headerTitle: "Todo List" }}>
          {(props) => (
Score            <Todo
             Score.props}
              userAuth={userAuth}
              userId={userId}
              allTasks={allTasks}
              setAllTasks={setAllTasks}
            />
          )}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default App;
