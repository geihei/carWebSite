import axios from 'axios'

const config = {
    baseURL: '',
    timeout: 50000,
    withCredentials: true,
}

function generateService(config, useInterceptors) {
    const service = axios.create(config)
    useInterceptors(service)
    return service
}

function useInterceptors(service) {
    service.interceptors.request.use(
        (config) => config,
        (error) => Promise.reject(error),
    )
    service.interceptors.response.use(
        (response) => response,
        (error) => Promise.reject(error),
    )
}

export function Service(config) {
    return generateService(config, useInterceptors)
}

const service = Service(config)

export default service
