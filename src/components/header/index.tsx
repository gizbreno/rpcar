import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import {FiUser,FiLogIn} from 'react-icons/fi'

export const Header = () => {
  const signed = false;
  const loadingAuth = false;
  return (
    <div  className="flex w-full items-center justify-center h-16 bg-white drop-shadow-sm mb-4">
      <header className="w-full flex justify-between max-w-7xl items-center px-4 mx-auto">
        <Link to="/">
          <img src={Logo} width={100} className="rounded-lg" />
        </Link>
        {!loadingAuth && signed && 
        
        <Link to="/dashboard">
        <div className="p-2 border-2 rounded-full border-gray-800"><FiUser size={22}/></div></Link>
        }
        {!loadingAuth && !signed && 
        <Link to="/login">
        <div className="p-2 border-2 rounded-full border-gray-800"><FiLogIn size={22}/></div></Link>}
      </header>
    </div>
  );
};
