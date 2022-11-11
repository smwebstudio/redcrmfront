import axios from 'axios'
import {useAuth} from './auth'
import useSWR from 'swr'

export default function api() {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        withCredentials: true
    })

    api.interceptors.response.use(response => response, error => {
        console.log(error)
        if (error.response.status === 401) {

            return Promise.reject()
        }

        return Promise.reject(error)
    })

    return api
}
