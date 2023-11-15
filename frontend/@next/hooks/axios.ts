import axios from 'axios'
import { environment } from '@config'

export const domain: string = environment.apiUrl

export const url: string = `${domain}`
export const requestUrl = axios.create({
  baseURL: url,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

// define request interceptors
requestUrl?.interceptors?.request.use((request) => {
  const accesToken: string = localStorage.getItem('token') ?? ''
  const acceptLanguage = localStorage.getItem('selectedLanguage')
  if (localStorage.getItem('token') && request.headers) {
    request.headers.Authorization = `Bearer ${accesToken}`
  }
  if (localStorage.getItem('selectedLanguage') && request.headers) {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    request.headers['language'] = acceptLanguage ?? 'en'
  }
  return request
})
