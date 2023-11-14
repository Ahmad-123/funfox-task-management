/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react'
import { authActions } from '@store'
import { useAppDispatch } from '@hooks'
import { useRouter } from 'next/router'
import { AxiosResponse } from 'axios'
import { useSnackbar } from 'notistack'
import { statusCodes } from '@data'
import { statusTypes } from '@types'

export const useAxiosFetch = (loading = false) => {
  const [isLoading, setIsLoading] = useState(loading)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  type dataProps = (
    promise: Promise<AxiosResponse<unknown, any>>,
    notifyError?: boolean
  ) => any

  const evalApiPromise: dataProps = async (promise, notifyError = true) => {
    setIsLoading(true)
    try {
      const res: any = await promise
      return { responseCode: statusTypes.OK, ...res.data }
    } catch (err: any) {
      if (err.response?.status === 400) {
        const statusCode = err?.response?.data?.statusCode
        switch (statusCode) {
          case 687:
            // i.e. if admin disables the organiser/user that user should get logout
            // dispatch(authActions.logout());
            break

          // Sets the fetch error properties.
          default:
            notifyError &&
              enqueueSnackbar(
                statusCodes[statusCode as string] ?? 'Error occured',
                {
                  variant: 'error',
                }
              )

            break
        }
      } else if (err?.response?.data?.statusCode === 401) {
        dispatch(authActions.logout())
        void router.push('/')
      } else if (err?.response?.data?.statusCode === 500) {
      } else if (err?.code === 'ERR_NETWORK') {
        notifyError
          ? enqueueSnackbar('Network error', {
              variant: 'error',
            })
          : null
      } else if (!err?.response?.data) {
        notifyError
          ? enqueueSnackbar(err?.message ?? 'Something went wrong', {
              variant: 'error',
            })
          : null
      }

      return { responseCode: statusTypes.ERROR, response: err?.response }
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, evalApiPromise }
}
