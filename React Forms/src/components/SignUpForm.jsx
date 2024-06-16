import { useState } from "react"

// Navigate back to your SignUpForm component and deconstruct the setToken function from props
// Destructuring: add props as parameter for component. In this case, token. Make sure to include props in {} since that represents an object

export default function SignUpForm({token, setToken}){
    // syntax: const [object, setObject] = useState(initialState)
    // use ("") as initial state to represent empty string
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify( {
                        username,
                        password,
                 })
            });
            const result = await response.json();
            console.log(result);

            setToken(result.token);
            // clears inputs after we hit submit, stay within try {}
            setUsername("");
            setPassword("");
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
            Username: 
            <input value = {username} 
            onChange={(e) => {setUsername(e.target.value)}}
            />
        </label>
        <label>
            Password: 
            <input value = {password} 
                // type="password" hides text in text input!
            type="password"
            onChange={(e) => {setPassword(e.target.value)}}
            />
        </label>
        <button>Submit</button>
    </form>

    </div>
);

}

