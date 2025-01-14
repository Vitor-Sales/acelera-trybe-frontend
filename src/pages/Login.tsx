import { useState } from "react";

function Login() {

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
  }

  return (
    <>
      <h1>Welcome</h1>
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="username"
          name="username"
          placeholder="Enter your username"
          onChange={handleChange}
        />
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <a href="#">Forgot Password</a>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default Login;