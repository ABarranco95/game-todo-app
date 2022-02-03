import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    marginTop: 40,
  },
  textInput: {
    width: 250,
    height: 35,
    marginLeft: 40,
    borderColor:"black",
    borderWidth:2,
    borderRadius:10, 
    margin:5, 
    paddingLeft:5

  },
  login: {
    marginTop: 40,
    marginLeft: 40,
    width: 90,
    backgroundColor: '#4a3806',
    height: 35,
    textAlign: 'center',
    borderRadius: 30,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
  },

})
export default styles;