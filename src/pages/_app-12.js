import '/src/styles/red_theme.css'
import { appWithTranslation } from 'next-i18next'
import NextNProgress from 'nextjs-progressbar'
import { DevSupport } from '@react-buddy/ide-toolbox-next'
import { ComponentPreviews, useInitial } from '@/components/dev'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <NextNProgress
                color="#D8002C"
                startPosition={0.2}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <DevSupport
                ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}>
                <Component {...pageProps} />
            </DevSupport>
        </>
    )
}

export default appWithTranslation(App)
