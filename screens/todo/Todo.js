import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Pressable,
} from "react-native";
import styles from "./styles";
import {
  getDatabase,
  onValue,
  set,
  ref,
  push,
  child,
  update,
} from "firebase/database";
import { CheckBox, Icon } from "react-native-elements";

import Task from "./Task";

const Todo = (props) => {
 
  const [task, setTask] = useState("");
  const [check, setCheck] = useState(false);
 

  const db = getDatabase();
  const postRef = ref(db, "posts/" + props.userId);

  const addToPostRef = push(postRef);

  const [notRegisteredMessage, setNotRegisteredMessage] = useState(false);

  const addTask = () => {
    if (task !== "") {
      set(addToPostRef, {
        postId: addToPostRef.key,
        post: task,
        completed: check,
      });
    } else {
      setNotRegisteredMessage(true);
    }
    setTask("");
  };

  useEffect(() => {
    onValue(postRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const returnedItems = snapshot.val();
        let result = Object.keys(returnedItems).map(
          (key) => returnedItems[key]
        );
        props.setAllTasks(result);
      } else {
        props.setAllTasks([]);
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={{ width: 350, height: 450 }}>
        <FlatList
          data={props.allTasks}
          renderItem={({ item }) => (
            <Task item={item} db={db} userId={props.userId} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Todo;
