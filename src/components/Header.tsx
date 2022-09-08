import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header(){
    return (
        <Box as="header" h={{ base: '50px', lg: '100px' }} w={'100%'} display={'flex'} alignItems={'center'}>
            <Link href={'/'}>
                <Image src="logo.svg" alt="Logo" margin={'0 auto'} h={{ base: '20px', lg: '45px' }} cursor={'pointer'}/>
            </Link>
        </Box>
    )
}