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
  update,
  remove,
} from "firebase/database";
import { CheckBox, Icon } from "react-native-elements";

const Task = ({ item, db, userId }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [changeTodo, setChangeTodo] = useState("");
  const [check, setCheck] = useState(false);

  // const completeTask = (index) => {
  //   let itemsCopy = [...taskItems];
  //   itemsCopy.splice(index, 1);
  //   setTaskItems(itemsCopy);
  // };

  // const updateDone = (check, id) => {
  //   console.log("check is " + check);
  //   if (check) {
  //     updateCheck(check, id);
  //   }
  // };

  const updateCheck = (id) => {
    console.log("updateCheck function hit");
    const updateTaskRef = ref(db, "posts/" + userId + "/" + id);

    update(updateTaskRef, {
      completed: true,
    });
  };

  const handleEdit = (task, id) => {
    console.log("handle edit triggered");
    if (toggleEdit) {
      if (changeTodo !== "") {
        updateData(changeTodo, id);
        setToggleEdit(!toggleEdit);
        console.log("updateDate hit");
      }
    } else {
      setChangeTodo(task);
      setToggleEdit(!toggleEdit);
    }
  };

  const updateData = (changeTodo, postId) => {
    console.log("updateData function hit");
    const updateTaskRef = ref(db, "posts/" + userId + "/" + postId);

    update(updateTaskRef, {
      post: changeTodo,
    });
  };

  const handleDelete = (task, id) => {
    console.log("Deleting task id -->" + id + "/" + task);
    const updateTaskRef = ref(db, "posts/" + userId + "/" + id);
    remove(updateTaskRef);
  };

  

  return (
    <View>
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
