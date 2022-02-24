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
  const [toggleEdit, setToggleEdit] = useState(false);

  const db = getDatabase();

  const profileRef = ref(db, "profiles/" + props.userId);

  const onSubmit = () => {
    set(profileRef, {
      firstName: firstName,
      lastName: lastName,
    });
    setFirstName("");
    setLastName("");
    setToggleEdit(!toggleEdit);
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
      } else {
        console.log("value is empty");
        setFirstName("");
        setLastName("");
      }
    });
  }, [toggleEdit]);

  console.log(toggleEdit);
  return (
    <View style={styles.container}>
      {toggleEdit ? (
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            //  secureTextEntry
            // (text) => setTask(text)
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
      ) : (
        <View>
          <Text>
            Hello {firstName} {lastName}!
          </Text>
          <TouchableOpacity onPress={() => setToggleEdit(!toggleEdit)}>
            <Text style={styles.editBtnText}>Edit Name</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Profile;
