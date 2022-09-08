import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { WarningIcon } from '@chakra-ui/icons'
import Head from "next/head";

export default function () {
  return (
    <>
      <Head>
        <title>Worldtrip | África</title>
      </Head>
      <main>
        <Image src="africa/bannerAfrica.jpg" maxH={'500'} w={'100%'} objectFit={'cover'} minW={{ base: '100vw', lg: 'auto' }}/>
        <VStack spacing={{ base: '8', lg: '20' }} mt={{ base: '8', lg: '20' }} fontFamily={'Poppins'}>
          <Box display={'flex'} justifyContent={'space-between'} flexDirection={{ base: 'column', lg: 'row' }}>
            <Text w={{ base: '100%', lg: '50%' }} p={{ base: '0 1rem', lg: '0' }} fontSize={{ base: 'sm', lg: '2rem' }} textAlign={'justify'}>
            África é um dos seis continentes do mundo, sendo o terceiro maior em extensão territorial. O território estende-se por mais de 30 milhões de km², ocupando, aproximadamente, 20% da área continental da Terra.
            </Text>
            <Box display={'flex'} w={{ base: '100%', lg: '50%' }} justifyContent={'space-between'} alignItems={'center'} p={{ base: '0 1rem', lg: '0 5rem' }}>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  54
                </Text>
                <Text fontSize={{ base: 'lg', lg: '2rem' }} color={'#47585B'} fontWeight={'semibold'}>
                  países
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  2000
                </Text>
                <Text fontSize={{ base: 'lg', lg: '2rem' }} color={'#47585B'} fontWeight={'semibold'}>
                  línguas
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  50
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
                <Image src="africa/lagos.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Lagos</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Nigéria</Text>
                  </Box>
                  <Image src="africa/nigeria.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="africa/cairo.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Cairo</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Egito</Text>
                  </Box>
                  <Image src="africa/egito.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="africa/nairobi.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Nairóbi</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Quénia</Text>
                  </Box>
                  <Image src="africa/quenia.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="africa/adisAbaba.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Adis Ababa</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Etiópia</Text>
                  </Box>
                  <Image src="africa/etiopia.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="africa/casablanca.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Casablanca</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Marrocos</Text>
                  </Box>
                  <Image src="africa/marrocos.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

            </Box>
          </Box>
        </VStack>
      </main>
    </>
  )
}