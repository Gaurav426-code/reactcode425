import React, { useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';


const Login = () => {
  const [isRegister, setIsRegister] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3001/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('authToken', token); // Save token in local storage
      navigate('/'); // Redirect to App 1's dashboard or another page
    } else {
      alert('Login successfully');
    }

    if (email === "stargauravthakur143@gmail.com" && password === "radha@1234") {
     // Navigate to the homepage
    } else {
      alert("Invalid login credentials");
    }

    if (isRegister) {
      if (!username || !email || !password || !confirmPassword) {
        setError('Please fill in all fields');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      console.log('Registering:', { username, email, password });

    
    } else {
      if (!email || !password) {
        setError('Please fill in all fields');

        return;
      }
      console.log('Logging in with:', { email, password });
    }
    
    setEmail('');
    setPassword('');
    setUsername('');
    setConfirmPassword('');
    setError('');
};
  

  return (
    <div className="login-register-container">
      <div className="form-box">
        <h2>{isRegister ? 'Register' : 'Login'}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {isRegister && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button type="submit" className="submit-btn"onClick={handleSubmit}>
            {isRegister ? 'Register' :<Link to='main'>Login</Link>  }
          </button>
        </form>

        <p className="toggle-form">
          {isRegister ? 'Already have an account? ' : 'Don’t have an account? '}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Login' : 'Register'}
            </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
