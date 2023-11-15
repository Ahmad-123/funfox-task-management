import { requestUrl } from '@hooks'
import { AxiosResponse } from 'axios'

export const loginUser = async (
  userName: string,
  password: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post('logIn', {
    userName,
    password,
  })
}
