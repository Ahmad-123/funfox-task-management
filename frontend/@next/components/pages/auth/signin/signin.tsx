import React from 'react'
import { SigninForm } from '@organisms'
import { AuthLayout } from '@layouts'

export const Signin = (): JSX.Element => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[500px] flex flex-wrap items-center bg-yellow-200 p-8 rounded-lg shadow-2xl'>
        <SigninForm />
      </div>
    </div>
  )
}

Signin.getLayout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>
