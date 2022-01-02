import React from "react";
import { useHistory } from "react-router";

interface Props {
  setisAutheticated: Function;
}

const Login: React.FC<Props> = ({ setisAutheticated }) => {
    const history = useHistory();

  const handleLogin = () => {
    console.log('clickd');
    setisAutheticated(true);
    history.push('/quotes')
  };
  return (
    <div className="login">
      <h2 className="title">#arbites-quotes</h2>
      <div className="login-form">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="text" className="form-field" />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" className="form-field" />
        </div>

        <button className="form-btn" onClick={handleLogin}>
          {" "}
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
