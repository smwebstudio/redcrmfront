import React from 'react'
import api from '@/hooks/api'
import BannerDevelopers from '@/components/React/section-components/bannerDevelopers'
import SearchSectionDevelopers from '@/components/Search/SearchSectionDevelopers'
import BuildingList from '@/components/Buildings/BuildingList'
import AppPage from '@/components/common/Layout/AppPage'

export default async function DeveloperListPage({
    params: { lng, slug },
    searchParams,
}) {
    const response = await api(lng).post('/api/filters', {})
    const filtersData = response.data
    const queryData = ''
    const buildings = {
        data: [
            {
                id: 66,
                full_address: 'Նոր-Նորքի 1-ին զանգված, Լվովյան 108/2 ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/developers/d1.png',
            },
            {
                id: 66,
                full_address: 'Փոքր կենտրոն, Խանջյան 9/3',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'ԱՐԵՎ Պրեմիում դասի բնակելի համալիր',
                image: '/assets/developers/d2.png',
            },
            {
                id: 66,
                full_address: 'Դավթաշեն',
                native_coords: [44.5247957, 40.1780461],
                name_arm:
                    'Bridgeview բազմաֆունկցիոնալ ընտանեկան բնակելի համալիր',
                image: '/assets/developers/d3.png',
            },
            {
                id: 66,
                full_address: 'Արաբկիր',
                native_coords: [44.5247957, 40.1780461],
                name_arm:
                    'Գրիբոյեդով պարկ : Էլիտար բազմաֆունկցիոնալ բնակելի համալիր',
                image: '/assets/developers/d4.png',
            },
            {
                id: 66,
                full_address: 'Աջափնյակ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'Level 16 ։ Նոր բնակելի համալիր ',
                image: '/assets/developers/d5.png',
            },
            {
                id: 66,
                full_address: 'Բագրևանդ 49',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'Սմարթ Սիթի',
                image: '/assets/developers/d6.png',
            },
            {
                id: 66,
                full_address: 'Նոր-Նորքի 1-ին զանգված, Լվովյան 108/2 ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'The View Պրեմիում դասի բնակելի համալիր',
                image: '/assets/developers/d1.png',
            },
            {
                id: 66,
                full_address: 'Փոքր կենտրոն, Խանջյան 9/3',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'ԱՐԵՎ Պրեմիում դասի բնակելի համալիր',
                image: '/assets/developers/d2.png',
            },
            {
                id: 66,
                full_address: 'Դավթաշեն',
                native_coords: [44.5247957, 40.1780461],
                name_arm:
                    'Bridgeview բազմաֆունկցիոնալ ընտանեկան բնակելի համալիր',
                image: '/assets/developers/d3.png',
            },
            {
                id: 66,
                full_address: 'Արաբկիր',
                native_coords: [44.5247957, 40.1780461],
                name_arm:
                    'Գրիբոյեդով պարկ : Էլիտար բազմաֆունկցիոնալ բնակելի համալիր',
                image: '/assets/developers/d4.png',
            },
            {
                id: 66,
                full_address: 'Աջափնյակ',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'Level 16 ։ Նոր բնակելի համալիր ',
                image: '/assets/developers/d5.png',
            },
            {
                id: 66,
                full_address: 'Բագրևանդ 49',
                native_coords: [44.5247957, 40.1780461],
                name_arm: 'Սմարթ Սիթի',
                image: '/assets/developers/d6.png',
            },
        ],
        links: {
            first:
                'http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=1',
            last:
                'http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=321',
            prev: null,
            next:
                'http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=2',
        },
        meta: {
            current_page: 1,
            from: 1,
            last_page: 2,
            links: [
                {
                    url: null,
                    label: '&laquo; Previous',
                    active: false,
                },
                {
                    url:
                        'http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=1',
                    label: '1',
                    active: true,
                },

                {
                    url:
                        'http://redoc/api/estates/filter/estates?filter%5Bcontract_type_id%5D=2&filter%5Bestate_type_id%5D=1&page=2',
                    label: 'Next &raquo;',
                    active: false,
                },
            ],
            path: 'http://redoc/api/estates/filter/estates',
            per_page: 12,
            to: 12,
            total: 248,
        },
    }

    return (
        <AppPage>
            <BannerDevelopers />
            <SearchSectionDevelopers
                filtersData={filtersData}
                queryData={queryData}
                lng={lng}
            />
            <BuildingList buildings={buildings} />
        </AppPage>
    )
}
