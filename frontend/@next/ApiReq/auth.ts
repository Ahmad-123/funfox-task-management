import { requestUrl } from '@hooks'
import { AxiosResponse } from 'axios'

export const loginUser = async (
  email: string,
  password: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post('logIn', {
    email,
    password,
  })
}
