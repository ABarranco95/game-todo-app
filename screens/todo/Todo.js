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

  // const handleCompleteTask = () => {
  //   update(updateTaskRef)
  // }

  const Task = ({ item }) => {
    const [toggleEdit, setToggleEdit] = useState(false);
    const [changeTask, setChangeTask] = useState("");
    const [check, setCheck] = useState(false);

    const handleEdit = (task, check) => {};

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

    return (
      <SafeAreaView style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{item.post}</Text>
        </View>
        <TouchableOpacity onPress={() => handleEdit()}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <CheckBox center checked={check} onPress={() => setCheck(!check)} />
      </SafeAreaView>
    );
  };

  useEffect(() => {
    onValue(postRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const returnedItems = snapshot.val();
        console.log("before result =>", returnedItems);
        let result = Object.keys(returnedItems).map(
          (key) => returnedItems[key]
        );
        console.log("after result => ", result);
        props.setAllTasks(result);
      } else {
        props.setAllTasks([]);
      }
    });
  }, []);

  console.log("result of finished array =>", props.allTasks);

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
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed");
          setShowModal(!showModal);
        }}
      >
        <View style={styles.modalShow}>
          <TextInput
            placeholder="Enter your todos"
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity onPress={addTask}>
            <Text>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={cancelPost}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
        {notRegisteredMessage ? (
          <View>
            <Text style={{ color: "red" }}>Please add your todo.</Text>
          </View>
        ) : null}
      </Modal> */}

      {/* <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text>Show Modal</Text>
      </TouchableOpacity> */}

      <View style={{ width: 350, height: 600 }}>
        <FlatList
          data={props.allTasks}
          renderItem={({ item }) => <Task item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Todo;
