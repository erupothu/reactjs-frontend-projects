import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./components/logins/Login"


const AppRouter = () => {
    return (
        <div className="router__container">
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Login} />
                    <Route path="home" Component={Home} /> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter