

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/logins/Login'
import Home from './pages/home/Home'

const AppRouter = () => {
    return (
        <div className="appRouter__container">
            <BrowserRouter>
                <Routes>
                    <Route path='' Component={Login} />
                    <Route path='home' Component={Home} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter