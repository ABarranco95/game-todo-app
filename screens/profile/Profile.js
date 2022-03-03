
import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text,TextInput, Pressable, View,  } from "react-native";
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
import { Ionicons } from '@expo/vector-icons'; 
import { BackgroundImage } from "react-native-elements/dist/config";
import styles from "./styles";







const Profile = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  const db = getDatabase();
    console.log(props.userId);
  
    const profileRef = ref(db, "profiles/" + props.userId);

    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    const onSubmit = () => {
      set(profileRef, {
        firstName: firstName,
        lastName: lastName,
      }).catch((err) => console.log(err));
      setFirstName("");
      setLastName("");
      setModalVisible(!modalVisible)
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
            }
          });
        }, [firstName]);
  return (
    <View style={styles.centeredView}>
      <BackgroundImage style={styles.imgBgd} source={require("../../assets/pro.png")} >
      <Text style={styles.date}>{date}</Text>
       <Text style={styles.nameTitle}>
       Hello {firstName} {lastName}!{" "}
    </Text>
    
      <Modal
      style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>What should I call you? </Text>

            <TextInput
        style={styles.textInput}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onSubmit}
            >
              <Text style={styles.textStyle}>submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Welcome</Text>
      </Pressable>

      <Pressable
        style={[styles.button2, styles.buttonOpen2]}
        onPress={() => props.navigation.goBack("Home")}
      >
        <Ionicons name="arrow-back-circle-sharp" size={44} color="black" />
      </Pressable>
      </BackgroundImage>
    </View>
  );
};
export default Profile;
