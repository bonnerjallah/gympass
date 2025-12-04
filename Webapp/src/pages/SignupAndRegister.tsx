import { useState } from "react"

import Signup from "../components/Signup"
import Login from "../components/Login";

// STYLES 🎨
import signuploginstyles from "../styles/signuploginstyle.module.css"

const SignupAndRegister = () => {

    const [showSignUp, setShowSignUp] = useState(false);



  return (
    <div className={signuploginstyles.pagecontainer}>
        {showSignUp ? (
            <Signup  setShowSignUp={setShowSignUp} />
        ) : (
            <Login setShowSignUp={setShowSignUp} />
        )}
    </div>
  )
}

export default SignupAndRegister
