import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

const Score = ({ completedTasks, userId }) => {
  const [scoreCount, setScoreCount] = useState(0);

  return (
    <View>
      <Text>Your Current score is: {completedTasks.length * 4}</Text>
      <br></br>
    </View>
  );
};

export default Score;
