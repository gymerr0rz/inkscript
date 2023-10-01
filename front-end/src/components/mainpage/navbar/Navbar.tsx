import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/logowhite.png';

const Navbar = () => {
  return (
    <nav className=" backdrop-blur-sm relative">
      <div className=" bg-gradient-to-r from-transparent via-main to-transparent absolute bottom-0 h-[1px] w-full"></div>
      <div className="text-white max-w-[1620px] mx-auto  grid grid-cols-3 items-center py-5">
        <div className="justify-self-start flex gap-2 items-center">
          <img src={Logo} alt=" " className="max-w-[20px]" />
          <h1 className=" text-sm font-bold tracking-tighter">INKSCRIPT</h1>
        </div>
        <ul className=" justify-self-center flex gap-5">
          <li>Product</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className=" justify-self-end">
          <Link
            to="/auth/login"
            className="bg-gradient-to-b from-main to-main/50 py-2 px-5 rounded-sm hover:bg-main/80 transition-colors"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
