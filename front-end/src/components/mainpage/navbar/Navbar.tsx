import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="text-white max-w-[1620px] mx-auto border-b border-white/20 grid grid-cols-3 items-center py-5">
      <h1 className=" justify-self-start text-3xl font-bold tracking-tighter">
        INKSCRIPT
      </h1>
      <ul className=" justify-self-center flex gap-5">
        <li>Product</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className=" justify-self-end">
        <Link
          to="/auth/login"
          className="bg-main py-2 px-5 rounded-xl hover:bg-main/80 transition-colors"
        >
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
