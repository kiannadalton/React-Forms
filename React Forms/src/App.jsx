import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import ShowUsername from './components/ShowUsername'

export default function App() {
  // create token and setToken variables with useState. Set its initial value to null.
    const [token, setToken] = useState(null);


  return (
    <div>
      {/* Pass the setToken function to the SignUpForm component, and then pass the token value to the Authenticate component. This will allow us to set the token with our API response, and read/send the token back in our Authenticate component. */}
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken}/>
      <ShowUsername token={token} setToken={setToken}/>
    
    </div>
  )
}
