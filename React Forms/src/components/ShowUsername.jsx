import { useState } from "react"

// You already passed in the token variable as a prop, so now navigate to your Authenticate component and deconstruct it from props.
// You now have access to the token and can pass it along to the /authenticate API endpoint.

export default function ShowUsername({token}){
    // import useState when using useState
    const [error, setError] = useState(null);
    const [getUsername, setGetUsername] = useState(null);

    // Bearer Token used for authentication, uses keyword `Bearer ${}`
    const handleUserClick = async () => {
        try {
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const result = await response.json();
                // pass the message property of your API result to setSuccessMessage.
                console.log(result);
                setGetUsername(result.data.username);
                // setSuccessMessage(result.data.username);

        } catch (error) {
            setError(error.message);
        }
    }

    return(
        <div>
            <h2>Username:</h2>
                {/* conditionally render the error in a p tag if the error is a truthy value */}
            {getUsername && <p>{getUsername}</p>}
            {error && <p>{error}</p>}


            <button onClick={handleUserClick}>Show Username!</button>
        </div>

    )
}