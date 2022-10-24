import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />

                    <link rel="stylesheet" href="/assets/css/vendor.css" />
                    <link rel="stylesheet" href="/assets/css/style.css" />
                    <link rel="stylesheet" href="/assets/css/responsive.css" />
                </Head>
                <body className="antialiased">
                <Main />
                <NextScript />
                <script src="/assets/js/vendor.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
