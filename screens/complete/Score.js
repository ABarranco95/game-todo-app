import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import {
  getDatabase,
  onValue,
  set,
  ref,
  get,
  update,
  remove,
} from "firebase/database";
// import styles from "../login/styles";
import { BackgroundImage } from "react-native-elements/dist/config";

import styles from "./styles";

const Score = ({ userId }) => {
  const [scoreCount, setScoreCount] = useState(0);
  const [highscore, setHighscore] = useState(null);

  const db = getDatabase();
  const scoreRef = ref(db, "score/" + userId);
  const highscoreRef = ref(db, "highscore/" + userId);

  useEffect(() => {
    return onValue(scoreRef, (snapshot) => {
      console.log("my score --> ", snapshot.val().score);
      setScoreCount(snapshot.val().score);
      if (highscore !== null && snapshot.val().score > highscore) {
        console.log("reset highscore ");
        set(highscoreRef, {
          highscore: snapshot.val().score,
        });
      }
    });
  }, []);

  useEffect(() => {
    return onValue(highscoreRef, (snapshot) => {
      console.log("my high score --> ", snapshot.val().highscore);
      setHighscore(snapshot.val().highscore);
    });
  }, []);

  useEffect(() => {
    return onValue(highscoreRef, (snapshot) => {
      if (snapshot.val() === null) {
        set(highscoreRef, {
          highscore: scoreCount,
        });
      } else {
        const highestScore = snapshot.val().highscore;

        get(scoreRef).then((snapshot) => {
          const currentScore = snapshot.val().score;

          if (currentScore > highestScore) {
            set(highscoreRef, {
              highscore: currentScore,
            });
          }
        });
      }
    });
  }, []);


  return (
    <View style={styles.scoreContainer}>
        <BackgroundImage
        style={styles.imgGraphic}
        source={
          require('../../assets/MyScoreGraphic.png')
        }
      ></BackgroundImage>
      

      <View style={styles.sideBySide}>
        <View style={styles.pointContainer}>
      <Text style={styles.total}>Total Points: </Text>   
      <Text style={styles.highest}>Highest Score: </Text>  
      <Text style={styles.highPoint}>{highscore}</Text>
      <Text style={styles.Highestpoints}>points</Text>
      </View>
      
      </View>
     <Text style={styles.scorePoints}>{scoreCount}</Text> 
           <Text style={styles.points}>points</Text>
           
      

      
    </View>
  );
};

export default Score;