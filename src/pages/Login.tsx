import { useContext, useState } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Login() {

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const { onLogin } = useContext(Context);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    
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
        />
        <input
          className="text-input"
          type="password" 
          id="password" 
          name="password" 
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <a href="#">Forgot Password</a>
        {/* <button type="submit" className="button">Sign In</button> */}
        <Button text="Sign In" onClick={() => {}} />
      </form>
    </>
  );
}

export default Login;