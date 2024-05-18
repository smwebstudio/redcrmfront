import { dir } from 'i18next'
import Head from 'next/head'
import styles from '@/styles/red_theme.css'
import '@/styles/red_theme.css'
import '@/assets/css/custom.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/responsive.css'
import '@/assets/css/style.css'
// import '@/assets/css/vendor.css'

const languages = ['en', 'am', 'ru']

export async function generateStaticParams() {
    return languages.map(lng => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <Head>{styles}</Head>
            <body>{children}</body>
        </html>
    )
}
