import { useContext, useEffect } from "react";
import Context from "../context/Context";

function Login() {

  const { user, loading, todos, getTodos } = useContext(Context);

  useEffect(() => {
    if (!todos.length) {
      getTodos();
    }
  }, []);

  return (
    <>
      <h1>Welcome, {user}!</h1>
      {/* <img src="" alt="" /> */}
      <button>Add New Task</button>
      <p>Daily Tasks</p>
      <ul>
        {loading ? <p>loading...</p> : todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <span>{todo.value}</span>
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Login;