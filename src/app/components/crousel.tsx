"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const images = [
    "/images/gallery/immage1.png",
    "/images/gallery/immage2.png",
    "/images/gallery/immage3.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <Box
        position="absolute"
        bottom="30px" // Adjust this to move dots above bottom edge
        width="100%"
        display="flex"
        justifyContent="center"
        zIndex="20"
      >
        {dots}
      </Box>
    ),
    customPaging: () => (
      <Box
        width="20px" // Size of the dot
        height="20px"
        backgroundColor="white" // Color of the dot
        borderRadius="50%"
        margin="0 5px"
        transition="all 0.3s"
        _hover={{ backgroundColor: "gray.500" }} // Optional: change color on hover
      />
    ),
  };

  return (
    <Box width="100%" height="100vh" position="relative" overflow="hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} position="relative" height="90vh" overflow="hidden">
            <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselComponent;
