import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, TextInput, Modal, Alert, FlatList } from 'react-native';
import styles from "./styles"
import { getDatabase, onValue, set, ref, push } from "firebase/database";


const Todo = (props) => {
    const [task, setTask] = useState("");
    const [showModal, setShowModal] = useState(false)

    const db = getDatabase();
    const postRef = ref(db, "posts")
    const addToPostRef = push(postRef)

    const [notRegisteredMessage, setNotRegisteredMessage] = useState(false);

    const cancelPost = () => {
        setShowModal(!showModal)
    }


    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      
    
    const renderItem = ({item , idx}) => (
        <Item key={idx} title={item.post}/>
    )

    const addTask = () => {
        if(task !== "") {
            set(addToPostRef, {
                postId: props.userId, 
                post : task
            });
            setShowModal(!showModal)
        } else { 
            setNotRegisteredMessage(true);
        
        }
        setTask("");
       
    }

    useEffect(()=>{
        onValue(postRef, (snapshot)=>{
            const returnPostArray = []
            const returnItems = snapshot.val()
            for(let item in returnItems){
                returnPostArray.push(returnItems[item])
            }
            props.setAllTasks(returnPostArray)
        })
    }, [])


    console.log(props.allTasks)

    return (
        <View style={styles.container}>
            <Modal 
            animationType='slide'
            transparent={true}
            visible={showModal}
            onRequestClose={() => {Alert.alert("Modal has been closed")
            setShowModal(!showModal)}}
            >

        <View style={styles.modalShow}>
            <TextInput
            placeholder='Enter your todos'
            value={task}
            onChangeText={setTask}
            /> 
            <TouchableOpacity 
            onPress={() => addTask()}
            
            >
                <Text>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelPost}>
            <Text>Cancel</Text>
            </TouchableOpacity>
        </View>
        {notRegisteredMessage ? (
        <View>
          <Text style={{ color: "red" }}>Please add your todo.</Text>
        </View>
      ) : null}
            
            </Modal>
            
            <TouchableOpacity onPress={() => setShowModal(true)}>
                <Text>Show Modal</Text>
            </TouchableOpacity> 
            
            <FlatList 
            data={props.allTasks}
            renderItem={renderItem}
            keyExtractor={item=>item.key}
                
            
            />

        {/* {props.alltasks.map((item, index) =>
        <Text>{item}</Text>
        )} */}
            
        </View>
    )
}

export default Todo;

