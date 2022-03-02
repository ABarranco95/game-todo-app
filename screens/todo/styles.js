import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Background Image
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backDrop: {
     position: "absolute",
     width: 428,
     height: 926,
     left: 0,
     top: 0,
  },

  // taskContainer: {
  //   backgroundColor: "red",
  //   width: 400,
  // },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 60,
  },
  
  writeTaskWrapper: {
    position: "absolute",
    right: 0, 
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#679d63",
    borderRadius: 60,
    borderColor: "#679d63",
    borderWidth: 3,
    width: 320,
    justifyContent: "center",
    alignItems: "center",
    color:"#fff",
    
  },
  addText:{
    color: "#fff",
    fontSize: 30,
  } ,


  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "#679D63",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#679D63",
    borderWidth: 3,
    right: -5,
  },

  itemText: {
  //  width: 200,
   marginRight: 60,
  },
 
  item: {
    backgroundColor: "#fff",
    // left: 1,
    // padding: ,
    borderRadius: 5,
    borderColor: "#8f00f0",
    borderWidth: 3,
    flexDirection: "row",
    // flexWrap: "wrap",
    alignItems: "center",
    // justifyContent: "space-between",
    marginBottom: 10,
    width: 350,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    // flexWrap: "wrap",
    width: 195,

  },
  
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#8f00ff",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    marginLeft: 10,
  },
  
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
 
});
export default styles;
