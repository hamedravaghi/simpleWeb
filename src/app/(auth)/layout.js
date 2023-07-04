"use client"

import RegisterProvider from "@/_context/RegisterProvider"

const layout = ({ children }) => {
     return (
          <RegisterProvider>
               <div className="h-screen w-full flex items-center justify-center">
                    {children}
               </div>
          </RegisterProvider>
     )
}

export default layout