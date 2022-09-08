import { ChakraProvider, Container } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="1440px" pb={{ base: '10', lg: '24' }} centerContent>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  ) 
}

export default MyApp
