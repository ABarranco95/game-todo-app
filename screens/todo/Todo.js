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
  remove,
} from "firebase/database";
import { CheckBox, Icon } from "react-native-elements";

import Task from "./Task";

const Todo = (props) => {
  const [task, setTask] = useState("");
  const [check, setCheck] = useState(false);

  const db = getDatabase();
  const postRef = ref(db, "posts/" + props.userId);
  const scoreRef = ref(db, "score/" + props.userId);

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
    return onValue(postRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const returnedItems = snapshot.val();
        let result = Object.keys(returnedItems).map(
          (key) => returnedItems[key]
        );

        let incompletedToDos = [];
        result.map((item) => {
          if (!item.completed) {
            incompletedToDos.push(item);
          }
        });
        props.setAllTasks(incompletedToDos);
      } else {
        props.setAllTasks([]);
      }
    });
  }, []);

  useEffect(() => {
    return onValue(scoreRef, (snapshot) => {
      console.log("this is a thing ==>", snapshot.val());
      if (snapshot.val() === null) {
        set(scoreRef, {
          score: 0,
        });
      } else {
        console.log(snapshot.val());
      }
    });
  }, []);

  console.log(props.allTasks);

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      addTask();
    }
  };

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
          onKeyPress={handleKeypress}
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
          renderItem={({ item, key }) => (
            <Task item={item} db={db} userId={props.userId} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Todo;
