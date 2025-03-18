import { Link } from "react-router-dom";

import "../styles/layout.scss";
import { Children } from "react";

export default function Layout({children, signedIn, setSignedIn}){
    return handleLogout = () => {
        sessionStorage.setItem
        setSignedIn(false)
    };
    return (
        <>
        
        <header>
            <nav>
                <Link to="/" id="logo">Connectis</Link>
                <ul>
                    {signedIn ? (
                    <>
                    <li>Username</li>
                    </>
                    ) : (
                    <>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="signup">Signup</Link></li>
                    </>
                    )}
                </ul>
            </nav>
            
        </header>
        {children}
        <footer>
            
            &copy; 2022 My Website. All rights reserved.
        </footer>
        </>
    )

}