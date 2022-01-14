import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity } from "react-native";
import { ref, update, remove, onValue, set } from "firebase/database";
import styles from "./styles";
import { FlatList } from "react-native-web";

const TaskItem = ({ item }) => {
    const [toggleEdit, setToggleEdit] = useState(false);
    const [changeTask, setChangeTask] = useState("");

    const handleEdit = (task, id) => {
      if (toggleEdit) {
        if (changeTask !== "") {
          updateData(changeTask, id);
          setToggleEdit(!toggleEdit);
        }
      } else {
        setChangeTask(task);
        setToggleEdit(!toggleEdit);
      }
    };

    const updateData = (task, id) => {
      const updateTaskRef = ref(db, "posts/" + props.userId + "/" + id);

      update(updateTaskRef, {
        post: task,
      });
    };


  

    return (
      <View style={styles.postContainer}>
        <Text>{item.post}</Text>
        <Text>Edit</Text>
        <Text>Update</Text>
      </View>
    );
  };

  export default TaskItem;