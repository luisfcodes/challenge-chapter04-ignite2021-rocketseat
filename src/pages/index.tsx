import { Box, Center, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './swiper.module.css'

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

          <Center>
            <Box maxW={'1240px'} margin={'0 auto'}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide className={styles.swiper_slide}>
                  <Image src="europe.png" zIndex={-1}/>
                  <h2>ssssssssssss</h2>
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
