import { apiURL } from '@/constants'

function fetchApi(locale) {
    const defaultHeaders = {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': locale,
    }

    const handleResponse = async response => {
        if (!response.ok) {
            if (response.status === 401) {
                // Handle unauthorized response
                return Promise.reject('Unauthorized')
            }
            const errorData = await response.json()
            return Promise.reject(errorData)
        }
        return response.json()
    }

    const fetchWithAuth = async (url, options = {}) => {
        const headers = {
            ...defaultHeaders,
            ...options.headers,
        }
        const response = await fetch(apiURL + url, {
            ...options,
            headers,
        })

        console.log(response)
        return handleResponse(response)
    }

    return {
        post: (url, data, options = {}) =>
            fetchWithAuth(url, {
                ...options,
                method: 'POST',
                body: JSON.stringify(data),
            }),
        get: (url, options = {}) =>
            fetchWithAuth(url, {
                ...options,
                method: 'GET',
            }),
        // Add other methods (put, delete, etc.) as needed
    }
}

export default fetchApi
