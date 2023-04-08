"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { ElementType } from "@/utils/types";

const AutoCarousel = ({ children }: ElementType) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    cssEase: "linear",
    slidesToShow: 11,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    touchMove: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default AutoCarousel;
