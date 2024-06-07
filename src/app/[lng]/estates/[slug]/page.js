import api from '@/hooks/api'
import AppPage from '@/components/common/Layout/AppPage'
import { notFound } from 'next/navigation'
import EstateView from '@/components/Estate/View'
import fetchApi from '@/hooks/fetchApi'

export default async function EstateViewPage({ params: { lng, slug } }) {
    try {
        const estateDataResponse = await api(lng).get('api/estates/' + slug)
        const estateData = estateDataResponse.data.data

        const hotEstatesResponse = await fetchApi(lng).get('api/estates/hot/', {
            next: { revalidate: 12400 },
        })
        const hotEstates = hotEstatesResponse
        return (
            <AppPage>
                <EstateView
                    estateData={estateData}
                    lng={lng}
                    hotEstates={hotEstates}
                />
            </AppPage>
        )
    } catch (e) {
        notFound()
    }
}
