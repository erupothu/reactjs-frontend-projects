import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import Header from './components/headers/Header';
import Footer from './components/footers/Footer';

const AppRouter = () => {

    const footerStyle: React.CSSProperties = {
        left: 0,
        bottom: 0,
        position: 'relative'
    }
    return (
        <div className="appRouter">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='' Component={Home} />
                    <Route path='checkout' Component={Checkout} />
                </Routes>
                <div style={footerStyle}>
                    <Footer/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter