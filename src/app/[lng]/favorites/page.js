import React from 'react'
import AppPage from '@/components/common/Layout/AppPage'
import FavoriteList from '@/components/Estate/FavoriteList'

export default async function FavoriteListPage({ params: { lng } }) {
    return (
        <AppPage>
            <FavoriteList lng={lng} />
        </AppPage>
    )
}
