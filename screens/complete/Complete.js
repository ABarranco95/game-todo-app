import {
  View,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";

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

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
      <View style={styles.taskContainer}>
        <FontAwesome5
          name="dot-circle"
          size={24}
          color="green"
          style={styles.dotCircle}
        />
        <View style={styles.itemPostContainer}>
          <Text style={styles.taskPost}>{item.post}</Text>
        </View>

        {/* <Pressable onPress={() => handleReverse(item.id)}>
          <Text>Undo Complete</Text>
        </Pressable> */}
        <TouchableOpacity onPress={() => handleIncomplete(item.postId)}>
          <MaterialIcons name="remove-done" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BackgroundImage
        style={styles.scoreBgI}
        source={require("../../assets/scoreClickedBG.png")}
      ></BackgroundImage>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Score db={db} userId={props.userId} completedTasks={completedTasks} />
      <FlatList
        data={completedTasks}
        renderItem={({ item, index }) => (
          <CompletedTask
            item={item}
            db={db}
            userId={props.userId}
            key={index}
          />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Complete;
