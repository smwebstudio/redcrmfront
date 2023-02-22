// import 'tailwindcss/tailwind.css'
import '/src/styles/red_theme.css'
import { appWithTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar';
// const App = ({ Component, pageProps }) => <Component {...pageProps} />


const App =  ({ Component, pageProps }) => {
    return (
        <>
            <NextNProgress color="#D8002C" startPosition={0.2} stopDelayMs={200} height={3} showOnShallow={true}/>
            <Component {...pageProps} />;
        </>
    );
}

export default appWithTranslation(App)
