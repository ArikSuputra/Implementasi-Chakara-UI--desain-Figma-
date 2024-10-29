import { Box, Flex , Image , Link as ChakraLink } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar =  () => {

const currentPath = usePathname();
const routes = [
  { name:"Home" , path: '/',        imgSrc: "/images/Home.png" },
  { name:"Work" , path: '/work',    imgSrc: "/images/work.png" },
  { name:"VR" , path: '/VR',      imgSrc: "/images/VR.png" },
  { name:"About" , path: '/about',   imgSrc: "/images/working.png" },
  { name:"Contact" , path: '/contact', imgSrc: "/images/contac.png" }
];
return (
<Box as="nav" 
    backgroundImage="url('/images/Image(bg).png')" 
    backgroundSize="cover" 
    backgroundPosition="center" 
    filter="saturate(65%) brightness(90%) blur(60%)" 
    p={4}
    mt={8}
    position="fixed"
    bottom="0"
    left="0"
    width="100%"
    zIndex="3">
      <Flex mt={{ base: 4, md: 0 }} gap={4}>
        {routes.map((route) =>(
            <ChakraLink 
            href={route.path} 
            key={route.name}
            width="100%"
            padding="12px"
            bg={currentPath === route.path ? "brown" : "none"}
            display="Flex"
            justifyContent="center"
            alignItems="center"
            >
             <Image
             src = {route.imgSrc}
             alt = {`${route.name} Icon`}
             height={30}
             width={30}
             />
             </ChakraLink>
        ))} 
      </Flex>
    </Box>
    );
};
export default React.memo(Navbar);