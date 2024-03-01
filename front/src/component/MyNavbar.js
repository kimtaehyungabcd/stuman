import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

function MyNavbar() {


  return (
    <nav style={{ height: '70px', padding: '15px', position: 'sticky',backgroundColor:'white',width:'100%' }}>
       <Link to="/" style={{ borderRadius: '10%',  position:'fixed',color:'#a5c347' }}>
      logo
      </Link>
      <Link to="/" style={{ borderRadius: '10%', position:'fixed',right:'20%' ,marginRight: '15px', marginLeft: '180px',color:'#a5c347' }}>
        Active
      </Link>
      <Link to="/input_form" style={{ borderRadius: '10%',  position:'fixed',right:'16%' ,color: '#ff236c'}}>
         details
      </Link>
      <Link to="/input_marks" style={{ borderRadius: '10%',  marginRight: '15px',position:'fixed',right:'10%',color: '#00d2dc' }}>
         marks
      </Link>
      <Link to="/listing_details" style={{ borderRadius: '10%',  marginRight: '15px',position:'fixed',right:'5%',color: '#a5c347' }}>
        view
      </Link>
    </nav>
  );
}

export default MyNavbar;
