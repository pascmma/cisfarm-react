import React, { useState } from "react";
import Slider from "react-slick";

const Example = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <Slider {...settings}>
          <div className="border">
            <h3 className="text-white">1</h3>
          </div>
          <div className="border">
            <h3 className="text-white">2</h3>
          </div>
          <div className="border">
            <h3 className="text-white">3</h3>
          </div>
          <div className="border">
            <h3 className="text-white">4</h3>
          </div>
          <div className="border">
            <h3 className="text-white">5</h3>
          </div>
          <div className="border">
            <h3 className="text-white"> 6</h3>
          </div>
          <div className="border">
            <h3 className="text-white">7</h3>
          </div>
          <div className="border">
            <h3 className="text-white">8</h3>
          </div>
        
        </Slider>
      </div>
    </>





  );
};

export default Example;
