import React from "react";
import { createUseStyles } from "react-jss";
import background from "./background.jpg";

export default function Credit() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          {/* “잠은 자본주의가 제거할 수 없는, 유일하게 남아 있는 장애물, 유일하게
          지속되는 ‘자연조건’이다.” */}
        </div>
        <div className={classes.subTitle}>
          {/* - Jonathan Crary, 24/7 : Late Capitalism and the Ends of Sleep */}
        </div>
      </div>
      <div className={classes.credit}>
        <div className={classes.creditLeft}>
          컨셉・안무
          <br />
          퍼포머
          <br />
          <br /> 기술감독
          <br /> 음향 디자인
          <br /> 그래픽 작업
          <br /> 사진・기록영상
          <br />
          의상디자인
          <br /> 프로듀서
          <br /> 프로덕션 매니저
          <br /> 후원
        </div>
        <div className={classes.creditRight}>
          황수현
          <br /> 강호정, 김주영, 도윤승, 박유라,
          <br /> 신정민, 이현우, 황다솜
          <br />
          김지명
          <br /> 지미세르
          <br /> 백인경
          <br /> 이의록
          <br /> 임선열
          <br /> 박초아
          <br /> 김헌후
          <br /> 서울특별시, 서울문화재단, 한국문화예술위원회,
          (재)전문무용수지원센터
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-arround",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#000000",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    width: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
    color: "#707070",
  },
  subTitle: {
    fontFamily: "Noto Serif KR",
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "italic",
    lineHeight: 1.5,
    letterSpacing: 0,
    textAlign: "center",
    color: "#707070",
    marginTop: 10,
  },
  credit: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
    marginTop: 0,
  },
  creditLeft: {
    width: "30%",
    height: "auto",
    fontFamily: "Noto Serif KR",
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 1.6,
    letterSpacing: 0,
    textAlign: "right",
    color: "#ffffff",
  },
  creditRight: {
    width: "66%",
    height: "auto",
    fontFamily: "Noto Serif KR",
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 1.6,
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffffff",
  },
});
