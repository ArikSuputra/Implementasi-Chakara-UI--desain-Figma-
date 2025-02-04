import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { DM_Serif_Display , Quicksand } from '@next/font/google';
import {GoArrowRight} from "react-icons/go";
const dmSerifDisplay = DM_Serif_Display({
    weight: '400', 
    subsets: ['latin'],
});

const quicksand = Quicksand({
    weight: '400', 
    subsets: ['latin'],
});

const CardBox = () => {
  return (
    <Box
      bg="#E1D5CECC"
      p="15px"
      width="100%"
      height="200"
      display="flex"
      flexDirection="column"
      gap={1}
      justifyContent="top"
      alignItems="center"
    >
      <Heading size="md" color="black" fontFamily={dmSerifDisplay.style.fontFamily}>
        The Rock and Roll Hall
      </Heading>
      <Text fontSize="sm" color="gray.600" fontFamily={quicksand.style.fontFamily}>
        <b>Client:</b> PT Devkoma Development <br />
        <b>Design:</b> Kapinala Studio
      </Text>
      <Flex direction="row">
      <Text fontFamily={quicksand.style.fontFamily}>
        See details 
      </Text>
      <Flex pt="5px" pl="7px">
        <GoArrowRight/>
      </Flex>
      </Flex>
    </Box>
  );
};

export default CardBox;
