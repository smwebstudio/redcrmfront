import Axios from 'axios'
import { apiURL } from "@/constants";

const axiosAPI = Axios.create({
    baseURL: apiURL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axiosAPI
