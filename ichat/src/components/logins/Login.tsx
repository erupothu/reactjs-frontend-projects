
import axios from "axios";
import "./Login.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const projectID = '';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (e: any) => {
        e.preventDefault();
        const authObject = {
            'project-ID': projectID,
            'User-Name': username,
            'User-Secret': password 
        }
        try {
            axios.get("https://api.chatengine.io/chats", {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('projectId', projectID);
            // window.location.reload();
            navigate('home');
            setError('');
        } catch(err) {
            setError('Invalid credentials');
            navigate('');
        }
    }

    return (
        <div className="login__container">
            <form onSubmit={submitHandler} className="login__form">
                <h5>username</h5>
                <input type="text" className="login__username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <h5>password</h5>
                <input type="password" className="login__password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="login__submit">login</button>

                <div>
                    {error}
                </div>
            </form>
        </div>
    )
}

export default Login