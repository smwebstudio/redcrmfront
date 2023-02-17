import axios from 'axios'

export default function api(locale) {

    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Accept-Language': locale,
        },
        withCredentials: true
    })

    api.interceptors.response.use(response => response, error => {
        if (error.response.status === 401) {
            return Promise.reject()
        }
        return Promise.reject(error)
    })

    return api
}
