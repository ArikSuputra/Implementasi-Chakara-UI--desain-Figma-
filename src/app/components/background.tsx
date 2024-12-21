import { Box } from "@chakra-ui/react";

const backIgm = () => {
  return (
    <Box
      position="fixed" // Use fixed positioning to ensure it covers the entire viewport
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="-1" // Place it behind all other content
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('/images/Image(bbg).png')"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        filter="blur(1px)" // Apply blur effect
        opacity="0.50" // Lower the opacity of the image
      />
    </Box>
  );
};
export default backIgm;
