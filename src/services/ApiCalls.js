import { api } from './ApiConfig'

export const getAllPods = async () => {
    try {
        const response = await api.get('/pods')
        return response.data
    } catch (error) {
        throw error
    }
}
