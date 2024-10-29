'use client';
import { Box, Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import  Image  from "next/image";

export default function Home() {
  return (
    <Flex direction={['column', 'row']} wrap="wrap" justify="center" height="100vh" width="100%">
      <Box
        flex="1"
        // backgroundImage="url('/images/BackGround.png')"
        // backgroundSize="cover"
        // width="100%"
        // top="0"
        // left="0"
        // right="0"
        // bottom="0"
        // backgroundRepeat="no-repeat"
        // backgroundPosition="center"
        position="relative"
        overflow="hidden"
        // style={{ objectFit: "cover"}}
        // filter="hue-rotate(-100deg) saturate(40%) brightness(65%)"
        // p={4}
      >
        <Image 
        src = "/images/BackGround.png"
        style={{ objectFit: "cover"}}
        alt="background"
        fill
        >

        </Image>
        <Text fontSize="2xl" color="Black" align="center">Welcome to the Home Page</Text>
        <Flex justify="center" mt={10} pt={30}>
          <RadioGroup defaultValue="1">
            <Stack direction="row" spacing={10}>
              <Radio value="1"  />
              <Radio value="2"  />
              <Radio value="3"  />
              <Radio value="4"  />
            </Stack>
          </RadioGroup>
        </Flex>
      </Box>
    </Flex>
  );
}
