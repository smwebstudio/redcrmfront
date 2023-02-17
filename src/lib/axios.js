import Axios from 'axios'
import Router from 'next/router'



const axiosAPI = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Accept-Language': locale,
    },
    withCredentials: true,
})

export default axiosAPI
