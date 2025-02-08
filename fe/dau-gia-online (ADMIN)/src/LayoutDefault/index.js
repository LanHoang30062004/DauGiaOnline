import Header from './../default/Header';
import Footer from './../default/Footer';
import { Outlet } from 'react-router-dom';

function LayoutDefault() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default LayoutDefault; 