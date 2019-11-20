import Axios from 'axios'
const BASE_URL = `https://5dced5d875f9360014c2645d.mockapi.io/`

export const api = Axios.create({
    baseURL: BASE_URL,
    headers:{
        
    }
})