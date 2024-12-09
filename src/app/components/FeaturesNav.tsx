// "use client";     (if want to make a loading screenn before rendering the website)
// import { Box, useBreakpointValue } from "@chakra-ui/react";
// import Sidebar from "./dekstop/sidebar";
// import Navbar from "./mobile/navbar";
// import { useState, useEffect } from "react";

// const FNar = () => {
//   const [hydrated, setHydrated] = useState(false);
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   useEffect(() => {
//     setHydrated(true);
//   }, []);

//   if (!hydrated) return null; // Wait until hydration is complete

//   return (
//     <Box>
//       {isMobile ? (
//         <Navbar />
//       ) : (
//         <Box width="350px">
//           <Sidebar />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default FNar;



// 'use client'
// import { Box } from "@chakra-ui/react";
// import Sidebar from './dekstop/sidebar';
// import Navbar from './mobile/navbar';
// import { useEffect, useState } from "react";

// const FNar = () =>{
//     const [isMobile,setmobile] = useState(false);
//     useEffect (() =>{
//         const checkMobile = () => {
//             setmobile(window.innerWidth <= 786);
//         };
//         checkMobile();
//         window.addEventListener('resize', checkMobile);
//         return () => window.removeEventListener('resize',checkMobile);
//     },[]);
// return(
//     <Box>
//     {isMobile ? (<Navbar/>) : (
//         <Box width="350px">
//         <Sidebar />
//         </Box>)}
//     </Box>
//     );
// };

// export default FNar;

'use client';
import { Box } from "@chakra-ui/react";
import Sidebar from './dekstop/sidebar';
import Navbar from './mobile/navbar';

const FNar = () => {
  return (
    <Box>
      {/* Navbar for small screens (base and md) */}
      <Box display={{ base: "flex", lg: "none" }}>
        <Navbar />
      </Box>

      {/* Sidebar for large screens (lg and above) */}
      <Box display={{ base: "none", lg: "flex" }} width="350px">
        <Sidebar />
      </Box>
    </Box>
  );
};

export default FNar;