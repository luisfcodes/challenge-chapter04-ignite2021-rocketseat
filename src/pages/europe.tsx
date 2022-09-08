import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { WarningIcon } from '@chakra-ui/icons'
import Head from "next/head";

export default function Europe() {
  return (
    <>
      <Head>
        <title>Worldtrip | Europe</title>
      </Head>
      <main>
        <Image src="europe/bannerEurope.png" minW={{ base: '100vw', lg: 'auto' }}/>
        <VStack spacing={{ base: '8', lg: '20' }} mt={{ base: '8', lg: '20' }} fontFamily={'Poppins'}>
          <Box display={'flex'} justifyContent={'space-between'} flexDirection={{ base: 'column', lg: 'row' }}>
            <Text w={{ base: '100%', lg: '50%' }} p={{ base: '0 1rem', lg: '0' }} fontSize={{ base: 'sm', lg: '2rem' }} textAlign={'justify'}>
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
            </Text>
            <Box display={'flex'} w={{ base: '100%', lg: '50%' }} justifyContent={'space-between'} alignItems={'center'} p={{ base: '0 1rem', lg: '0 5rem' }}>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  50
                </Text>
                <Text fontSize={{ base: 'lg', lg: '2rem' }} color={'#47585B'} fontWeight={'semibold'}>
                  países
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  60
                </Text>
                <Text fontSize={{ base: 'lg', lg: '2rem' }} color={'#47585B'} fontWeight={'semibold'}>
                  línguas
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={{ base: '2rem', lg: '3rem' }} color={'#FFBA08'} fontWeight={'semibold'} alignSelf={{ base: 'flex-start', lg: 'center' }}>
                  27
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
                <Image src="europe/londres.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Londres</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Reino Unido</Text>
                  </Box>
                  <Image src="europe/unitedKingdom.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="europe/paris.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Paris</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>França</Text>
                  </Box>
                  <Image src="europe/france.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="europe/rome.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Roma</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Itália</Text>
                  </Box>
                  <Image src="europe/italy.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="europe/prague.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Praga</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>República Tcheca</Text>
                  </Box>
                  <Image src="europe/czechRepublic.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="europe/amsterdam.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Amsterdã</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Holanda</Text>
                  </Box>
                  <Image src="europe/holland.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

            </Box>
          </Box>
        </VStack>
      </main>
    </>

  )
}