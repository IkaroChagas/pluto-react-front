import axios from 'axios'

const api = axios.create({
    baseURL: "https://pluto-api-7hjw.onrender.com/api",
})

export default api



