import { useState } from "react"
import "./Login.css";
import { firebaseApp } from '../../middleware/Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import { addCredentials } from "../../services/reducers/UserReducer";
import { error } from "console";

const Login = () => {
    const auth = getAuth(firebaseApp);
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const signIn = (e: any) => {
        e.preventDefault();
        try {
            signInWithEmailAndPassword(auth, email, password).then(
               (userCredential) => {
                    const user = userCredential.user;
                    dispatch(addCredentials(user))
                    navigate("/");
                  }, error => {
                    alert("Invalid Credentials");
                    navigate("/");
                  }
                );
              } 
             catch (err) {
                alert("error")
              }          
    }

    const register = (e: any) => {
        e.preventDefault();
        try {
            createUserWithEmailAndPassword(auth, email, password).then(
               (userCredential) => {
                    const user = userCredential.user;
                    dispatch(addCredentials(user))
                    navigate("/");
                  }, error => {
                    alert("User Creation failed");
                    navigate("/");
                  }
                );
              } 
             catch (err) {
                alert("Error creating Credentials")
                navigate("/");
              }          
    }

    return (
        <div className="login">
            <div className="login__container">
                <form>
                    <div className="login__email">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="login__Password">
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}  />
                    </div>
                    <div>
                    <button type="submit" className="login__submit" onClick={signIn} >Sign in</button>
                    </div>
                </form>
                <div >
                    <button onClick={register} >register</button>
                </div>
            </div>
        </div>
    )
}

export default Login