import { View, Text } from 'react-native';
import React from 'react';

const Score = ({item, db,userId}) => {
  const completeTask = (id) => {
    const completeTaskRef = ref(db, "toDoList/" + userId + "/" + id);
    update(completeTaskRef, {
      complete: true,
      pointGiven: true,
    });
  return (
    <View>
      <Text>score page</Text>
    </View>
  );
};

export default Score;
