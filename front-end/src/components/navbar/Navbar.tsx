import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavButton from './buttons/NavButton';
import User from '../user/User';
import Logo from '../../assets/logo/logo4.png';

const Navbar = () => {
  function currentButton(code: string): string | null {
    const navbarButtons: Record<string, string> = {
      Home: 'app',
      Tasks: 'apptasks',
      Notes: 'appnotes',
      Settings: 'appsettings',
    };
    return navbarButtons[code] || null;
  }

  useEffect(() => {
    const page = window.location.pathname.split('/').join('');
    const buttons = document.querySelector('.navBtn')?.childNodes;
    buttons?.forEach((btn) => {
      const child = btn.childNodes[0] as HTMLElement;
      const target = child.innerText;
      const curr = currentButton(target);
      if (curr === page) {
        buttons.forEach((a) => {
          const b = a.childNodes[0] as HTMLElement;
          b.classList.remove('!text-main');
        });
        const childNode = btn.childNodes[0] as HTMLElement;
        console.log(childNode);
        childNode.classList.add('!text-main');
        childNode.classList.add(':after');
      }
    });
  });

  return (
    <>
      <div className="absolute mr-[500px] h-screen min-w-[300px] bg-[#202123]">
        <div className="relative text-center flex flex-col h-full w-full bg-[#202123] text-white">
          <div className="flex gap-5 h-full justify-between py-5 flex-col">
            <div className=" mt-12 flex w-full justify-center items-center flex-col">
              <img
                src={Logo}
                alt=""
                id="logo"
                className="h-[50px] w-[50px]  mb-2"
              />
              <h1 className="text-3xl font-bold tracking-tight">Inkscript</h1>
              <p className="uppercase text-sm font-light">Workspace</p>
              <div className="navBtn flex justify-between items-center mt-10 flex-col">
                <Link to="/app">
                  <NavButton icon="Home" name="Home" />
                </Link>
                <Link to="/app/tasks">
                  <NavButton icon="Check" name="Tasks" />
                </Link>
                <Link to="/app/notes">
                  <NavButton icon="Book" name="Notes" />
                </Link>
                <Link to="/app/settings">
                  <NavButton icon="Settings" name="Settings" />
                </Link>
              </div>
            </div>
            <User />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
