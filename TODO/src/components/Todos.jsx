import Todo from "./Todo";

export default function Todos({ startTodos, setTodos }) {
    return (
      <section>
        {startTodos.map(todo => (
          <Todo
            key={todo.id}
            title={todo.title}
            content={todo.content}
            onRemove={() =>
              setTodos(prev => prev.filter(item => item.id !== todo.id))
            }
          />
        ))}
      </section>
    );
  }