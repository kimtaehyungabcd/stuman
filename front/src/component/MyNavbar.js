import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MyNavbar() {
  const [years, setYears] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/stuman/back/year.php');
      setYears(response.data);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

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
       <Link style={{ borderRadius: '10%', padding: 0, margin: 0, textDecoration: 'none', marginRight: '15px', position: 'fixed', right: '5%', color: '#00d2dc' }}>
      <select 
        style={{ 
          appearance: 'none', 
          border: 'none', 
          fontSize: '15px',
          background: 'none', 
          padding: 5, 
          margin: 0, 
          color: '#a5c347',
          borderRadius: '10%', 
          position: 'fixed', 
          right: '5%', 
          marginRight: '15px', 
          marginLeft: '180px' 
        }}
        onChange={(e) => window.location.href = e.target.value}
      >
        <option value="#">view </option>
        {years.map((year, index) => (
          <option key={index} value={`/year?=${year.year}`}>
            {year.year}
          </option>
        ))}
      </select>
      </Link>
    </nav>
  );
}

export default MyNavbar;
