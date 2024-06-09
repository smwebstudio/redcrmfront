import { notification } from 'antd'

export function objectToQueryParams(obj) {
    return Object.keys(obj)
        .map(key => {
            const trimmedKey = encodeURIComponent(key.replace(/\s+/g, ''))
            const trimmedValue =
                obj[key] !== undefined
                    ? encodeURIComponent(String(obj[key]).replace(/\s+/g, ''))
                    : undefined
            return trimmedValue !== undefined
                ? trimmedKey + '=' + trimmedValue
                : ''
        })
        .filter(param => param !== '') // Filter out empty parameters
        .join('&')
}

export function getApiQueryURL(values) {
    return Object.entries(values)
        .filter(([key, value]) => value)
        .map(
            ([key, value]) =>
                `filter[${key}]=${encodeURIComponent(String(value).trim())}`,
        )
        .join('&')
}

export function transformLocations(filtersData) {
    return filtersData.locations.reduce((acc, location) => {
        const transformedCities = location.cities.reduce((cityAcc, city) => {
            cityAcc[city.id] = city.children
            return cityAcc
        }, {})
        acc[location.id] = transformedCities
        return acc
    }, {})
}

export function toggleEstateComparison(item) {
    let compareEstates =
        JSON.parse(localStorage.getItem('compareEstates')) || []
    const index = compareEstates.indexOf(item.id)

    if (index === -1) {
        compareEstates.push(item.id)
        notification.open({
            message: 'Ավելացվել է համեմատության համար',
            duration: 1,
        })
    } else {
        compareEstates.splice(index, 1)
        notification.open({
            message: 'Հանվել է համեմատելու ցանկից',
            duration: 1,
        })
    }

    localStorage.setItem('compareEstates', JSON.stringify(compareEstates))
}

export function formatNumberPrice(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
