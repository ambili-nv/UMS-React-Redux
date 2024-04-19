import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { logout, reset } from '../../features/admin/adminSlice';

function AdminHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/admin/login');
  };

  return (
    <div>
    <header className='header'>
      <div className="logo">
       
        Admin
     
        
      </div>
   
      <ul>
      
          <li>

          <button className='btn' 
          onClick={onLogout}
          >
          <FaSignOutAlt /> logout
          </button>
       
      </li></ul>
    </header>
  </div>
  )
}


export default AdminHeader;