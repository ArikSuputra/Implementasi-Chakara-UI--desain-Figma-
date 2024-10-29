import { Box, Flex , Text} from "@chakra-ui/react";
import  Link  from "next/link";
import  Image  from "next/image";

type MobileContentProp = {
    filenames : string[];
}

const MobileContent = ({filenames}: MobileContentProp) => {
    console.log(filenames)
    return(
    <Flex direction="column" gap="10px" width="100%">
        {filenames.map((filenames)=> (
            <Box
            key={filenames}
            position="relative"
            borderRadius="5px"
            overflow="hidden"
            boxShadow="lg"
            as={Link}
            href={`/work/extend?image=${filenames}`}
            width="100%">

                <Image
                src={`/images/gallery/${filenames}`}
                alt={filenames}
                width={1200}
                height={1100}
                />
                <Box position="absolute"
                top="10px"
                left="10px"
                bg="rgba(245,24,245,1)"
                color="black"
                p="4px 10px"
                borderRadius="5px"
                boxShadow="sm"
                >
                    <Text fontSize="sm">Lorem ipsun</Text>
                </Box>
            </Box>
        ))}

    </Flex>

    );
};

export default MobileContent;