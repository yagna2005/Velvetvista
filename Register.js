import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const userExists = storedUsers.some((user) => user.email === email);

    if (userExists) {
      alert('User already exists. Please choose a different email.');
      return;
    }

    const newUser = { name, email, password, gender };
    const updatedUsers = [...storedUsers, newUser];

    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

    setName("");
    setEmail("");
    setPassword("");
    setGender("");
  };

  return (
    <section style={{ marginTop: "50px" }} className="contact_section long_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form_container">
              <div className="heading_container">
                <h2>Register Here</h2>
              </div>
              <form onSubmit={handleRegistration}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
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
                <div className="form-group">
                  <select
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="btn_box">
                  <button type="submit">REGISTER</button>
                </div>
                <div>
                  <span>
                    Already registered? &nbsp;&nbsp;
                    <Link to="/login">Login Here </Link>
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
