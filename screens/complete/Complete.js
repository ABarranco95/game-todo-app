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
  const scoreRef = ref(db, "score/" + props.userId);

  useEffect(() => {
    return onValue(postRef, (snapshot) => {
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
    const [score, setScore] = useState();

    const scoreRef = ref(db, "score/" + userId);

    const handleIncomplete = (id) => {
      const updateTaskRef = ref(db, "posts/" + userId + "/" + id);

      update(updateTaskRef, {
        completed: false,
      });

      update(scoreRef, {
        score: score - 5,
      });
    };

    useEffect(() => {
      return onValue(scoreRef, (snapshot) => {
        setScore(snapshot.val().score);
      });
    }, []);

    return (
      <View>
      
        <Text>{item.post}</Text>
        {/* <Pressable onPress={() => handleReverse(item.id)}>
          <Text>Undo Complete</Text>
        </Pressable> */}
        <Pressable onPress={() => handleIncomplete(item.postId)}>
          <Text>Mark as incomplete</Text>
        </Pressable>
      
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
