import qs from 'qs'
import service from './axios'

export function get(params) {
    service.get('', { params })
}

export function post(params) {
    service.post('', params)
}

export function postByUrlReload(params) {
    service.post('', qs.stringify(params))
}
