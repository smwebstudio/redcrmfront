'use client'
import React, { useState } from 'react'
import { Layout } from 'antd'
import AppHeader from './AppHeader'
import MoonLoading from '@/components/common/Loading/MoonLoading'
import { Content } from 'antd/es/layout/layout'
import AppFooter from '@/components/common/Layout/AppFooter'

const AppLayout = ({ children, lng }) => {
    const [pageLoading, setPageLoading] = useState(false)

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setPageLoading(false)
    //     }, 500)
    //
    //     return () => {
    //         clearTimeout(timeoutId)
    //     }
    // }, [])

    return (
        <div>
            {pageLoading ? (
                <div
                    className={
                        'flex items-center justify-center w-full min-h-screen'
                    }>
                    <MoonLoading loading={true} />
                </div>
            ) : (
                <>
                    <Layout className={'app-main-layout'}>
                        <AppHeader lng={lng} />
                        <Content>{children}</Content>
                        <AppFooter lng={lng} />
                    </Layout>
                </>
            )}
        </div>
    )
}

export default AppLayout
