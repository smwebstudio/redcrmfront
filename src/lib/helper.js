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
    return compareEstates
}

export function toggleEstateFavourite(item) {
    let favEstates = JSON.parse(localStorage.getItem('favEstates')) || []
    const index = favEstates.indexOf(item.id)

    if (index === -1) {
        favEstates.push(item.id)
        notification.open({
            message: 'Ավելացվել է ցանկին',
            duration: 1,
        })
    } else {
        favEstates.splice(index, 1)
        notification.open({
            message: 'Հանվել է ցանկից',
            duration: 1,
        })
    }

    localStorage.setItem('favEstates', JSON.stringify(favEstates))
    return favEstates
}

export function formatNumberPrice(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export function isWithinLast90Days(createdAt) {
    const now = new Date()
    const ninetyDaysAgo = new Date(now)
    ninetyDaysAgo.setDate(now.getDate() - 90)

    const projectCreatedAt = new Date(createdAt)

    return projectCreatedAt >= ninetyDaysAgo
}

export function calculateMortgagePayment(estateValue) {
    // Constants
    const initialPaymentPercentage = 0.1
    const annualInterestRate = 0.11
    const loanTermYears = 20

    // Calculate loan amount
    const initialPayment = estateValue * initialPaymentPercentage
    const loanAmount = estateValue - initialPayment

    // Calculate monthly interest rate and total number of payments
    const monthlyInterestRate = annualInterestRate / 12
    const totalNumberOfPayments = loanTermYears * 12

    // Calculate monthly payment
    const monthlyPayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -totalNumberOfPayments))

    return Math.round(monthlyPayment)
}
