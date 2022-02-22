import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 428,
    height: 926,
    left: 0,
    top: 0,
  },
  loginContainer: {
    position: "absolute",
    width: 331.01,
    height: 355,
    left: 28,
    top: 214,
    zIndex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16.4372,
  },
  inputContainer: {
    position: "absolute",
    width: 316.44,
    height: 166.07,
    left: 55,
    top: 366,
  },
  emailInput: {
    position: "absolute",
    width: 276.44,
    height: 53.61,
    left: 25,
    top: 85.61,
    backgroundColor: "#DBDBDB",
    borderRadius: 13.0761,
  },
  emailInput: {
    position: "absolute",
    width: 276.44,
    height: 53.61,
    left: 25,
    top: 85.61,
    backgroundColor: "#DBDBDB",
    borderRadius: 13.0761,
  },
  passwordInput: {
    position: "absolute",
    width: 276.44,
    height: 53.61,
    left: 25,
    top: 185.61,
    backgroundColor: "#DBDBDB",
    borderRadius: 13.0761,
  },
  loginTitle: {
    position: "absolute",
    width: 105.14,
    height: 32.87,
    left: 116,
    top: 15.13,

    // font-family: Raleway;
    // font-style: normal;
    // font-weight: 600;
    fontSize: 28.1781,
    lineHeight: 33,
    /* identical to box height */

    textAlign: "center",

    color: "#5C5C5C",
  },
  emailTitle: {
    position: "absolute",
    width: 139.91,
    height: 19.61,
    left: 25,
    top: 66,

    // font-family: Raleway
    // fontStyle: "normal",
    // fontWeight: 600,
    fontSize: 16.9989,
    lineHeight: 20,
    /* identical to box height */

    textAlign: "center",

    color: "#5C5C5C",
  },
  passwordTitle: {
    position: "absolute",
    width: 139.91,
    height: 19.61,
    // left: ,
    top: 166,

    // font-family: Raleway
    // fontStyle: "normal",
    // fontWeight: 600,
    fontSize: 16.9989,
    lineHeight: 20,
    /* identical to box height */

    textAlign: "center",

    color: "#5C5C5C",
  },
  loginBtn: {
    position: "absolute",
    width: 143.67,
    height: 51.18,
    left: 92,
    top: 254.82,
    backgroundColor: "#6E5BDC",
    borderRadius: 18.0213,
    borderBottomWidth: 5,
    borderColor: "#ACA8BB",
    shadowColor: "#ACA8BB",
    shadowOffset: {
      width: 40,
      height: 8,
    },
    shadowOpacity: .8,
    shadowRadius: 18.51,
    elevation: 5,
  },
  btnText: {
    position: "absolute",
    width: 63.7,
    height: 20.47,
    left: 42.95,
    top: 15.29,

    // font-family: Raleway;
    // font-style: normal;
    // font-weight: 600;
    fontSize: 17.0616,
    lineHeight: 20,

    color: "#FFFFFF",
  },
  registerBtn: {
    position: "absolute",
    width: 163.7,
    height: 20.47,
    left: 192.95,
    top: 325.29,

    // font-family: Raleway;
    // font-style: normal;
    // font-weight: 600;
    fontSize: 17.0616,
    lineHeight: 20,

    color: "#FFFFFF",
  },
});
export default styles;
