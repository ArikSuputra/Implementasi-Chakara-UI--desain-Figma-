'use client'
import { Box } from "@chakra-ui/react";
import Sidebar from './dekstop/sidebar';
import Navbar from './mobile/navbar';
import { useEffect, useState } from "react";

const FNar = () =>{
    const [isMobile,setmobile] = useState(false);
    useEffect (() =>{
        const checkMobile = () => {
            setmobile(window.innerWidth <= 786);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize',checkMobile);
    },[]);
return(
    <Box>
    {isMobile ? (<Navbar/>) : (
        <Box width="350px">
        <Sidebar />
        </Box>)}
    </Box>
    );
};

export default FNar;