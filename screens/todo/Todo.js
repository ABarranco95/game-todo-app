import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, TextInput, Modal, Alert, FlatList } from 'react-native';
import styles from "./styles"


const Todo = (props) => {
    const [task, setTask] = useState("");

    const [showModal, setShowModal] = useState(false)

    
    console.log(setTask)
    const addTask = () => {
        props.setAllTasks([...props.allTasks, task])
        setShowModal(!showModal)
        console.log(props.allTasks)
        
    }

    // useEffect(() => {
    //     if (props.userId !== "") {

    //     }
    // },[])


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
        </View>
            
            
            </Modal>
            <TouchableOpacity onPress={() => setShowModal(true)}>
                <Text>Show Modal</Text>
            </TouchableOpacity> 

            {/* {task.map((item, index)=>{
                <Text> {item} </Text>
            })} */}

            {/* <FlatList
          data={task}
          renderItem={({ item, index }) => (
            
                 <Text> {item} </Text>
            
            
          )}
        /> */}
            
        </View>
    )
}

export default Todo;

