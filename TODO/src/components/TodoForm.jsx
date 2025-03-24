import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      addTodo({ id: Date.now(), title, content });
      setTitle("");
      setContent("");
      
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>To do</label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />
        <label>Innhold</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} required />
        <button type="submit">Lag to do</button>
      </form>
    );
  }