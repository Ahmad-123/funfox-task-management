import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SigninFormValuesType } from './signin-form.types'
import { useAppDispatch, useAxiosFetch } from '@hooks'

import { CustomButton, InputField } from '@atoms'
import { SigninSchema } from './signin-form.schema'
import { ButtonTypes, statusTypes } from '@types'
import { loginUser } from '@ApiReq'

export const SigninForm = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const router = useRouter()

  const { evalApiPromise, isLoading } = useAxiosFetch()

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<SigninFormValuesType>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(SigninSchema),
    mode: 'onChange',
  })

  const handleFormSubmit: SubmitHandler<SigninFormValuesType> = async (
    { email, password },
    event
  ) => {
    // call API here
    event?.preventDefault()
    const data = await evalApiPromise(loginUser(email, password))
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
              fieldName='email'
              register={register}
              error={errors?.email?.message}
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
            // disabled={!isDirty || !isValid}
            loading={isLoading}
            text={'Submit'}
          />
        </div>
      </form>
    </div>
    // <Box
    //   sx={{
    //     alignItems: "center",
    //     background: "linear-gradient(125deg, #FF4E4E 11.19%, #5E1652 87.98%)",
    //     display: "flex",
    //     height: "100vh",
    //     width: "100%",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       boxSizing: "border-box",
    //       margin: "0 auto",
    //       maxWidth: {
    //         xl: "50rem",
    //         lg: "50rem",
    //         md: "50rem",
    //         sm: "30rem",
    //         xs: "30rem",
    //       },
    //       padding: "0 0.5rem",
    //       width: "100%",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         alignItems: "center",
    //         display: "flex",
    //         justifyContent: "space-between",
    //         width: "100%",
    //         "& img": {
    //           margin: "0 0 0 1.5rem",
    //         },
    //         "& a": {
    //           color: "white",
    //           fontSize: "0.875rem",
    //           fontWeight: 600,
    //         },
    //       }}
    //     >
    //       <Image
    //         src="/images/svg/logo.svg"
    //         width={48}
    //         height={48}
    //         alt="SuperBooking logo"
    //       />
    //       <Link href="/forgot-password">Forgot Password?</Link>
    //     </Box>
    //     <Typography
    //       component="h1"
    //       sx={{
    //         color: "white",
    //         fontSize: {
    //           xl: "6.25rem",
    //           lg: "6.25rem",
    //           md: "6.25rem",
    //           sm: "3rem",
    //           xs: "3rem",
    //         },
    //         fontFamily: "Poppins",
    //         fontWeight: 600,
    //         lineHeight: 1,
    //         margin: "6.5rem 0 7rem",
    //       }}
    //     >
    //       Admin
    //     </Typography>
    //     <form
    //       onSubmit={handleSubmit(handleFormSubmit)}
    //       style={{ width: "100%" }}
    //     >
    //       <Box width="100%">
    //         <Grid container spacing={3}>
    //           <Grid item xl={4.6} lg={4.6} md={4.6} sm={12} xs={12}>
    //             <InputField
    //               placeholder="Email"
    //               icon={"/images/svg/email.svg"}
    //               type="email"
    //               register={register("email")}
    //               error={errors["email"]?.message}
    //             />
    //           </Grid>
    //           <Grid item xl={4.6} lg={4.6} md={4.6} sm={12} xs={12}>
    //             <InputField
    //               placeholder="Password"
    //               icon={"/images/svg/password.svg"}
    //               type="password"
    //               register={register("password")}
    //               error={errors["password"]?.message}
    //             />
    //           </Grid>
    //           <Grid item xl={2.8} lg={2.8} md={2.8} sm={12} xs={12}>
    //             <CustomButton
    //               type={ButtonTypes.SUBMIT}
    //               disabled={!isDirty || !isValid}
    //               loading={isLoading}
    //               text="Login"
    //               backgroundColor="black"
    //               color="white"
    //             />
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </form>
    //   </Box>
    // </Box>
  )
}
