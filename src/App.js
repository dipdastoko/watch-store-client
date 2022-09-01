import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dasboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dasboard/MyOrders/MyOrders';
import Payment from './Pages/Dasboard/Payment/Payment';
import TakeReview from './Pages/Dasboard/TakeReview/TakeReview';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='explore' element={<Explore />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='dashboard' element={<Dashboard />} >
              <Route path='/dashboard/payment' element={<Payment />} />
              <Route path='/dashboard/myorders' element={<MyOrders />} />
              <Route path='/dashboard/review' element={<TakeReview />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
