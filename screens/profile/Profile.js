import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
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
import { TouchableOpacity } from "react-native-web";

const Profile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const db = getDatabase();
  console.log(props.userId);

  const profileRef = ref(db, "profiles/" + props.userId);

  const onSubmit = () => {
    set(profileRef, {
      firstName: firstName,
      lastName: lastName,
    }).catch((err) => console.log(err));
    setFirstName("");
    setLastName("");
  };

  useEffect(() => {
    const profileRef = ref(db, "profiles/" + props.userId);
    return onValue(profileRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const returnedItems = snapshot.val();
        let result = Object.keys(returnedItems).map(
          (key) => returnedItems[key]
        );
        console.log(returnedItems.firstName);

        setFirstName(returnedItems.firstName);
        setLastName(returnedItems.lastName);

        // let name = [];

        // result.map((item) => {
        //   name.push(item);
        // });
        // console.log(name[firstName]);
        // props.setAllTasks(incompletedToDos);
      } else {
        // props.setAllTasks([]);
        console.log("value is empty");
      }
    });
  }, [firstName]);

  return (
    <View style={styles.container}>
      <Text>
        Hello {firstName} {lastName}!{" "}
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        //  secureTextEntry
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        //  secureTextEntry
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
