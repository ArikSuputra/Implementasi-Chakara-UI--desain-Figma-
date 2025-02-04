"use client";
import { Box, Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from 'react';
import CarouselComponent from "./components/crousel";
import CardBox from "./components/dekstop/cardbox";
import CardBox1 from "./components/mobile/cardbox";
import { useState } from "react";
import { BsJustify } from "react-icons/bs";

export default function Home() {
  const [value, setValue] = useState("1");

  return (
    <>
      <Flex
  direction="column"
  justify="center"
  align="center"
  width="100%"
  height="100vh" // Pastikan tinggi tetap 100vh agar tidak lebih dari satu layar
  position="relative"
  overflow="hidden"
>
  {/* Carousel dengan tinggi dinamis */}
  <Box
    width="100%"
    minHeight={{ base: "80vh", lg: "90vh" }} // Mengurangi tinggi di layar kecil
    position="relative"
    overflow="hidden"
  >
    <CarouselComponent />
  </Box>

  {/* CardBox1 muncul di bawah carousel tanpa scroll */}
  <Box
    position="relative"
    width="100%"
    display={{ base: "flex", lg: "none" }}
    justifyContent="center"
  >
    <CardBox1 />
  </Box>
</Flex>


      <Box
        position="absolute"
        bottom="50px" // Distance from bottom
        right="50px" // Distance from left
        zIndex="3"
        display={{ base: "none", lg: "flex" }}
      >
        <CardBox />
      </Box>

    </>
  );
}
