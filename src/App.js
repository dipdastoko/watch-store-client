import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddProduct from './Pages/Dasboard/AdminDashboad/AddProduct/AddProduct';
import MakeAdmin from './Pages/Dasboard/AdminDashboad/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/Dasboard/AdminDashboad/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Dasboard/AdminDashboad/ManageProducts/ManageProducts';
import Dashboard from './Pages/Dasboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dasboard/MyOrders/MyOrders';
import Payment from './Pages/Dasboard/Payment/Payment';
import TakeReview from './Pages/Dasboard/TakeReview/TakeReview';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import PurchaseNow from './Pages/PurchaseNow/PurchaseNow';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='explore' element={<Explore />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='purchasenow/:productId' element={<PrivateRoute>
              <PurchaseNow />
            </PrivateRoute>} />

            {/* dshboard routes */}
            <Route path='dashboard' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
            >
              <Route index element={<MyOrders />} />
              <Route path='/dashboard/payment' element={<Payment />} />
              <Route path='/dashboard/myorders' element={<MyOrders />} />
              <Route path='/dashboard/review' element={<TakeReview />} />


            </Route>


            <Route path='dashboard/admin' element={<AdminRoute>
              <Dashboard />
            </AdminRoute>}>
              {/* dashborad admin routes */}
              <Route index element={<ManageAllOrders />} />
              <Route path='/dashboard/admin/manageallorders' element={<ManageAllOrders />} />
              <Route path='/dashboard/admin/addproduct' element={<AddProduct />} />
              <Route path='/dashboard/admin/makeadmin' element={<MakeAdmin />} />
              <Route path='/dashboard/admin/manageproducts' element={<ManageProducts />} />
            </Route>

            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
