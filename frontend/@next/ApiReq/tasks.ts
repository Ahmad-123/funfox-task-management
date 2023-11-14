import { requestUrl } from '@hooks'
import { AxiosResponse } from 'axios'

export const getUserTasks = async (
  group: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get(`tasks/${group}`)
}
