import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { Todo } from "../api/todosApi";
import { useNavigate } from "react-router-dom";
import Pentagon from "../components/Pentagon";

function Login() {
  const { user, loading, todos, getTodos, editTodos } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (!todos.length) {
      getTodos();
    }
  }, []);

  const handleChange = (todo: Todo) => {
    editTodos({...todo, completed: !todo.completed});
  }


  return (
    <>
      <Pentagon />
      <h1>Welcome, {user}!</h1>
      {/* <img src="" alt="" /> */}
      <button onClick={ () => navigate('/todo/add')}>Add New Task</button>
      <p>Daily Tasks</p>
      <ul>
        {loading ? <p>loading...</p> : todos.map(todo => (
          <li key={todo.id}>
            <input
            type="checkbox" 
            value={todo.value} 
            checked={todo.completed} 
            onChange={() => handleChange(todo)}
            />
            <span>{todo.value}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Login;