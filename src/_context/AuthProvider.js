"use client"
import { useState, useEffect, createContext } from 'react'
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';


export const AuthContext = createContext({
     user: "",
     status: "",
     login: () => { },
     logout: () => { }

})

const AuthProvider = ({ children }) => {
     const { replace } = useRouter()

     const [user, setUser] = useState(null)
     const [status, setStatus] = useState("loading")


     useEffect(() => {
          const token = localStorage.getItem("token")
          if (token) {
               const decodedToken = handleDecodeToken(token)
               setUser(decodedToken)
               setStatus("authenticated")
          } else {
               setUser(null)
               setStatus("unathenticated")
          }


     }, [])





     const handleDecodeToken = (token) => {
          const decodedToken = jwt.decode(token, { complete: true }).payload
          return decodedToken
     }




     const login = (token) => {
          if (token) {
               localStorage.setItem("token", token)
               const decodedToken = jwt.decode(token, { complete: true }).payload
               setUser(decodedToken)
               setStatus("authenticated")

          }
     }

     const logout = () => {
          localStorage.removeItem("token")
          setUser(null)
          setStatus("unathenticated")
          replace("/")

     }

     return (<AuthContext.Provider value={{ user, status, login, logout }}>
          {children}
     </AuthContext.Provider>)
}


export default AuthProvider