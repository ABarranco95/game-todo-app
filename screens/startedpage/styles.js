import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex:1,
    //   justifyContent:'center',
    //   alignItems:'center',
    //   marginTop:0,
    //    width:355,
    //   height:650,
    //  marginLeft:250,
    /* iPhone 13 Pro Max - 4 */

    position: "relative",
    width: 415,
    height: 788,

    backgroundColor: "#FFFFFF",
  },
  startPage: {
    marginTop: -80,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    // width:100,
    textAlign: "center",
    //  marginLeft:250
  },
  btn: {
    position: "absolute",
    width: 240.98,
    height: 68,
    left: 94,
    top: 732,
  },
  btnText: {
    position: "absolute",
    width: 207.58,
    height: 26.44,
    left: 113.09,
    top: 730.7,

    // fontFamily: 'Raleway',
    // font-style: normal
    // font-weight: 600
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",

    // color: "#5C5C5C",
  },
});
export default styles;
