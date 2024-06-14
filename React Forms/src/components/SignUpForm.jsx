import { useState } from "react"



export default function SignUpForm(){
    // syntax: const [object, setObject] = useState(initialState)
    // use ("") as initial state to represent empty string
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
            const json = await response.json();

        } catch (error) {
            setError(error.message);
        }
    }

return(
    // need to have h2 and form within div to prevent error
    <div>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}

    {/* onChange syntax: onChange = {(event) => {setObject(event.target.value)}} */}

    <form onSubmit={handleSubmit}>
        <label >
            Username: <input value = {username} onChange={(e) => {setUsername(e.target.value)}}/>
        </label>
        <label>
            Password: <input value = {password} onChange={(e) => {setPassword(e.target.value)}}/>
        </label>
        <button>Submit</button>
    </form>

    </div>
);

}

