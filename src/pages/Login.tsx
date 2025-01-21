import { useContext, useState } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";

function Login() {

  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const [disable, setDisable] = useState(true);

  const navigate = useNavigate();

  const { onLogin } = useContext(Context);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);

    if (input.password.length >= 6 
      && /[A-Z]/.test(input.password) 
      && /[a-z]/.test(input.password) 
      && /[0-9]/.test(input.password) 
      && /[!@#$%^&*(),.?":{}|<>]/.test(input.password)) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(input.username);
    navigate('/todo');
  }

  return (
    <>
      <h1>Welcome</h1>
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text" 
          id="username"
          name="username"
          placeholder="Enter your username"
          onChange={handleChange}
          required
        />
        <input
          className="text-input"
          type="password" 
          id="password" 
          name="password" 
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />
        <a href="#">Forgot Password?</a>
        {/* <button type="submit" className="button">Sign In</button> */}
        <div className="password-requirements">
          <p>The password must have:</p>
          <span className={/[A-Z]/.test(input.password) ? 'pass' : 'not-pass' } >Uppercase letter</span>
          <span className={/[a-z]/.test(input.password) ? 'pass' : 'not-pass' }>Lowercase letter</span>
          <span className={/[0-9]/.test(input.password) ? 'pass' : 'not-pass' }>Number</span>
          <span className={/[!@#$%^&*(),.?":{}|<>]/.test(input.password) ? 'pass' : 'not-pass' }>Special algorism</span>
          <span className={input.password.length >= 6 ? 'pass' : 'not-pass' }>More than 6 characters</span>
        </div>
        {/* <Button text="Sign In" onClick={() => {}} /> */}
        <button className="button" disabled={disable}>Sign In</button>
      </form>
    </>
  );
}

export default Login;