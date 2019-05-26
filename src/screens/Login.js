import React from 'react'

const Login = ({history}) => {
    const loginIn = () => {
        history.push('/home')
        localStorage.setItem('token', 'batman')
    }
    return (
        <div>
           <div>Login screen</div>
           <button onClick={loginIn}>Go Home</button>
        </div>
    )
}

export default Login
