import { useEffect, useState } from "react"

export default function Login({storageUser, setSignedIn, signedIn }){
    const [userLogin, setUserLogin] = useState([]);
    const[error, setError] = useState();

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setUserLogin((prev) => ({...prev, [inputName] : inputValue}))
        
    };
    const handleCkick = (e) => {
        e.preventDefault();
        const existingUser = JSON.parse(storageUser);
        const exists =
             userLogin.username === existingUser.username &&
             userLogin.password === existingUser.password;
        console.log(exists);
        exists ? setSignedIn(true) : setError("Brukername eller passord stemmer ikke ")

        sessionStorage.setItem("login", true)

    }

    


    return (
        <section>
            <h1>Login</h1>
            <form>
                <label htmlFor="">Brukernavn
                    <input type="text" placeholder="Thlaje..." name="username" onChange={handleChange}/>
                </label>
                <label htmlFor="">Passord
                    <input type="password" placeholder="**********" name="password" onChange={handleChange}/>
                </label>
                <button onClick={handleCkick} type="submit">Logg inn</button>
            </form>
            {error}
        </section>
    
)
}