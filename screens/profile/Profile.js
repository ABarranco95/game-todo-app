import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
import styles from "./styles";

const Profile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const db = getDatabase();
  const profileRef = ref(db, "profiles/" + props.userId);

  useEffect(() => {
     return onValue()
  }, []);
  return (
    <View style={styles.container}>
      <Text>Hello from profile</Text>
    </View>
  );
};

export default Profile;
