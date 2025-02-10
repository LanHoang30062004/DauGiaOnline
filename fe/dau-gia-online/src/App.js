import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login/index';
import Register from './component/Register/index';
import HomePage from './component/HomePage/index';
import HelpContact from './component/HelpContact/index';
import MyProfile from './component/MyProfile/index';
import Payment from './component/Payment/index';
import ShoppingCart from './component/ShoppingCart/index';
import DetailProduct from './component/DetailProduct/index';
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/help-contact" element={<HelpContact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/detail-product" element={<DetailProduct />} />
      </Routes>
    </>
  )
}
export default App;

