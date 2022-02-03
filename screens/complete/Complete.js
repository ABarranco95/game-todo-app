import { View, Text } from 'react-native';
import React,{useState} from 'react';
import {
  getDatabase,
  onValue,
  set,
  ref,
  push,
  child,
  update,
} from "firebase/database";

const   Complete = (props) => {
  const [completeTask, setCompleteTask] = useState("");
  const [totalPoints, setTotalPoints] = useState("");
  const [pointGiven, setPointGiven] = useState(false);

  const db = getDatabase();
  const postRef = ref(db, "posts/" + props.userId);

  // const addToPostRef = push(postRef);
  const taskComplete = (id) => {
    const completeTaskRef = ref(db, "toDoList/" + userId + "/" + id);
    update(completeTaskRef, {
      complete: true,
      pointGiven: true,
    });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        

        
      </KeyboardAvoidingView>

      <View style={{ width: 350, height: 450 }}>
        <FlatList
          data={props.allTasks}
          renderItem={({ item }) => (
            <Score item={item} db={db} userId={props.userId} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

}
export default Complete;
