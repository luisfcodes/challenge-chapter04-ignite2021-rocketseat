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
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.screen.width <= 375) setIsMobile(true)
  }, [])

  return (
    <>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <main>
        {isMobile ? (<Image src='bannerMobile.png' margin={'0 auto'}/>) : (<Image src='bannerDesktop.png' />)}
        <Flex maxW={{ base: '375px', lg: '1160px'}} flexWrap={'wrap'} gap={{base: '1rem', lg: '0'}} p={{base: '0 1rem', lg: '0'}} margin={{base: '2.25rem auto', lg: '5rem auto'}} justifyContent={'space-between'} >
          <Image src='nightlife.png' alt='Taça com uma fruta e canudo'/>
          <Image src='beach.png' alt='Prancha de surf com um sol de fundo' />
          <Image src='modern.png' alt='Prédio moderno' />
          <Image src='classic.png' alt='Museu clássico' />
          <Image src='more.png' alt='Planeta Terra' />
        </Flex>
        <Stack spacing={{ base: '36px', lg: '52px'}}>
          <Center bg={'#47585B'} w={{ base: '60px', lg: '90px' }} margin={'0 auto'} height={'2px'}>
            <Divider />
          </Center>
          <Box fontFamily={'Poppins'} fontWeight={'medium'} fontSize={{ base: 'xl', lg: '4xl' }} color={'#47585B'}>
            <Text textAlign={'center'}>Vamos nessa?</Text>
            <Text textAlign={'center'}>Então escolha seu continente</Text>
          </Box>
          
          <Center position={'relative'}>
            <Box maxW={{ base: '375px', lg: '1240px'}} minH={{ base: '250px', lg: '450px'}} margin={'0 auto'}>
              <Swiper modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{ clickable: true }}>

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
