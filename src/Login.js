import React from "react"
import { Container } from "react-bootstrap"

const AUTH_URL =
 "http://accounts.spotyfy.com/authorize? clinent_id=&response_type=code&redirect_uri=http://localhost:3000&scope=streming%20user-read-email%20user-read-private%20user-library-read%20user-libray-modify%20user-resd-playback-state%20user-modify-playback-state"

export default function Login () {
    return (
    
    <Container className = "d-flex justify-content-center align-items-center" 

    style={{minHeigth: '100vh'}}> 
    <a className="btn btn-success btn-lg" href={AUTH_URL}> 
    Login Usuário
    </a>

    </Container>
    )
}