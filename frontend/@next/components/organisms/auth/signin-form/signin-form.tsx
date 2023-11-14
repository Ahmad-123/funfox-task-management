import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SigninFormValuesType } from './signin-form.types'
import { useAppDispatch, useAxiosFetch } from '@hooks'

import { CustomButton, InputField } from '@atoms'
import { SigninSchema } from './signin-form.schema'
import { statusTypes } from '@types'
import { loginUser } from '@ApiReq'

export const SigninForm = (): JSX.Element => {
  const router = useRouter()

  const { evalApiPromise, isLoading } = useAxiosFetch()

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<SigninFormValuesType>({
    defaultValues: { username: '', password: '' },
    resolver: yupResolver(SigninSchema),
    mode: 'onChange',
  })

  const handleFormSubmit: SubmitHandler<SigninFormValuesType> = async (
    { username, password },
    event
  ) => {
    // call API here
    event?.preventDefault()
    const data = await evalApiPromise(loginUser(username, password))
    if (data?.responseCode === statusTypes.OK) {
      void router.push(`/two-fa?token=${data?.data?.token}`)
    }
  }

  return (
    <div>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className='flex flex-wrap gap-2'>
          <div className='w-full sm:w-[49%]'>
            <InputField
              fieldName='username'
              register={register}
              error={errors?.username?.message}
            />
          </div>
          <div className='w-full sm:w-[49%]'>
            <InputField
              fieldName='password'
              register={register}
              error={errors?.password?.message}
            />
          </div>
        </div>

        <div className='mt-4'>
          <CustomButton
            disabled={!isDirty || !isValid}
            loading={isLoading}
            text={'Submit'}
          />
        </div>
      </form>
    </div>
  )
}
