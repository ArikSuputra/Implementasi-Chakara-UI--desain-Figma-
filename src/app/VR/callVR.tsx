"use client";
import Image from "next/image";
import { DM_Serif_Display } from '@next/font/google';
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import { useGalleryImages } from "../components/gallery";

const dmSerifDisplay = DM_Serif_Display({
  weight: '400', // Specify the weight you want (e.g., 400 for regular)
  subsets: ['latin'], // Optional subsets
});

export default function VR() {
  const filenames = useGalleryImages("VR");

  console.log("Filenames fetched in VR component:", filenames);

  return (
    <Flex direction="column" wrap="wrap" justify="center" p={5}>
      <SimpleGrid columns={[1]} spacing="20px" width="100%" maxW="5000px">
        {filenames.map((filename: string) => {
          const imagePath = `/images/VR/${filename}`;
          console.log("Image path:", imagePath);

          return (
            <Box
              key={filename}
              position="relative"
              width="100%"
              height="256px" // Fixed height, width will adjust to fit the screen
              overflow="hidden"
            >
              <Image
                src={imagePath}
                alt={filename}
                layout="responsive"
                width={800} // Original width for ratio calculation
                height={456} // Original height for ratio calculation
                objectFit="cover" // Ensures the image fills the box
              />
              <Box position="absolute" top="10px" left="10px">
                <Text
                  bg="rgba(255, 255, 255, 0.8)"
                  p="3px 8px"
                  fontSize="sm"
                  color="#562400"
                  fontFamily={dmSerifDisplay.style.fontFamily}
                >
                  Lorem Ipsum
                </Text>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
 