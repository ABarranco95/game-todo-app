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
    return onValue(scoreRef, (snapshot) => {
      setScoreCount(snapshot.val().score);
    });
  }, []);

  return (
    <View>
      <Text>{scoreCount}</Text>
    </View>
  );
};

export default Score;
