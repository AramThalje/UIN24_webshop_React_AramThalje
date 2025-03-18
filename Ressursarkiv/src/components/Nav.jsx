import { Link } from "react-router-dom";



export default function Nav(){
    const informasjon = ((info) => {
        resources.map((res) => {
            res.category
        })
    })

    return (



        <header>
            <nav>
                <ul>
                    <li><Link to="/html">HTML</Link></li>
                    <li><Link to="/css">CSS</Link></li>
                    <li><Link to="/javascript">JAVASCRIPT</Link></li>
                    <li><Link to="/react">REACT</Link></li>
                    <li><Link to="/sanity">SANITY AND HEADLESS CMS</Link></li>

                </ul>
            </nav>
        </header>
    )

}
