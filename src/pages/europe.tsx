import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { WarningIcon } from '@chakra-ui/icons'
import Head from "next/head";

export default function () {
  return (
    <>
      <Head>
        <title>Worldtrip | Europe</title>
      </Head>
      <main>
        <Image src="bannerEurope.png" />
        <VStack spacing={'20'} mt={'20'} fontFamily={'Poppins'}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Text w={'50%'} fontSize={'2rem'} textAlign={'justify'}>
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
            </Text>
            <Box display={'flex'} w={'50%'} justifyContent={'space-between'} alignItems={'center'} p={'0 5rem'}>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={'3rem'} color={'#FFBA08'} fontWeight={'semibold'}>
                  50
                </Text>
                <Text fontSize={'2rem'} color={'#47585B'} fontWeight={'semibold'}>
                  países
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={'3rem'} color={'#FFBA08'} fontWeight={'semibold'}>
                  60
                </Text>
                <Text fontSize={'2rem'} color={'#47585B'} fontWeight={'semibold'}>
                  línguas
                </Text>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Text fontSize={'3rem'} color={'#FFBA08'} fontWeight={'semibold'}>
                  27
                </Text>
                <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                  <Text fontSize={'2rem'} color={'#47585B'} fontWeight={'semibold'}>
                    cidades + 100
                  </Text>
                  <WarningIcon color={'#999999'} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box w={'full'} display={'flex'} flexDirection={'column'} gap={'2rem'}>
            <Heading as={'h2'} fontFamily={'Poppins, sans-serif'} fontSize={'2.25rem'} fontWeight={'medium'} color={'#47585B'}>Cidades +100</Heading>

            <Box display={'flex'} alignItems={'center'} gap={'2rem'} flexWrap={'wrap'} >
              <Box w={'fit-content'}>
                <Image src="londres.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Londres</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Reino Unido</Text>
                  </Box>
                  <Image src="unitedKingdom.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="paris.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Paris</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>França</Text>
                  </Box>
                  <Image src="france.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="rome.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Roma</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Itália</Text>
                  </Box>
                  <Image src="italy.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="prague.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Praga</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>República Tcheca</Text>
                  </Box>
                  <Image src="czechRepublic.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

              <Box w={'fit-content'}>
                <Image src="amsterdam.png" />
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'0 1rem'} border={'1px solid rgba(255,186,8,0.5)'} borderTop={'none'} borderRadius={'4px'}>
                  <Box p={'2rem 0'} fontFamily={'Barlow, sans-serif'}>
                    <Text fontWeight={'semibold'} fontSize={'1.25rem'} color={'#47585B'}>Amsterdã</Text>
                    <Text mt={'1rem'} fontWeight={'medium'} color={'#999999'}>Holanda</Text>
                  </Box>
                  <Image src="holland.png" w={'30px'} h={'30px'} />
                </Box>
              </Box>

            </Box>
          </Box>
        </VStack>
      </main>
    </>

  )
}