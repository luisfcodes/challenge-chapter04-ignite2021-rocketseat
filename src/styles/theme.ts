import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({config, styles: {
    global: {
        'body': {
            bg: '#F5F8FA'
        }
    }
}})

export default theme