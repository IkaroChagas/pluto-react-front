import axios from 'axios'

const api = axios.create({
    baseURL: "pluto-api-comeia.vercel.app/api",
})

export default api



