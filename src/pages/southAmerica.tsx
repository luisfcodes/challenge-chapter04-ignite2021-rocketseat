import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { WarningIcon } from '@chakra-ui/icons'
import Head from "next/head";

export default function SouthAmerica() {
  return (
    <>
      <Head>
        <title>Worldtrip | South America</title>
      </Head>
      <main>
        <Image src="southAmerica/bannerSouthAmerica.jpg" maxH={'500'} w={'100%'} objectFit={'cover'} minW={{ base: '100vw', lg: 'auto' }}/>
        <VStack spacing={{ base: '8', lg: '20' }} mt={{ base: '8', lg: '20' }} fontFamily={'Poppins'}>
          <Box display={'flex'} justifyContent={'space-between'} flexDirection={{ base: 'column', lg: 'row' }}>
            <Text w={{ base: '100%', lg: '50%' }} p={{ base: '0 1rem', lg: '0' }} fontSize={{ base: 'sm', lg: '2rem' }} textAlign={'justify'}>
            Atravessado pela Linha do Equador e pelo Trópico de Capricórnio, o continente possui a segunda maior cordilheira do mundo na Região Andina que se estende desde a Venezuela até o Chile e a Argentina.
            </Text>
            <Box display={'flex'} w={{ base: '100%', lg: '50%' }} justifyContent={'space-between'} alignItems={'center'} p={{ base: '0 1rem', lg: '0 5rem' }}>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  12
                </Text>
                <Text fontSize={{ base: 'lg', lg: '2rem' }} color={'#47585B'} fontWeight={'semibold'}>
                  países
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  456
                </Text>
                <Text fontSize={{ base: 'lg', lg: '2rem' }} color={'#47585B'} fontWeight={'semibold'}>
                  línguas
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  36
                </Text>
                <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                  <Text fontSize={{ base: 'lg', lg: '2rem' }} color={'#47585B'} fontWeight={'semibold'}>
                    cidades + 100
                  </Text>
                  <WarningIcon color={'#999999'} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box w={'full'} display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <Heading as={'h2'} fontFamily={'Poppins, sans-serif'} fontSize={{ base: '2rem', lg: '2.25rem' }} fontWeight={'medium'} color={'#47585B'} p={{ base: '0 1rem', lg: '0' }}>Cidades +100</Heading>

            <Box display={'flex'} alignItems={'center'} gap={'2rem'} flexWrap={'wrap'} flexDirection={{ base: 'column', lg: 'row' }} >
              <Box w={'fit-content'}>
                <Image src="southAmerica/saoPaulo.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>São Paulo</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Brasil</Text>
                  </Box>
                  <Image src="southAmerica/brazil.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="southAmerica/lima.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Lima</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Peru</Text>
                  </Box>
                  <Image src="southAmerica/peru.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="southAmerica/bogota.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Bogotá</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Colômbia</Text>
                  </Box>
                  <Image src="southAmerica/colombia.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="southAmerica/santiago.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Santiago</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Chile</Text>
                  </Box>
                  <Image src="southAmerica/chile.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="southAmerica/caracas.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Caracas</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Venezuela</Text>
                  </Box>
                  <Image src="southAmerica/venezuela.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

            </Box>
          </Box>
        </VStack>
      </main>
    </>
  )
}