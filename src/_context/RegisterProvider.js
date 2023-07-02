"use client"
import { useState, createContext } from 'react'

export const registerContext = createContext({
     phoneNumber: "",
     role: "",
     loading: null,
     handleLoading: () => { },
     handleSetPhoneNumber: () => { },
     handleReset: () => { },
     handleChangeRole: () => { }

})


const RegisterProvider = ({ children }) => {
     const [phoneNumber, setPhoneNumber] = useState("")
     const [loading, setLoading] = useState(false)
     const [role, setRole] = useState("user")




     const handleReset = () => {
          setPhoneNumber("")
          setLoading(false)
     }
     const handleChangeRole = () => {
          setRole(prev => prev === "user" ? "shop" : "user")
     }

     return (
          <registerContext.Provider value={
               {
                    phoneNumber,
                    loading,
                    handleLoading: (value) => setLoading(value),
                    handleSetPhoneNumber: value => setPhoneNumber(value),
                    handleChangeRole,
                    role,
                    handleReset
               }
          }>
               {children}
          </registerContext.Provider>)

}

export default RegisterProvider