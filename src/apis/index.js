const backend  = "http://localhost:2000"

import axios from "axios"

const api = axios.create({
    baseURL: backend
})

export default api