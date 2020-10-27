import React from "react";
import { createUseStyles } from "react-jss";
import { isMobile } from "react-device-detect";
import cover from "./cover.png";

const useStyles = createUseStyles({
  root: {
    position: "relative",
    width: "100%",
  },
  playerContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  text: {
    marginTop: isMobile ? 40 : 0,
    paddingLeft: 20,
    width: "90%",
    height: "auto",
    fontFamily: "Noto Serif KR",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 1.6,
    letterSpacing: 0,
    textAlign: "left",
    color: "#707070",
    textIndent: 20,
  },
});

export default function Video() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        {/* <div className={classes.playerContainer}>
          <PlayIcon style={{ position: "absolute" }} onClick={() => console.log("play")} />
        </div> */}
        <video controls width="100%" height="auto" playsInline poster={cover}>
          <source
            src="https://shh-works-contents.s3.ap-northeast-2.amazonaws.com/Hmmmm_mobile.m4v"
            type="video/mp4"
          />
        </video>
        {/* <ReactPlayer
          width="100%"
          height="auto"
          controls
          url="https://shh-works-contents.s3.ap-northeast-2.amazonaws.com/Hmmmm_mobile.m4v"
          playIcon={<PlayIcon />}
          poster={singing}
        /> */}
      </div>
      <div className={classes.text}>
        <p>
          황수현의 신작 ❮ 음—— ❯은 정관헌(靜觀軒)이라는 공간이 함의하고 있는
          ‘조용히 내다본다’는 행위를 조명한다. 바라본다는 시각적 감각과 저
          너머를 내다본다는 예기적 감각 사이에서 안무가는 ‘본다’는 감각 행위의
          의미를 반추한다.
        </p>
        <p>
          ❮ 음—— ❯은 관객이 바깥 풍경을 내다보면서 해석의 과정을 지연하는 멈춤
          상태에 머무를 수 있도록 안내한다. 함께 모여 무언가를 관람하고 의미를
          찾는 과정이 잠시 정지된 이 상태는 막연하고 모호한 공백을 만들어낸다.
          그 진공 속에서 관객은 불현듯 의미화 너머의 세계를 감지하기 시작한다.
        </p>
        <p>
          오늘날 스크린이 아니라 ‘몸’으로 공연을 감각하는 행위는 감각적 진보와
          도태 사이, 시각적 구체와 추상 사이, 과거의 향수와 미래의 가능성 사이를
          부유한다. 그러나 이 유예의 상태는 곧 ‘내다보기’의 영역으로 내디딜 수
          있는 단서가 된다.
        </p>
      </div>
    </>
  );
}
