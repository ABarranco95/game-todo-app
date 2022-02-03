import { View, Text } from 'react-native';
import React,{useState} from 'react';
import { getDatabase, ref, onValue, set } from "firebase/database";

const Complete = (props) => {
  const [check, setCheck]=useState('')
  const db = getDatabase();
  return (
    <View>
     
      <Text>This is complete page</Text>
    </View>
  );
};

export default Complete;
