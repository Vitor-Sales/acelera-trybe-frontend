import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { Todo } from "../api/todosApi";

function Login() {

  const { user, loading, todos, getTodos, editTodos } = useContext(Context);

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
      <h1>Welcome, {user}!</h1>
      {/* <img src="" alt="" /> */}
      <button>Add New Task</button>
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