import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import "./styles/nav.scss"
import "./styles/todo.scss"
import "./styles/todoForm.scss"

function App() {
  const startTodos = [
    {
      id: 0,
      title: "Lage middag",
      content:
        "Skal lage spaghetti med kjøttsaus og parmasan, husk å handle på vei hjem fra jobb!",
    },
  ];

  const [todos, setTodos] = useState(startTodos);

  return (
    <>
      <Nav username="Aram" />
      <main>
        <h1>To do app</h1>
        <TodoForm addTodo={todo => setTodos(prev => [...prev, todo])} />
        <Todos startTodos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;