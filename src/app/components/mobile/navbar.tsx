import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const currentPath = usePathname();
  const routes = [
    { name: "Home", path: "/", imgSrc: "/images/Home.png" },
    { name: "Work", path: "/work", imgSrc: "/images/work.png" },
    { name: "VR", path: "/VR", imgSrc: "/images/VR.png" },
    { name: "About", path: "/about", imgSrc: "/images/working.png" },
    { name: "Contact", path: "/contact", imgSrc: "/images/contac.png" },
  ];
  return (
    <Box
      as="nav"
      backgroundImage="url('/images/Image(bg).png')"
      backgroundSize="cover"
      backgroundPosition="center"
      filter="saturate(65%) brightness(90%) blur(60%)"
      p={4}
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      height="70px"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: -38,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(225, 213, 206, 0.70)", // Increase opacity here
        zIndex: 0, // Layer below text but above image
      }}
      zIndex="3"
    >
      <Flex gap={4}>
        {routes.map((route) => (
          <ChakraLink
            href={route.path}
            key={route.name}
            width="100%"
            height="100%"
            padding="1px"
            bg={currentPath === route.path ? "#562400" : "none"}
            display="Flex"
            justifyContent="center"
            alignItems="center"
            zIndex="3"
          >
            <Image
              src={route.imgSrc}
              alt={`${route.name} Icon`}
              height="fit-content"
              width="fit-content"
              zIndex="3"
            />
          </ChakraLink>
        ))}
      </Flex>
    </Box>
  );
};
export default React.memo(Navbar);
