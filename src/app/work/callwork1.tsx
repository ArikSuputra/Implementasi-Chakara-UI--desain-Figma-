// // // src/components/CallWork.tsx
// // "use client";
// // import { Flex, useBreakpointValue } from "@chakra-ui/react";
// // import Image from "next/image";
// // import { useGalleryImages } from "../components/gallery";

// // function splitArray(inputArray: string[], columnSize: number): string[][] {
// // 	const chunkSize = Math.ceil(inputArray.length / columnSize);
// // 	const result: string[][] = [];

// // 	for (let i = 0; i < inputArray.length; i += chunkSize) {
// // 		result.push(inputArray.slice(i, i + chunkSize));
// // 	}

// // 	return result;
// // }

// // export default function CallWork() {
// // 	// Using the hook to fetch images from the 'gallery' directory
// // 	const filenames = useGalleryImages("gallery");

// // 	const columnSize = useBreakpointValue({
// // 		base: 1,
// // 		md: 2,
// // 		lg: 3,
// // 	}) || 1;

// // 	const imageList = splitArray(filenames, columnSize);

// // 	return (
// // 		<Flex direction="row">
// // 			{imageList.map((column, colIndex) => (
// // 				<Flex direction="column" w="100%" key={colIndex}>
// // 					{column.map((filename, idx) => (
// // 						<Image
// // 							src={`/images/gallery/${filename}`} // Constructing image path dynamically
// // 							key={filename}
// // 							alt={`Gallery Image ${idx + 1}`}
// // 							style={{ width: "100%", height: "fit-content", padding: "12px" }}
// // 							height={1400}
// // 							width={1400}
// // 						/>
// // 					))}
// // 				</Flex>
// // 			))}
// // 		</Flex>
// // 	);
// // }

// "use client";
// import { Flex, useBreakpointValue, Box, Text } from "@chakra-ui/react";
// import Image from "next/image";
// import { useGalleryImages } from "../components/gallery";
// import { DM_Serif_Display } from '@next/font/google';

// const dmSerifDisplay = DM_Serif_Display({
//   weight: '400', 
//   subsets: ['latin'],
// });

// function splitArray(inputArray: string[], columnSize: number): string[][] {
//   const chunkSize = Math.ceil(inputArray.length / columnSize);
//   const result: string[][] = [];

//   for (let i = 0; i < inputArray.length; i += chunkSize) {
//     result.push(inputArray.slice(i, i + chunkSize));
//   }

//   return result;
// }

// export default function CallWork() {
//   const filenames = useGalleryImages("gallery"); // Hardcoded to fetch from 'gallery'

//   const columnSize = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
//   const imageList = splitArray(filenames, columnSize);

//   return (
//     <Flex direction="row" gap={4}>
//       {imageList.map((column, colIndex) => (
//         <Flex direction="column" w="100%" key={colIndex} gap={4}>
//           {column.map((filename, idx) => (
//             <Box key={filename} position="relative">

//               {/* Image */}
//               <Image
//                 src={`/images/gallery/${filename}`}
//                 alt={`Gallery Image ${idx + 1}`}
//                 style={{ width: "100%", height: "auto", borderRadius: "8px" }}
//                 height={1400}
//                 width={1400}
//               />

//               {/* Label */}
//               <Box
//                 position="absolute"
//                 top="10px"
//                 left="10px"
//                 bg="rgba(255, 255, 255, 0.8)"
//                 p="3px 8px"
//                 borderRadius="5px"
//               >
//                 <Text fontSize="sm" color="#562400" fontFamily={dmSerifDisplay.style.fontFamily}>
//                   Lorem ipsum
//                 </Text>
//               </Box>
//             </Box>
//           ))}
//         </Flex>
//       ))}
//     </Flex>
//   );
// }

'use client';
import { Flex, useBreakpointValue, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { useGalleryImages } from "../components/gallery";

function splitArray(inputArray: string[], columnSize: number): string[][] {
  const chunkSize = Math.ceil(inputArray.length / columnSize);
  const result: string[][] = [];

  for (let i = 0; i < inputArray.length; i += chunkSize) {
    result.push(inputArray.slice(i, i + chunkSize));
  }

  return result;
}

export default function CallWork() {
  const filenames = useGalleryImages("gallery"); // Fetch images from the 'gallery' directory
  const columnSize = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1; // Breakpoints for responsive design
  const imageList = splitArray(filenames, columnSize); // Split images into columns based on screen size

  return (
    <Flex direction="row" gap="25px" p="25px">
      {imageList.map((column, colIndex) => (
        <Flex direction="column" w="100%" key={colIndex} gap="25px">
          {column.map((filename, idx) => (
            <Box key={filename} position="relative">
              {/* Link to ExtendPage with filename in query */}
              <Link href={`/work/extend?image=${filename}`}>
                <Image
                  src={`/images/gallery/${filename}`}
                  alt={`Gallery Image ${idx + 1}`}
                  style={{ width: "100%", height: "auto"}}
                  height={1400}
                  width={1400}
                />
              </Link>

              {/* Image Label */}
              <Box
                position="absolute"
                top="10px"
                left="10px"
                bgColor="white"
                p="3px 8px"
              >
                <Text fontSize="sm" color="#562400">
                 Lorem ipsum
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
