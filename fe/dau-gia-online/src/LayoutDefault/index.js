import { Outlet } from 'react-router-dom';
import Header from './../default/Header';
import Footer from './../default/Footer';
import { useState } from 'react';
function LayoutDefault () {
    const [filter , setFilter] = useState({}) ; 
    return (
        <>
           <Header setFilter={setFilter}/>
            <Outlet context={filter}/>
           <Footer/>
        </>
    )
}
export default LayoutDefault ; 