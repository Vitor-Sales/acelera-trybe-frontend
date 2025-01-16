/* eslint-disable @typescript-eslint/no-explicit-any */
import Context from "./Context"
import { useState } from "react";
import { fetchTodos, Todo } from "../api/todosApi";
import { putTodo, postTodo } from "../api/todosApi";

export type ProviderProps = {
  user: string;
  onLogin: (username: string) => void;
  getTodos: () => Promise<void>;
  todos: Todo[];
  loading: boolean;
  editTodos: (taskData: Todo) => void;
  addTodo: (task: string) => Promise<void>;
}

function Provider({children}: {children: React.ReactNode}) {  
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const onLogin = (username: string) => {
    setUser(username)
  }

  const getTodos = async () => {
    try {
      setLoading(true);
      const result = await fetchTodos();
      setTodos(result);
    } catch (error: any) {
      console.log('Tarefas indisponíveis', error);
      
    } finally {
      setLoading(false);
    }
  }

  const editTodos = async (taskData: Todo) => {
    const updatedTodos = todos.map((task) => {
      if (task.id === taskData.id) {
        task.completed = taskData.completed;
      }
      return task;
    })
    setTodos(updatedTodos);

    putTodo(taskData);
  }

  const addTodo = async (task: string) => {
    const newTask = await postTodo(task);
    setTodos([...todos, newTask]);
  }


  const values = {
    user,
    onLogin,
    getTodos,
    loading,
    todos,
    editTodos,
    addTodo,
  }
  

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default Provider;