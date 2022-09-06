import { ColorModeScript } from "@chakra-ui/react";
import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";
import theme from "../styles/theme";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render(){
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>           
            </Html>
        )
    }
}



export default MyDocument