// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   Modal,
//   Alert,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   Pressable,
// } from "react-native";

// import {
//   getDatabase,
//   onValue,
//   set,
//   ref,
//   update,
//   remove,
// } from "firebase/database";
// import { CheckBox, Icon } from "react-native-elements";

// const CompletedTask = ({ item, db, userId }) => {
//   const [toggleEdit, setToggleEdit] = useState(false);
//   const [changeTodo, setChangeTodo] = useState("");
//   const [check, setCheck] = useState(false);

//   const updateCheck = (id) => {
//     console.log("updateCheck function hit");
//     const updateTaskRef = ref(db, "posts/" + userId + "/" + id);

//     update(updateTaskRef, {
//       completed: true,
//     });
//   };

//   console.log(item);

//   return (
//     // <View style={styles.container}>
//     //   <SafeAreaView style={styles.item}>
//     //     <View style={styles.itemLeft}>
//     //       <View style={styles.square}></View>
//     //       <Text style={styles.itemText}>{item.post}</Text>
//     //     </View>

//     //     <CheckBox
//     //       center
//     //       checked={check}
//     //       onPress={() => updateCheck(item.postId)}
//     //     />
//     //   </SafeAreaView>
//     // </View>
//     <View>
//       <Text>{item.post}</Text>
//     </View>
//   );
// };

// export default CompletedTask;
