import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to="/signup">
        <button className="first">Create Account</button>
      </Link>
      <Link to="/login">
        <button className="second">Already Registered? Login</button>
      </Link>
    </div>
  );
}

export default Welcome;