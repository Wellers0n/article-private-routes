import React from 'react'

const Home = ({history}) => {
    const redirectLogin = () => {
        localStorage.removeItem('token')
        history.push('/')
    }
    return (
        <div>
            <div>Home screen</div>  
            <button onClick={redirectLogin}>Remove token</button>
        </div>
    )
}

export default Home
