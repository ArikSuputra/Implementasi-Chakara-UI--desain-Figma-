'use client';
import { Box, Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import CardBox from './components/dekstop/cardbox';
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("1");

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="100vh"
      width="100%"
      position="relative"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box position="absolute" top="0" left="-45px" right="0" bottom="0" zIndex="-1">
        <Image 
          src="/images/BackGround.png"
          style={{ objectFit: "cover" }}
          alt="background"
          fill
        />
      </Box>
      <Box
        position="absolute"
        bottom="50px"   // Distance from bottom
        right="50px"     // Distance from left
        zIndex="3"
        display={{ base: "none", lg: "flex" }} 
      >
        <CardBox />
      </Box>

      {/* Main Content */}

    {/* Radio Group at Bottom */}
     {/* Radio Group at Bottom */}
      <Box position="absolute" bottom="30px" left="0" right="0">
        <Flex justify="center" align="center">
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row" spacing={8}>
              {["1", "2", "3", "4"].map((val) => (
                <Radio
                  key={val}
                  value={val}
                  sx={{
                    // Remove Chakra's default focus outline
                    "&:focus, &:focus-visible": {
                      boxShadow: "none",
                    },

                    // Outer circle styles
                    "& .chakra-radio__control": {
                      width: "20px",
                      height: "20px",
                      borderWidth: "2px",
                      borderColor: "white", // Outer circle color
                      backgroundColor: "transparent", // Transparent background
                      borderRadius: "50%",
                      _checked: {
                        backgroundColor: "transparent", // No blue background
                        borderColor: "white", // Outer circle stays white
                      },
                    },

                    // Inner dot styles
                    "& .chakra-radio__control::before": {
                      content: '""',
                      display: "block",
                      width: "10px",
                      height: "10px",
                      backgroundColor: value === val ? "white" : "gray.500", // White when active, gray when inactive
                      borderRadius: "50%",
                      position: "relative",
                      margin: "auto",
                    },
                  }}
                />
              ))}
            </Stack>
          </RadioGroup>
        </Flex>
      </Box>    
      </Flex>
  );
}
