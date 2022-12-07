import "../styles/account.css";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="Account">
      <Link to="/account">Your Account</Link>
    </div>
  );
}

export default Account;
