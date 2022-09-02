import { Box, Center, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main>
      <Image src='banner.png'/>
      <Flex maxW={'1160px'} margin={'5rem auto'} justifyContent={'space-between'}>
        <Image src='nightlife.png' alt='Taça com uma fruta e canudo'/>
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
        <Center>
          <Image src='europe.png' alt='Banner da Europa'/>
        </Center>
      </Stack>
    </main>
  )
}

export default Home
