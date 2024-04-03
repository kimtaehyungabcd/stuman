import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';

function MyNavbar() {
  const [years, setYears] = useState([]);
  const [error, setError] = useState(null);
  const delayTimeout = useRef(null);


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

  const handleAction = (e) => {
    const inputValue = e.target.value;
    clearTimeout(delayTimeout.current); // Clear any previous timeouts
    delayTimeout.current = setTimeout(() => {
        window.location.href = `both?enrollment_number=${inputValue}`;
    }, 1000); // Adjust the delay time (in milliseconds) as needed
};


  return (
    <nav style={{ height: '70px', padding: '15px', position: 'sticky', backgroundColor: 'white', width: '100%' }}>
      <Link to="/" style={{ borderRadius: '10%', position: 'fixed', color: '#a5c347' }}>
        logo
      </Link>
      <Link to="/" style={{ borderRadius: '10%', position: 'fixed', right: '30%', marginRight: '15px', marginLeft: '180px', color: '#a5c347' }}>
        Active
      </Link>
      <Link to="/input_form" style={{ borderRadius: '10%', position: 'fixed', right: '26%', color: '#ff236c' }}>
        details
      </Link>
      <Link to="/input_marks" style={{ borderRadius: '10%', marginRight: '15px', position: 'fixed', right: '20%', color: '#00d2dc' }}>
        marks
      </Link>
      
      <div style={{ position: 'fixed', right: '10%' }}>
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
            marginRight: '15px'
          }}
          onChange={(e) => window.location.href = e.target.value}
        >
          <option value="#">View</option>
          {years.map((year, index) => (
            <option key={index} value={`year?year=${year.year}`}>
              {year.year}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="enrollInput"
          name="enroll"
          placeholder='enrollement no'
          style={{ display: "inline-block", width: "80px" }}
          onChange={handleAction}
        />
      </div>
      <Link to="http://localhost/stuman/stumanlogin/login.html" style={{ borderRadius: '10%', position: 'fixed', right: '5%', marginRight: '15px', marginLeft: '180px', color: '#a5c347' }}>
        Login
      </Link>
    </nav>
  );
}

export default MyNavbar;
