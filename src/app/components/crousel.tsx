"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const images = [
    "/images/gallery/BackGround.png",
    "/images/gallery/immage2.png",
    "/images/gallery/immage3.png",
  ];

  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false, // Menghilangkan dots bawaan library
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex: number, newIndex: number) => setActiveIndex(newIndex),
  };

  return (
    <Box width="100%" height="100vh" position="relative" overflow="hidden">
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        {images.map((src, index) => (
          <Box key={index} position="relative" height="100vh" overflow="hidden">
            <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </Box>
        ))}
      </Slider>
      
      {/* Custom Dots */}
      <Box
        position="absolute"
        bottom={{ base: "175px", lg: "30px" }}
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        gap="10px"
      >
        {images.map((_, index) => (
          <Box
            key={index}
            width="15px"
            height="15px"
            backgroundColor={index === activeIndex ? "white" : "gray.500"}
            borderRadius="50%"
            cursor="pointer"
            transition="all 0.3s"
            onClick={() => sliderRef.current?.slickGoTo(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CarouselComponent;
