import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { getDatabase, onValue, set, ref } from "firebase/database";
import styles from "./styles"

const Home = (props) => {

    const db = getDatabase();
    const profileRef = ref(db, "profiles/" + props.userId);
    
    const signOut = ()  => {
        props.userAuth.signOut()
        
    }

    useEffect(() => {
       if (props.userId === "")
       props.navigation.navigate("Login")
    }, [props.userId])
    
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile") }>
            <Text style={styles.btnStyle}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => props.navigation.navigate("Todo") }>
            <Text style={styles.btnStyle} >Add Todos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile") }>
            <Text style={styles.btnStyle}>View Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Profile") }>
            <Text style={styles.btnStyle}>Completed Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={signOut}>
            <Text style={styles.btnStyle}>Sign Out</Text>
        </TouchableOpacity>
        </View>
        
        
        
    )
}

export default Home;

