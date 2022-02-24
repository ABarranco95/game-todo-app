import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
   
  },
  imgBgd:{
    height: 732,
    width: 359,
    // left: 3,
    marginBottom: -300,
    borderRadius: 0,
    zIndex:-1,
    // resizeMode: 'cover',
   
    
      },
      firstNameText:{
        fontSize:35,
        
      },
      textInput:{
        width:200,
        borderRadius:10,
        backgroundColor:"#fff",
        color:'black',
        padding:15,
        // marginBottom:5,
        marginTop:30
      },
      sumitBtn:{
        width:200,
        backgroundColor:"#6D8F6B",
        marginTop:10,
        padding:10,
        borderRadius:15,
        textAlign:"center",
        fontSize:20
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      button2: {
        borderRadius: 20,
        padding: 3,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#9675f8",
        top:290,
        width:180,
        alignSelf:"center",
        right:0,
       
        
      },
      buttonOpen2: {
        backgroundColor: "transparent",
        top:320,
        width:50,
        alignSelf:"center",
        right:0
        
      },
      buttonClose: {
        backgroundColor: "#9675f8",
      },
      textStyle: {
        color: "white",
       
        textAlign: "center",
        fontSize:20,
        backgroundColor: "#9675f8",
        
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:20
      },
      nameTitle:{
        top:250,
        alignSelf:'center',
        fontSize:25,
        right:0,
        color:"white",
          fontWeight: "bold",
      },
      date:{
        top:35,
        alignSelf:'flex-start',
        fontSize:18,
       color:'white',
       marginLeft:15
      }
    

})
export default styles;