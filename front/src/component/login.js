import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await loginRequest();
  };

  async function loginRequest() {
    try {
      const response = await fetch('http://localhost/stuman/back/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      

      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          localStorage.setItem('token', data.status);
          navigate('/');
        } else {
          // set error
        }
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div style={{
      backgroundImage: `url(${require('../img/login.jpg')})`, // Updated image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}>
      <form
        className="login-form"
        onSubmit={submitHandler}
        style={{
          textAlign: 'center',
          width: '350px',
          height: '350px',
          padding: '60px',
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
      justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', /* Slightly transparent white background */
          borderRadius: '10px',
          border: '2px solid black', // Border color set to black
        }}
      >
        <h2>Login</h2>
        <label>Username</label>
        <input type="text" value={username} onChange={usernameHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={passwordHandler} />
        <button type="submit" style={{marginTop:'20px'}}>Login</button>
        Don't have a account?<Link to="/register" style={{ color: '#61dafb', textDecoration: 'none', margin: '1px' }}> Register
        </Link>
        <Link
          to="/reset"
          style={{ color: '#61dafb', textDecoration: 'none', margin: '10px' }}
        >
          Reset Password
        </Link>
      </form>
    </div>
  );
      }  
