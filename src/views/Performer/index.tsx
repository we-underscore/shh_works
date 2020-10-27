import React from "react";
import { createUseStyles } from "react-jss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image01 from "./image01.jpg";
import image02 from "./image02.jpg";
import image03 from "./image03.jpg";
import image04 from "./image04.jpg";
import image05 from "./image05.jpg";
import image06 from "./image06.jpg";
import image07 from "./image07.jpg";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  top: {
    height: "45%",
  },
  slider: {
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Noto Serif KR",
    color: "#707070",
    fontSize: 14,
  },
  bottom: {
    height: "55%",
  },
  title: {
    marginLeft: 15,
    marginTop: 30,
    fontFamily: "Noto Serif KR",
    fontSize: 16,
    fontWeight: 500,
    fontStyle: "normal",
    lineHeight: 1.2,
    letterSpacing: 0,
    textAlign: "left",
    color: "#707070",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: "auto",
    marginTop: 30,
    width: "80%",
    height: "auto",
    fontFamily: "Noto Serif KR",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 1.6,
    letterSpacing: 0,
    textAlign: "left",
    color: "#707070",
  },
  imageSlide: {
    backgroundSize: "cover",
    minHeight: 300,
    // height: "100%",
    minWidth: "100%",
    // width: "100%",
    // height: 300,
  },
});

export default function Performer() {
  const classes = useStyles();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items = [
    <div className={classes.imageContainer}>
      <img src={image01} width="100%" alt="performer" />
      강호정
    </div>,
    <div className={classes.imageContainer}>
      <img src={image02} width="100%" alt="performer" />
      김주영
    </div>,
    <div className={classes.imageContainer}>
      <img src={image03} width="100%" alt="performer" />
      도윤승
    </div>,
    <div className={classes.imageContainer}>
      <img src={image04} width="100%" alt="performer" />
      박유라
    </div>,
    <div className={classes.imageContainer}>
      <img src={image05} width="100%" alt="performer" />
      신정민
    </div>,
    <div className={classes.imageContainer}>
      <img src={image06} width="100%" alt="performer" />
      이현우
    </div>,
    <div className={classes.imageContainer}>
      <img src={image07} width="100%" alt="performer" />
      황다솜
    </div>,
  ];
  // const [horizontalRef] = useKeenSlider({
  //   slidesPerView: 1,
  //   mode: "free-snap",
  //   spacing: 15,
  //   centered: true,
  //   loop: false,
  // });
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.title}>PERFORMER</div>
        <div className={classes.slider}>
          <AliceCarousel
            mouseTracking
            items={items}
            paddingLeft={50}
            paddingRight={50}
            responsive={responsive}
            // autoHeight
            // autoWidth
            disableButtonsControls
            disableDotsControls
          />
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.title}>HMMMMM</div>
        <div className={classes.content}>
          <p>
            고고학자 스티븐 미슨은 의사소통의 기원에 관한 자신의 연구에서 음악과
            언어가 공통의 뿌리를 갖는다고 주장하며 다음과 같이 말했다.
          </p>
          <p>
            “원시언어는 엄밀하게 언어적이거나 음악적인 것이 아니라 두 가지
            성격이 뒤섞인 ‘HMMMMM’ (Holistic, Multi-modal, Manipulative, Music,
            Mimetic) 체계로 구성되어 있다.”
          </p>
          <div style={{ fontSize: 12, fontStyle: "italic" }}>
            - Steven Mithen, The singing Neanderthals
          </div>
        </div>
      </div>
    </div>
  );
}
