import { Box, Center, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Navigation, Pagination, A11y } from 'swiper';
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
            <Box maxW={'1240px'} margin={'0 auto'} minH={'450px'}>
              <Swiper modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{ clickable: true }} >

                <SwiperSlide>
                  <Box position={'relative'} h={'450px'} minW={'1240px'}>
                    <Box position={'absolute'}>
                      <Image src="europe.png" />
                    </Box>
                    <Box position={'absolute'} zIndex={'1'} minHeight={'450px'} w={'100%'} color={'#DADADA'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                      <Heading as={'h2'} fontSize={'5xl'}>Europa</Heading>
                      <Text fontSize={'2rem'} fontWeight={'bold'}>O continente mais antigo.</Text>
                    </Box>
                  </Box>
                </SwiperSlide>

                <SwiperSlide>
                  <Box position={'absolute'}>
                    <Image src="northAmerica.jpg" />
                  </Box>
                  <Box position={'absolute'} zIndex={'1'} minHeight={'450px'} w={'100%'} color={'#DADADA'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Heading as={'h2'} fontSize={'5xl'}>América do Norte</Heading>
                    <Text fontSize={'2rem'} fontWeight={'bold'}>Berço das potencias mundiais.</Text>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box position={'absolute'}>
                    <Image src="southAmerica.jpg" />
                  </Box>
                  <Box position={'absolute'} zIndex={'1'} minHeight={'450px'} w={'100%'} color={'#DADADA'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Heading as={'h2'} fontSize={'5xl'}>América do Sul</Heading>
                    <Text fontSize={'2rem'} fontWeight={'bold'}>Possui a maior floresta tropical do mundo.</Text>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box position={'absolute'}>
                    <Image src="asia.jpg" />
                  </Box>
                  <Box position={'absolute'} zIndex={'1'} minHeight={'450px'} w={'100%'} color={'#DADADA'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Heading as={'h2'} fontSize={'5xl'}>Ásia</Heading>
                    <Text fontSize={'2rem'} fontWeight={'bold'}>Maior continente de todos.</Text>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box position={'absolute'}>
                    <Image src="africa.jpg" />
                  </Box>
                  <Box position={'absolute'} zIndex={'1'} minHeight={'450px'} w={'100%'} color={'#DADADA'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Heading as={'h2'} fontSize={'5xl'}>África</Heading>
                    <Text fontSize={'2rem'} fontWeight={'bold'}>Detentor do maior deserto do mundo.</Text>
                  </Box>
                </SwiperSlide>

                <SwiperSlide>
                  <Box position={'absolute'}>
                    <Image src="oceania.jpg" />
                  </Box>
                  <Box position={'absolute'} zIndex={'1'} minHeight={'450px'} w={'100%'} color={'#DADADA'} display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Heading as={'h2'} fontSize={'5xl'}>Oceania</Heading>
                    <Text fontSize={'2rem'} fontWeight={'bold'}>Lar dos animais exóticos.</Text>
                  </Box>
                </SwiperSlide>


              </Swiper>
            </Box>
          </Center>
        </Stack>
      </main>
    </>
  )
}

export default Home
