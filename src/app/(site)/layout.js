"use client"
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/_context/AuthProvider'
import SiteNavbar from '@/_common/Navbar/SiteNavbar'
const Layout = ({ children }) => {
     const { replace } = useRouter()
     const { status } = useContext(AuthContext)
     useEffect(() => {
          if (status === "unathenticated")
               replace("/otp")
     }, [status])


     if (status === "loading") return (<div className="w-full h-screen flex items-center justify-center">
          <p>در حال بار گذاری...</p>
     </div>)
     return (
          <>
               <SiteNavbar />
               {children}
          </>

     )
}

export default Layout