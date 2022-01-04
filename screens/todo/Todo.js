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

const Todo = (props) => {
  const [task, setTask] = useState("");
  const [showModal, setShowModal] = useState(false);

  const db = getDatabase();
  const postRef = ref(db, "posts/" + props.userId);

  const addToPostRef = push(postRef);

  const [notRegisteredMessage, setNotRegisteredMessage] = useState(false);

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

  const Item = ({ item }) => {
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
        {toggleEdit ? (
          <TextInput value={changeTask} onChangeText={setChangeTask} />
        ) : (
          <Text>{item.post}</Text>
        )}
        <TouchableOpacity onPress={() => handleEdit(item.post, item.postId)}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    onValue(postRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const returnedItems = snapshot.val();
        console.log("before result =>", returnedItems);
        let result = Object.keys(returnedItems).map((key) => returnedItems[key]);
        console.log("after result => ", result);
        props.setAllTasks(result);
      } else {
        props.setAllTasks([]);
      }
    });
  }, []);

  console.log("result of finished array =>", props.allTasks);

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
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    </View>
  );
};

export default Todo;