import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   backgroundColor: "#577555" ,
   marginTop:0
    
  },
  textInput: {
    width: 220,
    height: 45,
    marginRight: 20,
    borderColor:"black",
    borderWidth:2,
    borderRadius:10, 
    // margin:5, 
    paddingLeft:5,
     marginTop:-259,
     marginBottom:168,
    color:'#000',
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'flex-start',
    fontSize:20

    

  },
  emailInput:{
    
  },
  login: {
     marginTop: -200,
     marginRight: 30,
    width: 150,
  
    backgroundColor: '#fff',
    height: 40,
    textAlign: 'center',
    borderRadius: 10,
    justifyContent:"center",
    alignItems:'center',
    flexDirection:'row',
    paddingBottom:10
  },
  text: {
    color:'#000',
    textAlign: 'center',
    paddingTop: 10,
  },
  imgBgd:{
    width:300,
    height:470,
    zIndex:-1,
    marginTop:-200
  }

})
export default styles;