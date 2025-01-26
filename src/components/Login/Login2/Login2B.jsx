import { useState } from "react";
// import "./style.css";
import {
  RiUser3Line,
  RiLock2Line,
  RiEyeOffLine,
  RiEyeLine,
} from "react-icons/ri";
import bgImage from "./login-bg.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login">
      <img src={bgImage} alt="login background" className="login__img" />

      <form className="container">
        <h1 className="login__title">Login</h1>

        <div className="login__content">
          {/* Email Input */}
          <div className="login__box">
            <RiUser3Line className="login__icon" />
            <div className="login__box-input">
              <input
                type="email"
                required
                className="login__input"
                id="login-email"
                placeholder=" "
              />
              <label htmlFor="login-email" className="login__label">
                Email
              </label>
            </div>
          </div>

          {/* Password Input */}
          <div className="login__box">
            <RiLock2Line className="login__icon" />
            <div className="login__box-input">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="login__input"
                id="login-pass"
                placeholder=" "
              />
              <label htmlFor="login-pass" className="login__label">
                Password
              </label>
              <button
                type="button"
                className="login__eye"
                onClick={togglePasswordVisibility}
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
              </button>
            </div>
          </div>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="login__check">
          <div className="login__check-group">
            <input
              type="checkbox"
              className="login__check-input"
              id="login-check"
            />
            <label htmlFor="login-check" className="login__check-label">
              Remember me
            </label>
          </div>

          <a href="#" className="login__forgot">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button type="submit" className="login__button">
          Login
        </button>

        {/* Register Link */}
        <p className="login__register">
          Don&apos;t have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
