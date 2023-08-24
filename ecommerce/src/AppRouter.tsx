import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import Header from './components/headers/Header';
import Footer from './components/footers/Footer';
import Login from './components/logins/Login';

const AppRouter = () => {

    const footerStyle: React.CSSProperties = {
        clear: 'both',
        position: 'absolute',
        width: '100%',
        marginTop: "10vh",
        bottom: '0px'
    }
    return (
        <div className="appRouter">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='' Component={Home} />
                    <Route path='checkout' Component={Checkout} />
                    <Route path='login' Component={Login} />
                </Routes>
                <div style={footerStyle}>
                    <Footer/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter