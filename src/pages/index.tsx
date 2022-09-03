import { Box, Center, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <main>
        <Image src='banner.png' />
        <Flex maxW={'1160px'} margin={'5rem auto'} justifyContent={'space-between'}>
          <Image src='nightlife.png' alt='Taça com uma fruta e canudo' />
          <Image src='beach.png' alt='Prancha de surf com um sol de fundo' />
          <Image src='modern.png' alt='Prédio moderno' />
          <Image src='classic.png' alt='Museu clássico' />
          <Image src='more.png' alt='Planeta Terra' />
        </Flex>
        <Stack spacing={'52px'}>
          <Center bg={'#47585B'} w={'90px'} margin={'0 auto'} height={'2px'}>
            <Divider />
          </Center>
          <Box fontFamily={'Poppins'} fontWeight={'medium'} fontSize={'4xl'} color={'#47585B'}>
            <Text textAlign={'center'}>Vamos nessa?</Text>
            <Text textAlign={'center'}>Então escolha seu continente</Text>
          </Box>

          {/* <Image src='europe.png' alt='Banner da Europa' />  */}

          <Center position={'relative'}>
            <Box maxW={'1240px'} margin={'0 auto'}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <Box position={'absolute'}>
                    <Image src="europe.png" />
                  </Box>
                  <Box position={'absolute'} zIndex={'1'} minHeight={'450px'} w={'100%'} color={'#DADADA'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Heading as={'h2'} fontSize={'5xl'}>Europa</Heading>
                    <Text fontSize={'2rem'}>O continente mais antigo.</Text>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="europe.png" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
            </Box>
          </Center>


        </Stack>
      </main>
    </>
  )
}

export default Home
