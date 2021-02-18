import { useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

const Register = ({ login }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form className="register-form">
        <div className="form-group">
          <input type="text" id="uname" autoComplete="off" required />
          <label htmlFor="uname">UserName</label>
        </div>
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
        <button className="btn">Register</button>
      </form>
      <p>
        Already a user?{" "}
        <span onClick={() => login(true)} className="lbtn">
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
