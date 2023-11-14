import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '@hooks'
import { authActions } from '@store'

interface AuthLayoutProps {
  children: React.ReactNode
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const [isLoading, setLoading] = useState(false)
  // const dispatch = useAppDispatch()

  if (isLoading) {
    return (
      <div className='font-bold text-center text-4xl'>
        Loading in auth-layout ...
      </div>
    )
  }

  return <>{children}</>
}
