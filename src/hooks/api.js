import axios from 'axios'
import { apiURL } from "@/constants";

export default function api(locale) {

    const api = axios.create({
        baseURL: apiURL,
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
