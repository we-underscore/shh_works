import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Credit from "./views/Credit";
import Reply from "./views/Reply";
import Video from "./views/Video";
import Venue from "./views/Venue";
import Performer from "./views/Performer";
import Page4 from "./views/Page4";

export default function App() {
  const [sliderRef] = useKeenSlider({
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    vertical: true,
    loop: true,
  });

  return (
    <>
      <div
        //@ts-ignore
        ref={sliderRef}
        className="keen-slider keen-slider--vertical"
        style={{ height: "100vh" }}
      >
        <div className="keen-slider__slide">
          <Video />
        </div>
        <div className="keen-slider__slide">
          <Venue />
        </div>
        <div className="keen-slider__slide">
          <Performer />
        </div>
        <div className="keen-slider__slide">
          <Page4 />
        </div>
        <div className="keen-slider__slide">
          <Credit />
        </div>
        <div className="keen-slider__slide">
          <Reply />
        </div>
      </div>
    </>
  );
}
