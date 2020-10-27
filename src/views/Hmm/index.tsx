import React from "react";
import { Bar } from "../../components/Intro";
import { useSpring } from "react-spring";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@keyframes slide": {
    from: { width: "0px" },
    to: { width: "359.95px" },
  },
  container: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    width: "100%",
    height: "100%"
  },
  typography: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    paddingRight: 10,
  },
  bar: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    height: 3,
  },
  text: {
    fontFamily: "Jeju Myeongjo",
    color: "#ffffff",
    fontSize: 51,
    paddingRight: 10,
  },
  transitionBox: {
    animation: "$slide 2s cubic-bezier(0.755, 0.05, 0.855, 0.06) forwards",
    position: "absolute",
    backgroundColor: "#ffffff",
    width: "100%",
    zIndex: 1,
  },
});

export default function () {
  const classes = useStyles();
  const barSpring = useSpring({
    from: { width: "0px" },
    to: { width: "359.95px" },
    config: { duration: 5000 },
  });

  return (
    <div className={classes.container}>
      <p className={classes.text}>음</p>
      <div className={classes.bar} style={barSpring}>
        <Bar height="3px" />
      </div>
    </div>
  );
}
