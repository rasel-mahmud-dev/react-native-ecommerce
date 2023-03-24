const backend  = "http://192.168.2.177:9000"

import axios from "axios"

const api = axios.create({
    baseURL: backend
})

export default api