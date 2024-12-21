"use client";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Text,
  Flex,
  Divider,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Center,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import { DM_Serif_Display, Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

export default function ExtendPage() {
  const searchParams = useSearchParams();
  const image = searchParams.get("image"); // Get the 'image' parameter from the URL

  if (!image) {
    return <Text>No image selected</Text>;
  }

  return (
    <Flex direction="column" padding="30px">
      <>
        <Text
          fontSize="24px"
          color="#868686"
          align="left"
          mb={4}
          fontFamily={quicksand.style.fontFamily}
        >
          Design by Kapi Nala
        </Text>
        <Flex direction="row" width="100%" height="550px" display={{ base: "none", lg: "flex" }}>
          <Flex
            direction="column"
            width="100%"
            display={{ base: "none", lg: "flex" }}
          >
            <Text
              fontSize="48px"
              color="#562400"
              align="left"
              mb={4}
              fontFamily={quicksand.style.fontFamily}
            >
              The Rock and Roll Hall
            </Text>
            <Box
              w="500px"
              h="100%"
              pos="relative"
              mb={4}
              overflow="hidden" // Ensure the image doesn't spill outside the box
            >
              <Image
                src={`/images/gallery/${image}`}
                alt="Selected Image"
                layout="fill" // Forces the image to fill the 400px x 400px container
                objectFit="cover" // Ensures the image fills the box while cropping to maintain aspect ratio
              />
            </Box>
          </Flex>
          <Flex
            direction="column"
            width="100%"
            height="100%"
            overflowX="auto"
            display={{ base: "none", lg: "flex" }}
            
          >
            <Box width="100%" objectFit="cover" height="100%">
              {/* Object Info Section */}
              <Box objectFit="cover" height="250px" width="100%">
                <Table variant="unstyled" width="100%">
                  <Tbody>
                    <Tr>
                      <Td
                        fontWeight="medium"
                        fontSize="16x"
                        color="#562400"
                        borderTop="1px solid #918E8B"
                        width="30%"
                      >
                        Object info
                      </Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16px"
                        color="#918E8B"
                        borderBottom="1px solid "
                        borderTop="1px solid"
                      >
                        Architects
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16px"
                        fontWeight="bold"
                        borderTop="1px solid #918E8B"
                        borderBottom="1px solid #918E8B "
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16pxpx"
                        borderBottom="1px solid"
                        color="#918E8B"
                      >
                        Area
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16pxpx"
                        fontWeight="bold"
                        borderBottom="1px solid #918E8B "
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16pxpx"
                        borderBottom="1px solid "
                        color="#918E8B"
                      >
                        Year
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16px"
                        fontWeight="bold"
                        borderBottom="1px solid #918E8B "
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16px"
                        borderBottom="1px solid "
                        color="#918E8B"
                      >
                        Country
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16px"
                        fontWeight="bold"
                        borderBottom="1px solid #918E8B "
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16px"
                        color="#918E8B"
                      >
                        City
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16px"
                        fontWeight="bold"
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              <Box objectFit="cover" height="250px" width="100%" pt="25px">
                <Table variant="unstyled" width="100%">
                  <Tbody>
                    <Tr>
                      <Td
                        fontWeight="medium"
                        fontSize="16px"
                        color="#562400"
                        borderTop="1px solid #918E8B"
                        width="30%"
                      >
                        Assignees
                      </Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16px"
                        color="#918E8B"
                        borderBottom="1px solid"
                        borderTop="1px solid"
                        width="40%"
                      >
                        Lead Architects
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16px"
                        fontWeight="bold"
                        borderTop="1px solid #918E8B"
                        borderBottom="1px solid #918E8B"
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                        width="30%"
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16px"
                        borderBottom="1px solid"
                        color="#918E8B"
                      >
                        Structural Engineering
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16px"
                        fontWeight="bold"
                        borderBottom="1px solid #918E8B"
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16px"
                        borderBottom="1px solid"
                        color="#918E8B"
                      >
                        Landscape Designer
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16px"
                        fontWeight="bold"
                        borderBottom="1px solid #918E8B"
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16px"
                        borderBottom="1px solid"
                        color="#918E8B"
                      >
                        Builder
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16px"
                        fontWeight="bold"
                        borderBottom="1px solid #918E8B"
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td
                        textAlign="left"
                        fontWeight="medium"
                        fontSize="16px"
                        color="#918E8B"
                      >
                        Photographer
                      </Td>
                      <Td
                        textAlign="right"
                        fontSize="16px"
                        fontWeight="bold"
                        color="black"
                        fontFamily={quicksand.style.fontFamily}
                      >
                        Jhonne Doe
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Flex
            direction="column"
            width="100%"
            display={{ base: "flex", lg: "none" } }
            height="600px"
          >
            <Text
              fontSize="48px"
              color="#562400"
              align="left"
              mb={4}
              fontFamily={quicksand.style.fontFamily}
            >
              The Rock and Roll Hall
            </Text>
            <Box
              w="100%"
              h="100%"
              pos="relative"
              mb={4}
              overflow="hidden" // Ensure the image doesn't spill outside the box
            >
              <Image
                src={`/images/gallery/${image}`}
                alt="Selected Image"
                layout="fill" // Forces the image to fill the 400px x 400px container
                objectFit="cover" // Ensures the image fills the box while cropping to maintain aspect ratio
              />
            </Box>
          </Flex>

        <Divider
        display={{ base: "flex", lg: "none" } }
          orientation="horizontal"
          borderWidth="1px"
          borderColor="black.400"
        />

        <Flex width="100%" height="550px" display={{ base: "flex", lg: "none" }}>
        <Flex
          direction="column"
          width="100%"
          height="100%"
          overflowX="auto"
        >
          <Box width="100%" objectFit="cover" height="100%">
            {/* Object Info Section */}
            <Box objectFit="cover" height="250px" width="100%">
              <Table variant="unstyled" width="100%">
                <Tbody>
                  <Tr>
                    <Td
                      fontWeight="medium"
                      fontSize="16x"
                      color="#562400"
                      borderTop="1px solid #918E8B"
                      width="30%"
                    >
                      Object info
                    </Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16px"
                      color="#918E8B"
                      borderBottom="1px solid "
                      borderTop="1px solid"
                    >
                      Architects
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16px"
                      fontWeight="bold"
                      borderTop="1px solid #918E8B"
                      borderBottom="1px solid #918E8B "
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16pxpx"
                      borderBottom="1px solid"
                      color="#918E8B"
                    >
                      Area
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16pxpx"
                      fontWeight="bold"
                      borderBottom="1px solid #918E8B "
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16pxpx"
                      borderBottom="1px solid "
                      color="#918E8B"
                    >
                      Year
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16px"
                      fontWeight="bold"
                      borderBottom="1px solid #918E8B "
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16px"
                      borderBottom="1px solid "
                      color="#918E8B"
                    >
                      Country
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16px"
                      fontWeight="bold"
                      borderBottom="1px solid #918E8B "
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16px"
                      color="#918E8B"
                    >
                      City
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16px"
                      fontWeight="bold"
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>

            <Box objectFit="cover" height="250px" width="100%" pt="25px">
              <Table variant="unstyled" width="100%">
                <Tbody>
                  <Tr>
                    <Td
                      fontWeight="medium"
                      fontSize="16px"
                      color="#562400"
                      borderTop="1px solid #918E8B"
                      width="30%"
                    >
                      Assignees
                    </Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16px"
                      color="#918E8B"
                      borderBottom="1px solid"
                      borderTop="1px solid"
                      width="40%"
                    >
                      Lead Architects
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16px"
                      fontWeight="bold"
                      borderTop="1px solid #918E8B"
                      borderBottom="1px solid #918E8B"
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                      width="30%"
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16px"
                      borderBottom="1px solid"
                      color="#918E8B"
                    >
                      Structural Engineering
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16px"
                      fontWeight="bold"
                      borderBottom="1px solid #918E8B"
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16px"
                      borderBottom="1px solid"
                      color="#918E8B"
                    >
                      Landscape Designer
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16px"
                      fontWeight="bold"
                      borderBottom="1px solid #918E8B"
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16px"
                      borderBottom="1px solid"
                      color="#918E8B"
                    >
                      Builder
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16px"
                      fontWeight="bold"
                      borderBottom="1px solid #918E8B"
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                  <Tr>
                    <Td></Td>
                    <Td
                      textAlign="left"
                      fontWeight="medium"
                      fontSize="16px"
                      color="#918E8B"
                    >
                      Photographer
                    </Td>
                    <Td
                      textAlign="right"
                      fontSize="16px"
                      fontWeight="bold"
                      color="black"
                      fontFamily={quicksand.style.fontFamily}
                    >
                      Jhonne Doe
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Flex>
        </Flex>

        <Divider
          orientation="horizontal"
          borderWidth="1px"
          borderColor="black.400"
        />

        <Box
          flex="1"
          mx="auto"
          position="relative"
          mt="20px"
          display="flex"
          flexDirection="column"
        >
          <Text
            fontSize="12px"
            color="#606060"
            align="left"
            mb={4}
            lineHeight="1.8"
            paddingBottom={2}
            fontFamily={quicksand.style.fontFamily}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text
            fontSize="12px"
            color="#606060"
            align="left"
            mb={4}
            lineHeight="1.8"
            paddingTop={2}
            paddingBottom={2}
            fontFamily={quicksand.style.fontFamily}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text
            fontSize="12px"
            color="#606060"
            align="left"
            mb={4}
            lineHeight="1.8"
            paddingBottom={2}
            fontFamily={quicksand.style.fontFamily}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
        <Divider
          orientation="horizontal"
          borderWidth="1px"
          borderColor="black.400"
        />
        <Flex width="100%" height="550px"  pt="20px" pb="20px">
            <Box
              w="100%"
              h="100%"
              pos="relative"
              mb={4}
              overflow="hidden" // Ensure the image doesn't spill outside the box
            >
              <Image
                src={`/images/gallery/${image}`}
                alt="Selected Image"
                layout="fill" // Forces the image to fill the 400px x 400px container
                objectFit="cover" // Ensures the image fills the box while cropping to maintain aspect ratio
              />
            </Box>
          </Flex>

          <Divider
          orientation="horizontal"
          borderWidth="1px"
          borderColor="black.400"
        />

          <Box
          flex="1"
          mx="auto"
          position="relative"
          mt="20px"
          display="flex"
          flexDirection="column"
        >
          <Text
            fontSize="12px"
            color="#606060"
            align="left"
            mb={4}
            lineHeight="1.8"
            paddingBottom={2}
            fontFamily={quicksand.style.fontFamily}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text
            fontSize="12px"
            color="#606060"
            align="left"
            mb={4}
            lineHeight="1.8"
            paddingTop={2}
            paddingBottom={2}
            fontFamily={quicksand.style.fontFamily}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text
            fontSize="12px"
            color="#606060"
            align="left"
            mb={4}
            lineHeight="1.8"
            paddingBottom={2}
            fontFamily={quicksand.style.fontFamily}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>

        <Divider
          orientation="horizontal"
          borderWidth="1px"
          borderColor="black.400"
        />
        <Flex width="100%" height="550px"  pt="20px" pb="20px">
            <Box
              w="100%"
              h="100%"
              pos="relative"
              mb={4}
              overflow="hidden" // Ensure the image doesn't spill outside the box
            >
              <Image
                src={`/images/gallery/${image}`}
                alt="Selected Image"
                layout="fill" // Forces the image to fill the 400px x 400px container
                objectFit="cover" // Ensures the image fills the box while cropping to maintain aspect ratio
              />
            </Box>
          </Flex>

          <Divider
          orientation="horizontal"
          borderWidth="1px"
          borderColor="black.400"
        />

          <Box
          flex="1"
          mx="auto"
          position="relative"
          mt="20px"
          display="flex"
          flexDirection="column"
        >
          <Text
            fontSize="12px"
            color="#606060"
            align="left"
            mb={4}
            lineHeight="1.8"
            paddingBottom={2}
            fontFamily={quicksand.style.fontFamily}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text
            fontSize="12px"
            color="#606060"
            align="left"
            mb={4}
            lineHeight="1.8"
            paddingTop={2}
            paddingBottom={2}
            fontFamily={quicksand.style.fontFamily}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text
            fontSize="12px"
            color="#606060"
            align="left"
            mb={4}
            lineHeight="1.8"
            paddingBottom={2}
            fontFamily={quicksand.style.fontFamily}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </>
    </Flex>
  );
}
