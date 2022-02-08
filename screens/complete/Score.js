import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import {
  getDatabase,
  onValue,
  set,
  ref,
  update,
  remove,
} from "firebase/database";

const Score = ({ userId }) => {
  const [scoreCount, setScoreCount] = useState(0);

  const db = getDatabase();
  const scoreRef = ref(db, "score/" + userId);

  useEffect(() => {
    onValue(scoreRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const returnedItems = snapshot.val();
        let result = Object.keys(returnedItems).map(
          (key) => returnedItems[key]
        );

        let runningCount = 0;
        result.map((item) => {
          if (item.score !== 0) {
            runningCount += item.score;
          }
        });
        setScoreCount(runningCount);
        // completedTasks(completedToDos);
      } else {
        setScoreCount(0);
      }
    });
  }, []);

  return (
    <View>
      <Text>{scoreCount}</Text>
    </View>
  );
};

export default Score;
