import axios from 'axios'
import { developersApiURL } from '@/constants'

export default function developersApi(locale) {
    const api = axios.create({
        baseURL: developersApiURL,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
    })

    api.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                return Promise.reject()
            }
            return Promise.reject(error)
        },
    )

    return api
}
