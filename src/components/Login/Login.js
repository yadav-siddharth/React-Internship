import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { BiLogInCircle } from "react-icons/bi";
import { FaRegistered } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import {PiStudentBold} from 'react-icons/pi';
import {HiOfficeBuilding} from 'react-icons/hi';
import {MdWorkOutline,MdModelTraining} from 'react-icons/md';
import "./login.css";
import Connect from "../Connect/Connect";
import Location from "../Location/Location";


const intialState = { username: "", email: "", mobile: "", age: "", bio: "" };

function Login() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [formData, setFormData] = useState(intialState);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleClear = () => {
    setFormData(intialState);
  };

  const switchMode = () => {
    setIsSignIn((prevIsSingup) => !prevIsSingup);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmit(true);
    handleClear();
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(formData);
      alert("Registration Successful");
    }
  }, [errors]);

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^s@]{2,}$/i;
    const regexMobile = /^([+]\d{2})?\d{10}$/;

    if (!values.username) {
      errors.username = "Username is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a Valid Email Format";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile-Number is Required";
    } else if (!regexMobile.test(values.mobile)) {
      errors.mobile = "Invalid Mobile Number";
    }
    if (!values.age) {
      errors.age = "Age is Required";
    } else if (values.age < 20) {
      errors.age = "Minimum Age is 20";
    }
    if (!values.bio) {
      errors.bio = "Message is Required";
    }

    return errors;
  };

  return (
    <div className="login-container">
      <div className="section">
        <Navbar />
        <Connect/>
        <div className="form-container">
          <div className="form-left">
            <div className="form-style">
              <h2>Welcome To Recuriting</h2>
              <span>
                <PiStudentBold style={{ color: "#fff" }} /> Get Internship
              </span>
              <span>
                <MdWorkOutline style={{ color: "#fff" }} /> Full-Time Opportunity
              </span>
              <span>
                <MdModelTraining style={{ color: "#fff" }} /> Training Experience
              </span>
              <span>
                <HiOfficeBuilding style={{ color: "#fff" }} /> Professional Work-Life
              </span>
            </div>
          </div>

          <div className="form-right">
            <button className="right-button" onClick={switchMode}>
              {isSignIn ? (
                <FaRegistered style={{ color: "#fff" }} size={20} />
              ) : (
                <BiLogInCircle style={{ color: "#fff" }} size={20} />
              )}
            </button>
            <h2>{isSignIn ? "Login" : "Register"}</h2>
            {Object.keys(errors).length === 0 && isSubmit ? (
              <div className="succes-msg">
                <TiTickOutline size={20} style={{ color: "#069A8E" }} />
                Regitser Sucesss
              </div>
            ) : (
              ""
            )}
            <form
              action="submit"
              className="record-form"
              method="submit"
              onSubmit={handleSubmit}
            >
              {isSignIn ? (
                <>
                  <div className="input-class">
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    <p>{errors.username}</p>
                  </div>

                  <div className="input-class">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <p>{errors.email}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="input-class">
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    <p>{errors.username}</p>
                  </div>

                  <div className="input-class">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <p>{errors.email}</p>
                  </div>

                  <div className="input-class">
                    <input
                      type="number"
                      placeholder="Mobile Number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <p>{errors.mobile}</p>
                  </div>

                  <div className="input-class">
                    <input
                      type="number"
                      placeholder="Age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                    <p>{errors.age}</p>
                  </div>

                  <div className="input-class">
                    <input
                      type="text"
                      placeholder="Bio Message"
                      name="bio"
                      onChange={handleChange}
                    />
                    <p>{errors.bio}</p>
                  </div>
                </>
              )}
              <button className="submit-button">
                {isSignIn ? "Login" : "Connect"}
              </button>
            </form>
          </div>
        </div>
        <Location/>
      </div>
    </div>
  );
}

export default Login;
