import { Link } from "react-router-dom";
import Logo from "../../assets/logot.png";
import {FiUser,FiLogIn} from 'react-icons/fi'

export const Header = () => {
  const signed = false;
  const loadingAuth = false;
  return (
    <div  className="w-full flex">
      <header>
        <Link to="/">
          <img src={Logo} />
        </Link>
        <Link to="/dashboard">
        <FiUser size={23}/></Link>
      </header>
    </div>
  );
};
