// import '@/assets/css/bootstrap.min.css'
import '@/assets/css/responsive.css'
import '@/assets/css/style.css'
import '@/assets/css/custom.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import StyledComponentsRegistry from '@/styles/styleRegistry'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import React from 'react'
import redTheme from '@/assets/theme'

export const metadata = {
    title: 'Red Invest',
    description: 'Red Invest',
}

export default function RootLayout({ children }) {
    return (
        <html lang="hy">
            <body>
                <AntdRegistry>
                    <StyledComponentsRegistry>
                        <ConfigProvider theme={redTheme}>
                            {children}
                        </ConfigProvider>
                    </StyledComponentsRegistry>
                </AntdRegistry>
            </body>
        </html>
    )
}
