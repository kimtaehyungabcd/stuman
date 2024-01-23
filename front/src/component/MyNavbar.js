import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MyNavbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ height: '70px', padding: '15px', position: 'sticky',backgroundColor:'white',width:'100%' }}>
       <Link to="/" style={{ borderRadius: '10%', color: 'white', position:'fixed',color:'#a5c347' }}>
      logo
      </Link>
      <Link to="/" style={{ borderRadius: '10%', color: 'white', position:'fixed',right:'20%' ,marginRight: '15px', marginLeft: '180px',color:'#a5c347' }}>
        Active
      </Link>
      <Link to="/add" style={{ borderRadius: '10%', color: 'white', position:'fixed',right:'16%' ,color: '#ff236c'}}>
        Link 1
      </Link>
      <Link to="/link-2" style={{ borderRadius: '10%', color: 'white', marginRight: '15px',position:'fixed',right:'10%',color: '#00d2dc' }}>
        Link 2
      </Link>
      <Link to="/link-2" style={{ borderRadius: '10%', color: 'white', marginRight: '15px',position:'fixed',right:'5%',color: '#a5c347' }}>
        Link 3
      </Link>
    </nav>
  );
}

export default MyNavbar;
