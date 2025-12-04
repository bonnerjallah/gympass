
import signuploginstyles from "../styles/signuploginstyle.module.css"

import Button from "./Button";


type LoginProps = {
  setShowSignUp: (show: boolean) => void;
}

const Login = ({ setShowSignUp }: LoginProps) => {
  return (
    <div className={signuploginstyles.mainLogincontainer}>
      <h1 className={signuploginstyles.title}>Login</h1>
      <div className={signuploginstyles.formcontainer}>
        <form>
          <label htmlFor="Username">Username:
            <input type="text" name="username" id="Username" placeholder="Username" required />
          </label>
          
          <br />
          <label htmlFor="Password">Password:
            <input type="password" name="pwd" id="Password" placeholder="Password" required />
          </label>
          <br />

          <Button
            text="Login"
            className={signuploginstyles.bttn}
          />
        </form>
      </div>
      <h2
        className={signuploginstyles.linktab}
        onClick={() => setShowSignUp(true)}
      >
        Create an Account 
      </h2>
    </div>
  );
};


export default Login
