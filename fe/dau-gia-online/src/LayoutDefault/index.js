import { Outlet } from 'react-router-dom';
import Header from './../default/Header';
import Footer from './../default/Footer';
function LayoutDefault () {
    return (
        <>
           <Header/>
           <Outlet/>
           <Footer/>

        </>
    )
}
export default LayoutDefault ; 