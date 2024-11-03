"use client";
import Image from "next/image";
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import { useGalleryImages } from "../components/gallery";

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
              borderRadius="10px"
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
                  borderRadius="5px"
                  fontSize="sm"
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
