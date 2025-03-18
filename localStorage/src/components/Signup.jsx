import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const [user, setUser] = useState([]);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        setUser((prev) => ({...prev, [inputName] : inputValue}))
        console.log(user);
    }

    const handleClick = (e) => {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/login")
    }
    return (
        <section>
        <h1>Signup</h1>
        <form>
            <label>
                Epost
                <input
                name="email"
                onChange={handleChange} type="email" placeholder="Thalje@hiof.no..." />
            </label>
            <label>
                Fultnavn
                <input
                name="name"
                onChange={handleChange} type="text" placeholder="Thlaje...." />
            </label>
            <label>
                Brukernavn
                <input
                name="username"
                onChange={handleChange} type="text" placeholder="Thlaje..."/></label>
            <label>
                Passord
                <input
                name="password"
                onChange={handleChange} type="password" placeholder="**********"/></label>
            <button onClick={handleClick} type="submit">Registrer</button>
        </form>
    </section>

    )
}