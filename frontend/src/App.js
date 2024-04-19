import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/dashboard'
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from "./pages/UserProfile";

import AdminHeader from './components/admin/AdminHeader'
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from './pages/admin/AdminDashboard';
import AddUser from "./components/admin/AddUser";
function App() {
  return (
    <>
      <Router>
        <div className='container'>
        <Routes>
            <Route path="/admin/*" element={<AdminHeader />} />
            <Route path="*" element={<Header />} />
          </Routes>

          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/adduser" element={<AddUser />} />

          </Routes>


          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
