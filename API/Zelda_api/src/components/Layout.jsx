import { Link } from "react-router-dom";

export default function Layout({children}){
    return (
        <>
        <header>
            <nav>
                <Link to="/">Hjem</Link>
                <Link to="Bosses">Bosses</Link>
                <Link to="Characters">Characters</Link>
                <Link to="Items">Items</Link>
            </nav>
        </header>
        {children}
        <footer>
            <p>@Zelda API forlesning 2025</p>
        </footer>
        </>
    )
}