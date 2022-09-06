import { Box, Center, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Slide } from '../components/Slide';

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

          <Center position={'relative'}>
            <Box maxW={'1240px'} margin={'0 auto'} minH={'450px'}>
              <Swiper modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{ clickable: true }} >

                <SwiperSlide>
                  <Slide key="Europe" src='europe.png' href='/europe' title='Europa' description='O continente mais antigo.' />
                </SwiperSlide>
                <SwiperSlide>
                  <Slide key="northAmerica" src='northAmerica.jpg' href='/northAmerica' title='América do Norte' description='Berço das potencias mundiais.' />
                </SwiperSlide>
                <SwiperSlide>
                  <Slide key="southAmerica" src='southAmerica.jpg' href='/southAmerica' title='América do Sul' description='Possui a maior floresta tropical do mundo.' />
                </SwiperSlide>
                <SwiperSlide>
                  <Slide key="asia" src='asia.jpg' href='/asia' title='Ásia' description='Maior continente de todos.' />
                </SwiperSlide>
                <SwiperSlide>
                  <Slide key="africa" src='africa.jpg' href='/africa' title='África' description='Detentor do maior deserto do mundo.' />
                </SwiperSlide>
                <SwiperSlide>
                  <Slide key="oceania" src='oceania.jpg' href='/oceania' title='Oceania' description='Lar dos animais exóticos.' />
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
