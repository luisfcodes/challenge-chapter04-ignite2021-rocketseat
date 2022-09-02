import { Box, Image } from "@chakra-ui/react";

export function Header(){
    return (
        <Box as="header" h={'100px'} w={'100%'} display={'flex'} alignItems={'center'}>
            <Image src="logo.svg" alt="Logo" margin={'0 auto'} h={'45'}/>
        </Box>
    )
}