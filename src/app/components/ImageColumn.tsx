// // src/components/ImageColumn.tsx
// import Image from "next/image";
// import { Box, Flex, Text } from "@chakra-ui/react";
// import Link from "next/link";

// interface ImageColumnProps {
//   column: string[];
//   columnIndex: number;
// }

// const ImageColumn = ({ column, columnIndex }: ImageColumnProps) => {
//   return (
//     <Flex
//       direction="column"
//       flex="1"
//       marginLeft={[0, columnIndex !== 0 ? "8px" : "0"]}
//       gap="10px"
//       minW="300px"
//     >
//       {column.map((filename) => (
//         <Box
//           key={filename}
//           position="relative"
//           borderRadius="5px"
//           overflow="hidden"
//           boxShadow="lg"
//           as={Link}
//           href={`/work/extend?image=${filename}`}
//           width={["100%", "100%", "auto"]}
//           minW="300px"
//         >
//           <Image
//             src={`/images/gallery/${filename}`}
//             alt={filename}
//             width={1200}
//             height={1100}
//             objectFit="cover"
//             style={{ borderRadius: "5px" }}
//           />
//           <Box
//             position="absolute"
//             top="10px"
//             left="10px"
//             bg="rgba(245, 245, 245, 1)"
//             color="black"
//             p="4px 10px"
//             borderRadius="5px"
//             boxShadow="sm"
//           >
//             <Text fontSize="sm">Lorem Ipsum</Text>
//           </Box>
//         </Box>
//       ))}
//     </Flex>
//   );
// };

// export default ImageColumn;

import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ImageColumnProps {
  column: string[];
  columnIndex: number;
}

const ImageColumn = ({ column, columnIndex }: ImageColumnProps) => {
  return (
    <Flex
      direction="column"
      flex="1"
      marginLeft={[0, columnIndex !== 0 ? "8px" : "0"]}
      gap="10px"
      minW={["100%", "400px"]} // Responsif: minW akan 100% di layar kecil, 300px di layar lebih besar
    >
      {column.map((filename) => (
        <Box
          key={filename}
          position="relative"
          borderRadius="5px"
          overflow="hidden"
          boxShadow="lg"
          as={Link}
          href={`/work/extend?image=${filename}`}
          width={[ "auto" ]}  // Responsif: 100% untuk layar kecil dan menengah
          minW={["100%" , "400px" ]}  // Responsif: 100% di mobile, 300px di layar lebih besar
        >
          <Image
            src={`/images/gallery/${filename}`}
            alt={filename}
            width={1200}
            height={1100}
            style={{ objectFit: "cover", borderRadius: "5px" }}
          />
          <Box
            position="absolute"
            top="10px"
            left="10px"
            bg="rgba(245, 245, 245, 1)"
            color="black"
            p="4px 10px"
            borderRadius="5px"
            boxShadow="sm"
          >
            <Text fontSize={["xs", "sm"]}>Lorem Ipsum</Text> {/* Ukuran font responsif */}
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default ImageColumn;

// const mage = ({ column, columnIndex }: ImageColumnProps) => {
//   return(
//     <>
//     </>
//   );
// };
