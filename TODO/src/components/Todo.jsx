export default function Todo({ title, content, onRemove }) {
    return (
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={onRemove}>Ferdig med to do</button>
      </article>
    );
  }