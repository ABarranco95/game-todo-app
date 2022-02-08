import { View, Text, FlatList, Pressable, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
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
// import CompletedTask from "./CompletedTask";
import styles from "./styles";
import Score from "./Score";

const Complete = (props) => {
  const [check, setCheck] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const db = getDatabase();
  const postRef = ref(db, "posts/" + props.userId);

  useEffect(() => {
    onValue(postRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const returnedItems = snapshot.val();
        let result = Object.keys(returnedItems).map(
          (key) => returnedItems[key]
        );

        let completedToDos = [];

        result.map((item) => {
          if (item.completed) {
            completedToDos.push(item);
          }
        });
        setCompletedTasks(completedToDos);
        // completedTasks(completedToDos);
      } else {
        setCompletedTasks([]);
      }
    });
  }, []);

  const CompletedTask = ({ item, db, userId }) => {
    const [changeTodo, setChangeTodo] = useState("");
    const [check, setCheck] = useState(false);
    const [reverseTask, setReverseTask] = useState(false);

    // const handleReverse = (taskId) => {
    //   const updateTaskRef = ref(db, "posts/" + userId + "/" + id);
    //   // const scoreRef = ref(db, "score/" + userId + "/" + id);
    //   console.log("handle edit triggered");
    //   if (reverseTask) {
    //     console.log("Changing to false");
    //     update(updateTaskRef, {
    //       completed: false,
    //     });
    //     // update(scoreRef, {
    //     //   score: 0,
    //     // });
    //   }
    //   // else {
    //   //   setChangeTodo(task);
    //   //   setToggleEdit(!toggleEdit);
    //   // }
    // };

    const handleDelete = (task, id) => {
      console.log("Deleting task id -->" + id + " & task -->" + task);
      const updateTaskRef = ref(db, "posts/" + userId + "/" + id);
      const scoreRef = ref(db, "score/" + userId + "/" + id);
      remove(updateTaskRef);
      remove(scoreRef);
    };

    return (
      <View>
        <br />
        <Text>{item.post}</Text>
        {/* <Pressable onPress={() => handleReverse(item.id)}>
          <Text>Undo Complete</Text>
        </Pressable> */}
        <Pressable onPress={() => handleDelete(item.post, item.postId)}>
          <Text>Delete</Text>
        </Pressable>
        <br />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Score db={db} userId={props.userId} completedTasks={completedTasks} />
      <FlatList
        data={completedTasks}
        renderItem={({ item }) => (
          <CompletedTask item={item} db={db} userId={props.userId} />
        )}
      />
    </View>
  );
};

export default Complete;
