import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    
  },
  scoreContainer: {
    backgroundColor: "#FFFFFF",
    marginTop:90,
    marginBottom:10,
    marginLeft: 20,
    width: 320,
    height: 276,
    borderRadius: 14,
  },
  pointContainer: {
    marginLeft: 60,
    paddingTop: 80,
  },
  scorePoints: {
    fontSize: 99,
    color: "#DF5C0E",
    // fontFamily: "Raleway",

  },
  total: {
    fontSize: 25,
    color: "#5C5C5C",
    // fontFamily: "Raleway",

  },
  sideBySide: {
    flexDirection: "row",
    marginLeft: 60,
    paddingTop: 10,
    paddingBottom: 60,
  },
  points: {
    color: "#2D1A9C",
    fontSize: 19,
    paddingTop: 75,
    marginLeft: 10,
  },
  taskPost: {
    color: "#696969",
    fontSize: 19,
    marginLeft: 15,
    marginBottom: 10,
    flexWrap: "wrap",
  },
  itemPostContainer: {
    width: 250, 
  },
  
  taskContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#F0F0F0DE",
    paddingTop: 20,
    width:320,
    flexDirection: "row",
    borderBottomWidth: 0.1,
    borderColor: "#5C5C5C",
    // alignItems: "center",
  },
  dotCircle: {
    marginLeft: 10,
  },
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
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },

  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "grey",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },

  scoreBgI: {
    position: "absolute",
    width: 428,
    height: 970,
    left: 0,
    top: 0,
  },
  backButton: {
    marginTop: 35,
    marginLeft: 15,
  },
  backText: {
    color: "white",
    textDecorationLine: "underline",
  },
});
export default styles;
