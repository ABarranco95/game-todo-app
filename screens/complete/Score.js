import { View, Text } from "react-native";
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

const Score = (props) => {
  const [scoreCount, setScoreCount] = useState(0);
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
          let count = 0;
          for (let i = 0; i <= completedToDos.length; i++) {
            completedToDos[i] = count++;
          }
          setScoreCount(count);
        });
        setCompletedTasks(completedToDos);
s
        // completedTasks(completedToDos);
      } else {
        setCompletedTasks([]);
      }
    });
  }, []);
  console.log(scoreCount);

  return (
    <View>
      <Text>score page</Text>
    </View>
  );
};

export default Score;
