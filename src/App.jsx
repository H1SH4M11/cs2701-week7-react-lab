import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// --- 1. Existing Components (Header & Sidebar) ---

function Header({ imgSrc, alt }) {
  return (
    <header>
      <img
        src={imgSrc}
        alt={alt}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </header>
  );
}

function Sidebar() {
  return (
    <aside>
      <input
        type="text"
        className="search"
        id="search"
        name="search"
        placeholder="Search"
      />
      <br />
    </aside>
  );
}

// --- 2. The New "Controlled" Registration Form ---

function RegistrationForm() {
  // State variables to hold form data (The "Controlled" part)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repPassword: '',
    buyer: false,
    seller: false,
    tos: false
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <section>
      <h2>Register</h2>
      <form className="center" noValidate onSubmit={handleSubmit}>
        <label className="textInput" htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required maxLength="50" 
        />
        <br /><br />

        <label className="textInput" htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <br /><br />

        <label className="textInput" htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required minLength="8" 
        />
        <br /><br />

        <label className="textInput" htmlFor="repPassword">Re-type password:</label>
        <input 
          type="password" 
          id="repPassword" 
          name="repPassword" 
          value={formData.repPassword} 
          onChange={handleChange} 
          required minLength="8" 
        />
        <br /><br />

        <input 
          type="checkbox" 
          id="buyer" 
          name="buyer" 
          checked={formData.buyer} 
          onChange={handleChange} 
        />
        <label htmlFor="buyer">I want to buy produce.</label>
        <br />

        <input 
          type="checkbox" 
          id="seller" 
          name="seller" 
          checked={formData.seller} 
          onChange={handleChange} 
        />
        <label htmlFor="seller">I want to sell produce.</label>
        <br /><br />

        <input 
          type="checkbox" 
          id="tos" 
          name="tos" 
          checked={formData.tos} 
          onChange={handleChange} 
          required 
        />
        <label htmlFor="tos">I agree to Terms & Privacy Policy.</label>
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </section>
  );
}

// --- 3. Simple Placeholder Pages ---

function Home() {
  return <section><h2>Welcome Home</h2><p>This is the home page.</p></section>;
}

function Login() {
  return <section><h2>Login</h2><p>Login form goes here.</p></section>;
}

function Help() {
  return <section><h2>Help</h2><p>How can we help you?</p></section>;
}

// --- 4. Layout Component (The frame for every page) ---

function Layout() {
  return (
    <>
      <Header imgSrc="/SharingFood.jpg" alt="Hands holding tomatoes" />
      {/* The Navigation Menu */}
      <nav style={{ backgroundColor: '#333', padding: '10px' }}>
        <ul className="navlist" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link></li>
          <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></li>
          <li><Link to="/help" style={{ color: 'white', textDecoration: 'none' }}>Help</Link></li>
        </ul>
      </nav>
      <main style={{ display: 'flex', marginTop: '20px' }}>
        <Sidebar />
        {/* Outlet renders the child route's component (Home, Register, etc.) */}
        <div style={{ width: '75%', padding: '20px' }}>
          <Outlet />
        </div>
      </main>
    </>
  );
}

// --- 5. Main App Component with Router ---

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<Login />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;