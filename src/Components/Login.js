import { useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const Login = ({ show, login }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <input type="email" id="email" autoComplete="off" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group icon">
          {visible ? (
            <input
              type="text"
              id="password"
              value={value}
              onChange={(e) => changeHandler(e)}
              autoComplete="off"
              required
            />
          ) : (
            <input
              type="password"
              id="password"
              value={value}
              onChange={(e) => changeHandler(e)}
              autoComplete="off"
              required
            />
          )}
          <label htmlFor="password">Password</label>
          <span>
            {!visible ? (
              <BsFillEyeSlashFill
                onClick={() => setVisible(true)}
                className="eye"
              />
            ) : (
              <BsFillEyeFill
                onClick={() => setVisible(false)}
                className="eye"
              />
            )}
          </span>
        </div>
        <p className="forgot">Forgot password?</p>
        <button onClick={() => show(true)} className="btn">
          Login
        </button>
      </form>
      <p>
        Create a Account?{" "}
        <span onClick={() => login(false)} className="lbtn">
          Register Here
        </span>
      </p>
    </div>
  );
};

export default Login;
