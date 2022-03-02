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
  get,
  ref,
  update,
  remove,
} from "firebase/database";
import { CheckBox, Icon } from "react-native-elements";

const Task = ({ item, db, userId }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [changeTodo, setChangeTodo] = useState("");
  const [check, setCheck] = useState(false);
  const [score, setScore] = useState(0);

  const updateCheck = (id) => {
    const updateTaskRef = ref(db, "posts/" + userId + "/" + id);
    const scoreRef = ref(db, "score/" + userId);

    update(updateTaskRef, {
      completed: true,
    });

    update(scoreRef, {
      score: score + 5,
    });
  };

  const handleEdit = (task, id) => {
    console.log("handle edit triggered to true");
    if (toggleEdit) {
      if (changeTodo !== "") {
        updateData(changeTodo, id);
        setToggleEdit(!toggleEdit);
      }
    } else {
      setChangeTodo(task);
      setToggleEdit(!toggleEdit);
    }
  };

  const updateData = (changeTodo, id) => {
    const updateTaskRef = ref(db, "posts/" + userId + "/" + id);

    update(updateTaskRef, {
      post: changeTodo,
    });
  };

  const handleDelete = (task, id) => {
    const updateTaskRef = ref(db, "posts/" + userId + "/" + id);
    remove(updateTaskRef);
  };

  useEffect(() => {
    const scoreRef = ref(db, "score/" + userId);
    return onValue(scoreRef, (snapshot) => {
      setScore(snapshot.val().score);
    });
  }, []);

  return (
    <View style={styles.taskContainer}>
      {toggleEdit ? (
        <TextInput
          style={styles.item}
          value={changeTodo}
          onChangeText={setChangeTodo}
          onBlur={() => handleEdit(item.post, item.postId)}
        ></TextInput>
      ) : (
        <Pressable onPress={() => handleEdit(item.post, item.postId)}>
          <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.square}></View>
              
    <Text style={styles.itemText}>{item.post}</Text>
              
          
            </View>

            <CheckBox
              center
              checked={check}
              onPress={() => updateCheck(item.postId)}
            />
            <TouchableOpacity
              onPress={() => handleDelete(item.post, item.postId)}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Pressable>
      )}
    </View>
  );
};

export default Task;
