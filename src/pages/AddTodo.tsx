import { useContext, useState } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/Button";
import Banner from "../components/Banner";
import banner from "../assets/online-medical-consultation-male-svgrepo-com.svg"


function Login() {
  const { user, addTodo } = useContext(Context);
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTask(target.value); 
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      addTodo(task);
      Swal.fire({
        title: "Success!",
        text: "Task added!!!",
        icon: "success",
        timer: 1500,
      });
    }
    navigate('/todo');
  }

  return (
    <>
      <h1>Welcome, {user ? user : 'guest'}!</h1>
      <Banner src={banner} alt='Add To Do Banner'></Banner>
      <p>Add your new task</p>
      <form 
        className="login-form"
        onSubmit={handleSubmit}>
        <input
          className="text-input"
          name="task"
          id="task"
          value={task}
          type="text"
          onChange={handleChange}
          />
        <Button text="Add to list" onClick={() => {}} />
      </form>
    </>
  );
}

export default Login;