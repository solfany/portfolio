import React from "react";

const Carousel = () => {
  return (
    <div id="carousel">
      <figure id="spinner">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" alt="" />
        <img src="wanaka-tree.jpg" alt="" />
        <img src="still-lake.jpg" alt="" />
        <img src="pink-milford-sound.jpg" alt="" />
        <img src="paradise.jpg" alt="" />
        <img src="morekai.jpg" alt="" />
        <img src="milky-blue-lagoon.jpg" alt="" />
        <img src="lake-tekapo.jpg" alt="" />
        <img src="milford-sound.jpg" alt="" />
      </figure>
    </div>
  );
};

const CarouselControls = () => {
  const galleryspin = (direction) => {
    // Add your logic for gallery spin here
  };
  function sendemail() {
    return (
      <>
        <span style={{ float: "left" }} className="ss-icon" onClick={() => galleryspin("-")}>
          &lt;
        </span>
        <span style={{ float: "right" }} className="ss-icon" onClick={() => galleryspin("")}>
          &gt;
        </span>
      </>
    );
  }

  const App = () => {
    return (
      <div>
        <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" />
        <Carousel />
        <CarouselControls />
      </div>
    );
  };
};
export default sendemail;
