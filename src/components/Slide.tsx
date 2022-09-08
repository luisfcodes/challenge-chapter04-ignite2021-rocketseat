import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideProps {
  src: string;
  href: string;
  title: string;
  description: string
}

export function Slide({ src, description, href, title }: SlideProps) {
  return (
      <Box position={'relative'} h={'450px'} minW={'1240px'}>
        <Box position={'absolute'}>
          <Image src={src} w={'100%'} />
        </Box>
        <Box position={'absolute'} zIndex={'1'} minHeight={'450px'} w={'100%'} color={'#DADADA'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
          <Link href={href}>
            <Heading as={'h2'} fontSize={'5xl'} transition={'0.2s'} _hover={{ color: '#FFBA08', cursor: 'pointer' }}>{title}</Heading>
          </Link>
          <Text fontSize={'2rem'} fontWeight={'bold'}>{description}</Text>
        </Box>
      </Box>
  )
}