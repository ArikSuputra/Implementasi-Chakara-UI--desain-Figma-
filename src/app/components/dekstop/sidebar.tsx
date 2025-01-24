// 'use client';

// import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
// import NextLink from "next/link";
// import { usePathname } from 'next/navigation';

// const Sidebar = () => {
//     const pathname = usePathname(); // Get the current pathname

//     return (
//         <Flex
//             direction="column"
//             justifyContent="space-between"
//             width="350px"
//             height="100vh"
//             position="fixed"
//             color="white"
//             p={4}
//             backgroundImage="url('/images/Image(bg).png')"
//             backgroundSize="cover"
//             backgroundPosition="center"
//             filter="saturate(65%) brightness(90%) blur(60%)"
//         >
//             <Box>
//                 <Center mb={10} pt={20}>
//                     <Text color="brown" fontSize="2xl" fontWeight="bold">Kapi Nala</Text>
//                 </Center>

//                 <Center mb={10}>
//                     <NextLink href="/" passHref legacyBehavior>
//                         <Link
//                             color={pathname === "/" ? "brown" : "gray"} // Home page
//                             fontSize="lg"
//                             fontWeight="medium"
//                         >
//                             Home
//                         </Link>
//                     </NextLink>
//                 </Center>

//                 <Center mb={10}>
//                     <NextLink href="/work" passHref legacyBehavior>
//                         <Link
//                             color={pathname === "/work" || pathname.startsWith("/work/extend") ? "brown" : "gray"}
//                             fontSize="lg"
//                             fontWeight="medium"
//                         >
//                             Work
//                         </Link>
//                     </NextLink>
//                 </Center>

//                 <Center mb={10}>
//                     <NextLink href="/VR" passHref legacyBehavior>
//                         <Link
//                             color={pathname === "/VR" ? "brown" : "gray"}
//                             fontSize="lg"
//                             fontWeight="medium"
//                         >
//                             VR
//                         </Link>
//                     </NextLink>
//                 </Center>

//                 <Center mb={10}>
//                     <NextLink href="/about" passHref legacyBehavior>
//                         <Link
//                             color={pathname === "/about" ? "brown" : "gray"}
//                             fontSize="lg"
//                             fontWeight="medium"
//                         >
//                             About
//                         </Link>
//                     </NextLink>
//                 </Center>

//                 <Center mb={10}>
//                     <NextLink href="/contact" passHref legacyBehavior>
//                         <Link
//                             color={pathname === "/contact" ? "brown" : "gray"}
//                             fontSize="lg"
//                             fontWeight="medium"
//                         >
//                             Contact
//                         </Link>
//                     </NextLink>
//                 </Center>
//             </Box>

//             {/* Sidebar Footer */}
//             <Box mt="auto" pt={4} borderTop="1px solid gray">
//                 <Text fontSize="sm" textAlign="center" color={"black"}>
//                     &copy; {new Date().getFullYear()} My Website. All rights reserved.
//                 </Text>
//                 <Text fontSize="sm" textAlign="center" color={"black"}>Design By Kotak</Text>
//                 <Text fontSize="sm" textAlign="center" color={"black"}>www.devkoma.com</Text>
//             </Box>
//         </Flex>
//     );
// };

// export default Sidebar;

"use client";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { DM_Serif_Display, Quicksand } from "@next/font/google";
import React from "react";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

const Sidebar = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      width="350px" // 100% on mobile, 60% on tablet, 350px on desktop
      // maxW="350px" // Max width on large screens
      height="100vh"
      position="fixed"
      color="white"
      p={4} // Responsive padding
      backgroundImage="url('/images/Image(bg).png')"
      backgroundSize="cover"
      backgroundPosition="center"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: -38,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(225, 213, 206, 0.70)", // Increase opacity here
        zIndex: -1, // Layer below text but above image
      }}
      zIndex={1}
    >
      <Box>
        <Center mb={10} pt={20}>
          {" "}
          {/* Responsive top padding */}
          <Text
            color="#562400"
            zIndex={1}
            fontSize="56px"
            fontFamily={dmSerifDisplay.style.fontFamily}
          >
            Kapi Nala
          </Text>
        </Center>
        {/* Menu Items */}
        <Box>
          {[
            { label: "Home", path: "/" },
            { label: "Work", path: "/work" },
            { label: "VR", path: "/VR" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Flex
              key={item.path}
              mb={8}
              paddingLeft="50px"
              justify="left" // Center the group horizontally // Center the group vertically
            >
              <NextLink href={item.path} passHref legacyBehavior>
                <Link
                  color={
                    pathname === item.path ||
                    (item.path.startsWith("/work") &&
                      pathname.startsWith("/work"))
                      ? "#562400"
                      : "gray"
                  }
                  fontSize={"40px"} // Responsive font size
                  fontWeight="medium"
                  fontFamily={dmSerifDisplay.style.fontFamily}
                  zIndex={1}
                  textAlign="left" // Align the text to the left
                >
                  {item.label}
                </Link>
              </NextLink>
            </Flex>
          ))}
        </Box>
      </Box>

      {/* Sidebar Footer */}
      <Box mt="auto" pt={4} zIndex={1}>
        <Text
          fontSize="24px"
          textAlign="left"
          color="black"
          fontFamily={quicksand.style.fontFamily}
        >
          Copy Rights &copy; {new Date().getFullYear()}.
        </Text>
        <Text
          fontSize="sm"
          textAlign="left"
          color="black"
          fontFamily={quicksand.style.fontFamily}
        >
          Design By Kotak
        </Text>
        <Text
          fontSize="sm"
          textAlign="left"
          color="black"
          fontFamily={quicksand.style.fontFamily}
        >
          www.devkoma.com
        </Text>
      </Box>
    </Flex>
  );
};

export default React.memo(Sidebar);
