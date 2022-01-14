import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  FlatList,
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
import TaskItem from "./TaskItem";

const Todo = (props) => {
  const [task, setTask] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [notRegisteredMessage, setNotRegisteredMessage] = useState(false);

  const db = getDatabase();

  const postRef = ref(db, "posts/" + props.userId);
  const addToPostRef = push(postRef);


  const addTask = () => {
    if (task !== "") {
      set(addToPostRef, {
        postId: addToPostRef.key,
        post: task,
      });
      setShowModal(!showModal);
    } else {
      setNotRegisteredMessage(true);
    }
    setTask("");
  };

  const cancelPost = () => {
    setShowModal(!showModal);
  };



  useEffect(() => {
    onValue(postRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const data = snapshot.val();
        let result = Object.keys(data).map((key) => {
          return { ...data[key] };
        });
        console.log(result);
        props.setAllTasks(result);
      } else {
        props.setAllTasks([]);
      }
    });
  }, []);



  return (
    <View style={styles.container}>
      <Modal
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
      </Modal>

      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text>Show Modal</Text>
      </TouchableOpacity>

      <View style={{ width: 500, height: 500 }}>
        <FlatList
       
          data={props.allTasks}
          renderItem={({ item }) => <TaskItem item={item} db={db} userId={props.userId} />}
        />
      </View>
    </View>
  );
};

export default Todo;