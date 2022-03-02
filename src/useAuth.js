import { useEffect, useState } from "react"
import axios from "axios"

export default function useAuth(code){
    const [accessToken, setAccesToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExperesIn] = useState()

useEffect(() => {
    axios
    .post('http://localhost:3001/login',{
    code,
    })
    .then(res => {
        setAccesToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExperesIn(res.data.expiresIn)
        window.history.pushState({}, null,"/")
    })
    .catch(() => {
        window.location = "/" 
    })
   },   [code])
   

useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {

    axios
    .post('http://localhost:3001/refresh',{
    refreshToken,
    })
    .then(res => {
       setAccesToken(res.data.accessToken)
       setExperesIn(res.data.expiresIn)   
    })
    .catch(() => {
        window.location = "/"
    })
    }, (expiresIn - 60 )* 1000 )   

    return() => clearInterval(interval)

   }, [refreshToken, expiresIn])

   return accessToken
}