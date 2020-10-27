import React from "react";
import { createUseStyles } from "react-jss";
import bgImg from "./background.jpg";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  title: {
    marginTop: 26,
    marginLeft: 20,
    fontFamily: "Noto Serif KR",
    fontSize: 16,
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: 1.2,
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
  },
  content: {
    fontFamily: "Noto Serif KR",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 1.8,
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
    marginBottom: 20,
    marginLeft: 20,
    "& h1": {
      fontSize: 15,
    },
    "& ul": {
      listStyle: "none",
      listStyleType: "none",
      margin: 0,
      padding: 0,
    },
  },
});

export default function Venue() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>PERFORMANCE VENUE</div>
      <div className={classes.content}>
        <h3>정관헌(靜觀軒)의 장소성</h3>
        <ul>
          <li>— 명칭: 이름에 함의된 ‘조용히(靜) 내다봄(觀)’의 행위</li>
          <li>— 용도: 고종의 휴게실로 사용되었던 공간에서 갖는 쉼의 시간</li>
          <li>— 구조: 삼면이 트인 열린 구조로 내부와 외부의 순환</li>
          <li>— 역사: 공간이 품고있는 과거의 시간과 현재의 만남</li>
        </ul>
      </div>
    </div>
  );
}
