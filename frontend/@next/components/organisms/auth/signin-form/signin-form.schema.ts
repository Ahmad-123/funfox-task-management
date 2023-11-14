import * as yup from 'yup'

export const SigninSchema = yup
  .object({
    userName: yup
      .string()
      .required('userName is required')
      .min(6, 'invalid userName'),

    password: yup
      .string()
      .required('Password is required')
      .min(6, 'invalid Password'),
  })
  .required()
