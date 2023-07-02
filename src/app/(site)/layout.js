"use client"
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@_context/AuthProvider'
const Layout = ({ children }) => {
     const { replace } = useRouter()
     const { status } = useContext(AuthContext)
     useEffect(() => {
          if (status === "unathenticated")
               replace("/otp")
     }, [status])
     return (
          <>
               {children}
          </>

     )
}

export default Layout