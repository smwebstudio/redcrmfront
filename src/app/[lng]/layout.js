import { dir } from 'i18next'
// import '@/styles/red_theme.css'
import AppLayout from '@/components/common/Layout'
import { languages } from '../i18n/settings'
import { Suspense } from 'react'
// import '@/assets/css/vendor.css'

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
                <Suspense fallback={<div>Loading...</div>}>
                    <AppLayout lng={lng}>{children}</AppLayout>
                </Suspense>
            </body>
        </html>
    )
}
