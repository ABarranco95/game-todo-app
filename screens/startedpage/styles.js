import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
  container:{
  flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:0,
     width:355, 
    height:650,
  //  marginLeft:250,
 
   

  },
  startPage:{
     marginTop:-80,
    backgroundColor:'#fff',
    padding:12,
    borderRadius:15,
    // width:100,
    textAlign:'center',
    //  marginLeft:250
  }, 
  btn:{
    width: 120,
  
    // marginLeft: 40,

    // borderColor:"black",
    // borderWidth:2,
    borderRadius:15, 
    // marginLeft: 20,
    padding:10 ,
    textAlign:'center',
    marginTop:-150,
    marginBottom:80,
    color:'#000',
    backgroundColor: '#fff',
    zIndex:100
    

  }

})
export default styles;