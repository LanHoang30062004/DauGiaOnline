import { Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateUser from './component/UpdateUser/index';
import Login from './component/Login/index';
import AddProduct from './component/AddProduct/index';
import AdminProduct from './component/AdminProduct/index';
import AdminUser from './component/AdminUser/index';
import UpdateProduct from './component/UpdateProduct/index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/admin-product' element={<AdminProduct/>}/>
        <Route path='/admin-user' element={<AdminUser/>}/>
        <Route path='/update-product' element={<UpdateProduct/>}/>
        <Route path='/update-user' element={<UpdateUser/>}/>
      </Routes>
    </>
  )
}
export default App;
