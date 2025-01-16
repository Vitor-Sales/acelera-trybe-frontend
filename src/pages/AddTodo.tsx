import { useContext, useState } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
      <h1>Welcome, {user}</h1>
      <p>Add your new task</p>
      <form 
        className="login-form"
        onSubmit={handleSubmit}>
        <input 
          name="task"
          id="task"
          value={task}
          type="text"
          onChange={handleChange}
          />
        <button>Add to list</button>
      </form>
    </>
  );
}

export default Login;