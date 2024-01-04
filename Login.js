import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Hardcoded username and password for simplicity
    const hardcodedUsername = 'Yagna';
    const hardcodedPassword = '123';

    if (email === hardcodedUsername && password === hardcodedPassword) {
      if (rememberMe) {
        // Store user information in local storage
        localStorage.setItem('username', email);
      }
      // Navigate to the landing page
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <section style={{ marginTop: "50px" }} className="contact_section long_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form_container">
              <div className="heading_container">
                <h2>Log in</h2>
              </div>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="btn_box">
                  <button type="submit">LOGIN</button>
                </div>
                <br />
                <br />
                <div>
                  <span>
                    If you have not registered? &nbsp;&nbsp;
                    <Link to="/register">Click Here </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
