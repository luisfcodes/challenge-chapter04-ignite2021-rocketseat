import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header(){
    return (
        <Box as="header" h={'100px'} w={'100%'} display={'flex'} alignItems={'center'}>
            <Link href={'/'}>
                <Image src="logo.svg" alt="Logo" margin={'0 auto'} h={'45'} cursor={'pointer'}/>
            </Link>
        </Box>
    )
}