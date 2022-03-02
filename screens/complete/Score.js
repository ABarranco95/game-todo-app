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
// import styles from "../login/styles";
import styles from "./styles";

import { BackgroundImage } from "react-native-elements/dist/config";

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
    <View style={styles.scoreContainer}>
      <View style={styles.pointContainer}>
      <Text style={styles.total}>Total Points: </Text>
      </View>

      <View style={styles.sideBySide}>
      <Text style={styles.scorePoints}>{scoreCount}</Text> 
           <Text style={styles.points}>points</Text>
      </View>
    </View>
  );
};

export default Score;