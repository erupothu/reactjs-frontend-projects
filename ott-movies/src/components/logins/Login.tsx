
import './Login.css';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword ] = useState('');
    return (
        <div className="login__container">
            Welcome to Login page
            <form action="home" className="login__formSubmit">
                <h5>Username</h5>
                <input type="text" className="login__username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <h5>Password</h5>
                <input type="password" className="login__password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="login__submit">submit</button>
            </form>
        </div>
    )
}

export default Login