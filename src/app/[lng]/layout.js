import { dir } from 'i18next'
import AppLayout from '@/components/common/Layout'
import { languages } from '../i18n/settings'
import React, { Suspense } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export const metadata = {
    title: 'RED Group',
    description: 'RED Group',
}

export async function generateStaticParams() {
    return languages.map(lng => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
    const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />
    return (
        <html lang={lng} dir={dir(lng)}>
            <body>
                <Suspense fallback={<Spin indicator={antIcon} />}>
                    <AppLayout lng={lng}>{children}</AppLayout>
                </Suspense>
            </body>
        </html>
    )
}
