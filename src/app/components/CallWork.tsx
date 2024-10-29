'use client'
import { Box, Flex , useMediaQuery } from "@chakra-ui/react";
import DekstopContent from './dekstop/WorkD';
import MobileContent from './mobile/WorkM';
import { useEffect, useState } from "react";

const Call = ({filenames,columns}  : {filenames : string[] , columns: string[][] }) =>{
    const [isMobile,setmobile] = useState(false);
    useEffect (() =>{
        const checkMobile = () => {
            setmobile(window.innerWidth <= 786);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize',checkMobile);
    },[]);
    const [IsLargerThen] = useMediaQuery("(max-width : 920px)");
    const columnIndex = IsLargerThen ? 3 : 2;
return(
    <Box>
    {isMobile ? (<MobileContent filenames={filenames} />) : (
        <Flex
        flex="1"
        p={5}
        maxW="auto"
        mx="auto"
        position="relative"
        zIndex="2"
        direction={['column', 'row']}
        gap="10px"
        justify="center"
        wrap="wrap"
    >
        {columns.map((column, index) => (
        <DekstopContent key={index} column={column} columnIndex={columnIndex} />
        ))}
    </Flex>
        )}
    </Box>
    );
};

export default Call;