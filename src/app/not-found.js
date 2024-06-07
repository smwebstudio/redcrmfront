import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import NotFound from '@/components/common/Layout/NotFound'
import AppLayout from '@/components/common/Layout'

export function NotFoundPage() {
    return (
        <AppLayout>
            <AppPage>
                <NotFound />
            </AppPage>
        </AppLayout>
    )
}

export default NotFoundPage
