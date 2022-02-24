import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9E9D9D",
  },
  homeImg: {
    position: "relative",
    width: 428,
    height: 926,
  },
  todosButton: {
    position: "absolute",
    width: 298,
    height: 298,
    left: 50,
    top: 220,
  },
  todosTitle: {
    position: "absolute",
    width: 181,
    height: 37.35,
    left: 80,
    top: 232,
    fontSize: 30,
    lineHeight: 35,
    color: "#fff",
  },
  todosFlag: {
    position: "absolute",
    width: 35.5,
    height: 32.39,
    left: 225.5,
    top: 236.96,
  },
  viewTodosTitle: {
    position: "absolute",
    width: 158,
    height: 35,
    right: 105,
    top: 465,

    // font-family: Raleway;
    // font-style: normal;
    // font-weight: 800;
    fontSize: 30,
    lineHeight: 35,
    color: "#fff",
  },
  dates: {
    position: "absolute",
    width: 378,
    height: 71,
    top: 113,
  },
  month: {
    position: "absolute",
    width: 207,
    height: 33,
    left: 25,
    top: 62,

    // font-family: Raleway;
    // fontStyle: normal;
    // fontWeight: bold;
    fontSize: 28,
    lineHeight: 33,
    color: "#1F1F1F",
  },
  monthArrow: {
    position: "absolute",
    width: 12,
    height: 12,
    left: 145,
    top: 76,
  },
  viewTasksButton: {
    position: "absolute",
    width: 252,
    height: 42,
    left: 125,
    top: 460,
    // zIndex: 2,
  },
  viewTasksText: {
    color: "#fff",
    fontSize: 30,
  },
  finishBtn: {
    position: "absolute",
    width: 170,
    height: 65,
    left: 28,
    top: 585,
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
  },
  finishText: {
    position: "absolute",
    width: 147,
    height: 33,
    left: 18,
    top: 13,

    // font-family: Raleway;
    // font-style: normal;
    // font-weight: 800;
    fontSize: 26,
    lineHeight: 33,
    /* identical to box height */

    color: "#33772E",
  },
  notesBtn: {
    position: "absolute",
    width: 170,
    height: 65,
    left: 208,
    top: 585,
    backgroundColor: "#E6712C",
    borderRadius: 11,
  },
  notesText: {
    position: "absolute",
    width: 147,
    height: 33,
    left: 20,
    top: 10,

    // font-family: Raleway;
    // font-style: normal;
    // font-weight: 800;
    fontSize: 26,
    lineHeight: 33,
    /* identical to box height */

    color: "#fff",
  },
});
export default styles;
