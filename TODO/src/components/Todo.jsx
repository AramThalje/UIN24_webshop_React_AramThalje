import "../styles/todo.scss"
export default function Todo({title, content}){
    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
            <button>Ferdi med to do</button>
        </article>
    )
}