import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { WarningIcon } from '@chakra-ui/icons'
import Head from "next/head";

export default function () {
  return (
    <>
      <Head>
        <title>Worldtrip | North America</title>
      </Head>
      <main>
        <Image src="northAmerica/bannerNorthAmerica.jpg" maxH={'500'} w={'100%'} objectFit={'cover'} minW={{ base: '100vw', lg: 'auto' }}/>
        <VStack spacing={{ base: '8', lg: '20' }} mt={{ base: '8', lg: '20' }} fontFamily={'Poppins'}>
          <Box display={'flex'} justifyContent={'space-between'} flexDirection={{ base: 'column', lg: 'row' }}>
            <Text w={{ base: '100%', lg: '50%' }} p={{ base: '0 1rem', lg: '0' }} fontSize={{ base: 'sm', lg: '2rem' }} textAlign={'justify'}>
            A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: Estados Unidos, Canadá e México, além de territórios de domínios europeus, como a Groelândia (pertencente ao Reino da Dinamarca, com representação no parlamento) e Bermudas (dependência britânica).
            </Text>
            <Box display={'flex'} w={{ base: '100%', lg: '50%' }} justifyContent={'space-between'} alignItems={'center'} p={{ base: '0 1rem', lg: '0 5rem' }}>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  03
                </Text>
                <Text fontSize={{ base: 'lg', lg: '2rem' }} color={'#47585B'} fontWeight={'semibold'}>
                  países
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  10
                </Text>
                <Text fontSize={{ base: 'lg', lg: '2rem' }} color={'#47585B'} fontWeight={'semibold'}>
                  línguas
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  28
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
                <Image src="northAmerica/newYork.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'}/>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Nova York</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Estados Unidos</Text>
                  </Box>
                  <Image src="northAmerica/eua.png" w={'30px'} h={'30px'}/>
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="northAmerica/toronto.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'}/>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Toronto</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Canadá</Text>
                  </Box>
                  <Image src="northAmerica/canada.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="northAmerica/mexicoCity.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'}/>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Cidade do México</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>México</Text>
                  </Box>
                  <Image src="northAmerica/mexico.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="northAmerica/losAngeles.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Los Angeles</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Estados Unidos</Text>
                  </Box>
                  <Image src="northAmerica/eua.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="northAmerica/montreal.jpg" maxW={'256'} maxH={'173'} borderRadius={'4px 4px 0 0'} />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Montreal</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Canadá</Text>
                  </Box>
                  <Image src="northAmerica/canada.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

            </Box>
          </Box>
        </VStack>
      </main>
    </>
  )
}