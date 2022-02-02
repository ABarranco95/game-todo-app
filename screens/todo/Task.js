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

const Task = ({ item, db, userId }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [changeTodo, setChangeTodo] = useState("");
  const [check, setCheck] = useState(false);

  // const handleEdit = (task, postId) => {
  //   if (toggleEdit) {
  //     if (changeTask !== "") {
  //       updateTaskRef(changeTask, postId);
  //       setToggleEdit(!toggleEdit);
  //     } else {
  //       setChangeTask(task);
  //       setToggleEdit(!toggleEdit);
  //     }
  //   }
  //   console.log("handle edit triggered");
  // };

  // const completeTask = (index) => {
  //   let itemsCopy = [...taskItems];
  //   itemsCopy.splice(index, 1);
  //   setTaskItems(itemsCopy);
  // };
  // const updateData = (task, check, postId) => {
  //   const updateTaskRef = ref(db, "posts/" + props.userId + "/" + postId);

  //   update(updateTaskRef, {
  //     post: task,
  //     completed: check,
  //   });
  //   props.navigation.navigate("Home");
  // };
  const handleEdit = (task, id) => {
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

  const updateData = () => {
    const updateTaskRef = ref(db, "posts/" + userId + "/" + postId);

    update(updateTaskRef, {
      post: changeTodo,
    });
  };
  console.log(toggleEdit);

  useEffect(() => {
    console.log(toggleEdit);
  }, []);

  return (
    <View>
      {toggleEdit ? (
        <TextInput value={changeTodo} onChangeText={setChangeTodo}></TextInput>
      ) : (
        <Pressable onPress={() => handleEdit(item.post, item.postId)}>
          <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.square}></View>
              <Text style={styles.itemText}>{item.post}</Text>
            </View>

            <CheckBox center checked={check} onPress={() => setCheck(!check)} />
          </SafeAreaView>
        </Pressable>
      )}
    </View>
  );
};

export default Task;
