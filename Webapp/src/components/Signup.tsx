
import signuploginstyles from "../styles/signuploginstyle.module.css"

import Button from "./Button";


type SignupProps = {
  setShowSignUp: (show: boolean) => void;
}


const Signup = ({ setShowSignUp }: SignupProps) => {
  return (
    <div className={signuploginstyles.mainSigncontainer}>
      <h1 className={signuploginstyles.title}>Create Account</h1>
      <div  className={signuploginstyles.formcontainer}>
        <form action="">
          <label htmlFor="Firstname">
            First Name:
            <input type="text" name="firstname" id="Firstname" placeholder="First Name" required />
          </label>

          <br />
          <label htmlFor="Lastname">
            Last Name:
            <input type="text" name="lastname" id="Lastname" placeholder="Lastname" required/>
          </label>

          <br />
          <label htmlFor="Username">
            Username:
            <input type="text" name="username" id="Username" placeholder="Username" required />
          </label>

          <br/>
          <label htmlFor="Password">
            Password:
            <input type="password" name="pwd" id="Password" placeholder="Password" required />
          </label>

          <br />
          <label htmlFor="ConfirmPassword">
            Confirm Password:
            <input type="password" name="ConfirmPassword" placeholder="Password" required />
          </label>

          <Button
            text="Signup"
            className={signuploginstyles.bttn}
          />
        </form>
      </div>
      <h2
        className={signuploginstyles.linktab}
        onClick={() => setShowSignUp(false)}
      >
        Login
      </h2>


    </div>
  );
};


export default Signup
