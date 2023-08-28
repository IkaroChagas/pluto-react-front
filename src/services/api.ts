import axios from 'axios'

const api = axios.create({
    baseURL: "https://console.neon.tech/api/v2/projects/super-frost-68492549/branches/br-still-morning-16182512/api"
})

export default api



