import React from "react";
import { createUseStyles } from "react-jss";
import background from "./background.jpg";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundSize: "contain",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  title: {
    width: "80%",
    height: "auto",
    fontFamily: "Noto Serif KR",
    fontSize: 19,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 1.5,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
  },
  subTitle: {
    fontFamily: "Noto Serif KR",
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "italic",
    lineHeight: 1.5,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
    marginTop: 10,
  },
});

export default function Page4() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          “잠은 자본주의가 제거할 수 없는, 유일하게 남아 있는 장애물, 유일하게
          지속되는 ‘자연조건’이다.”
        </div>
        <div className={classes.subTitle}>
          - Jonathan Crary, 24/7 : Late Capitalism and the Ends of Sleep
        </div>
      </div>
    </div>
  );
}
