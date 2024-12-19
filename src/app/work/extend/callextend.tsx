'use client';
import { useSearchParams } from "next/navigation";
import { Box, Text ,Flex , Divider , Table , Thead , Tr , Th, Tbody , Td} from "@chakra-ui/react";
import Image from "next/image";
import { DM_Serif_Display , Quicksand } from '@next/font/google';

const quicksand = Quicksand({
  weight: '400', 
  subsets: ['latin'],
});

export default function ExtendPage() {
  const searchParams = useSearchParams();
  const image = searchParams.get("image"); // Get the 'image' parameter from the URL

  if (!image) {
    return <Text>No image selected</Text>;
  }

  return (
    <Flex direction="column" paddingLeft="2">
    <>
    <Text fontSize="24px" color="#868686" align="left" mb={4} fontFamily={quicksand.style.fontFamily}>
    Design by Kapi Nala
    </Text>
    <Flex direction="row" gap="50px" width="100%" height="550px">
    
    <Flex direction="column" width="100%" display={{ base: "none", lg: "flex" }}>
  <Text fontSize="48px" color="#562400" align="left" mb={4} fontFamily={quicksand.style.fontFamily}>
    The Rock and Roll Hall
  </Text>
  <Box
    w="400px"
    h="400px"
    pos="relative"
    mb={4}
    overflow="hidden" // Ensure the image doesn't spill outside the box
  >
    <Image
      src={`/images/gallery/${image}`}
      alt="Selected Image"
      layout="fill" // Forces the image to fill the 400px x 400px container
      objectFit="cover" // Ensures the image fills the box while cropping to maintain aspect ratio
      style={{ borderRadius: "8px" }} // Optional: Apply rounded corners to the image itself
    />
  </Box>
</Flex>
<Flex direction="column" width="100%" height="600px"  overflowX="auto" display={{ base: "none", lg: "flex" }}>
<Box p={4} width="100%" maxW="600px" borderRadius="md" objectFit="cover" height="450px">
      {/* Object Info Section */}
      <Box mb={8} objectFit="cover" height="225px" >
        <Table variant="unstyled" width="100%">
          <Tbody>
            <Tr>
              <Td fontWeight="medium" fontSize="16px" color="#562400" borderTop="1px solid #918E8B">Object info</Td>
              <Td fontWeight="medium" fontSize="16px" color="#918E8B" borderBottom="1px solid " borderTop="1px solid">Architects</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold" borderTop="1px solid #918E8B" borderBottom="1px solid #918E8B " color="black" fontFamily={quicksand.style.fontFamily} >Jhonne Doe</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td fontWeight="medium" fontSize="16px" borderBottom="1px solid" color="#918E8B">Area</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold" borderBottom="1px solid #918E8B "  color="black" fontFamily={quicksand.style.fontFamily} >Jhonne Doe</Td>
            </Tr>
            <Tr>
            <Td></Td>
              <Td fontWeight="medium" fontSize="16px" borderBottom="1px solid " color="#918E8B">Year</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold" borderBottom="1px solid #918E8B "  color="black" fontFamily={quicksand.style.fontFamily} >Jhonne Doe</Td>
            </Tr>
            <Tr>
            <Td></Td>
              <Td fontWeight="medium" fontSize="16px" borderBottom="1px solid " color="#918E8B">Country</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold" borderBottom="1px solid #918E8B "  color="black" fontFamily={quicksand.style.fontFamily} >Jhonne Doe</Td>
            </Tr>
            <Tr>
            <Td></Td>
              <Td fontWeight="medium" fontSize="16px" color="#918E8B">City</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold"  color="black" fontFamily={quicksand.style.fontFamily} >Jhonne Doe</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      {/* Assignees Section */}
      <Box objectFit="cover" height="200px">
        <Table variant="unstyled" width="100%">
          <Tbody>
            <Tr>
            <Td fontWeight="medium" fontSize="16px" color="#562400" borderTop="1px solid #918E8B " >Assignes</Td>
              <Td fontWeight="medium" fontSize="16px" color="#918E8B" borderBottom="1px solid " borderTop="1px solid" >Lead Architects</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold" color="black" borderTop="1px solid #918E8B" borderBottom="1px solid #918E8B" fontFamily={quicksand.style.fontFamily} >
                Jhonne Doe
              </Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td fontWeight="medium" fontSize="16px" color="#918E8B" borderBottom="1px solid">Structural Engineering</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold" color="black" borderBottom="1px solid #918E8B " fontFamily={quicksand.style.fontFamily} >
                Jhonne Doe
              </Td>
            </Tr>
            <Tr>
            <Td></Td>
              <Td fontWeight="medium" fontSize="16px" color="#918E8B" borderBottom="1px solid">Landscape Designer</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold" color="black" borderBottom="1px solid #918E8B" fontFamily={quicksand.style.fontFamily} >
                Jhonne Doe
              </Td>
            </Tr>
            <Tr>
            <Td></Td>
              <Td fontWeight="medium" fontSize="16px" color="#918E8B" borderBottom="1px solid">Builder</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold" color="black" borderBottom="1px solid #918E8B " fontFamily={quicksand.style.fontFamily} >
                Jhonne Doe
              </Td>
            </Tr>
            <Tr>
            <Td></Td>
              <Td fontWeight="medium" fontSize="16px" color="#918E8B" >Photographer</Td>
              <Td textAlign="right" fontSize="16px" fontWeight="bold" color="black" fontFamily={quicksand.style.fontFamily} >
                Jhonne Doe
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
    </Flex>
</Flex>
    <Divider orientation="horizontal" borderWidth="1.1px" borderColor="black.400" />
    <Box
      flex="1"
      mx="auto"
      position="relative"
      mt="20px"
      display="flex"
      flexDirection="column"
    >
      <Text fontSize="12px" color="#606060" align="left" mb={4} lineHeight="1.8" paddingBottom={2} fontFamily={quicksand.style.fontFamily}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Text>
<Text fontSize="12px" color="#606060" align="left" mb={4} lineHeight="1.8" paddingTop={2} paddingBottom={2} fontFamily={quicksand.style.fontFamily}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Text>
<Text fontSize="12px" color="#606060" align="left" mb={4} lineHeight="1.8" paddingBottom={2} fontFamily={quicksand.style.fontFamily}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Text>
    </Box>
    </>
</Flex>
  );
}
