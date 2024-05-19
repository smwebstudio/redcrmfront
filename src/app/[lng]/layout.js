import { dir } from 'i18next'
import '@/styles/red_theme.css'
import '@/assets/css/custom.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/responsive.css'
import '@/assets/css/style.css'
import AppLayout from '@/components/common/Layout'
// import '@/assets/css/vendor.css'

const languages = ['am', 'en', 'ru']

export const metadata = {
    title: 'RED Group',
    description: 'RED Group',
}

export async function generateStaticParams() {
    return languages.map(lng => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <body>
                <AppLayout lng={lng}>{children}</AppLayout>
            </body>
        </html>
    )
}
