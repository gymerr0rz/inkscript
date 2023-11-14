import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SERVER_URL from '../../config/config';
import Logo from '../../assets/logo/logowhite.png';

const options: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = useSignIn();

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('Creating account');
    e.preventDefault();

    axios
      .post(`${SERVER_URL}/auth/login`, {
        accountData: { email, password },
      })
      .then((response) => {
        const token = response.data.jwt_token;
        console.log(response.data.user);
        signIn({
          token,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: { username: response.data.user.username },
        });
        window.location.pathname = '/app';
      })
      .catch((err) => {
        toast.error(err.response.data.message, options);
      });
  }

  function onClick(e: React.MouseEvent<HTMLElement>) {
    const target = e.currentTarget;
    target.querySelector('input')?.focus();
  }

  return (
    <>
      <section className="mx-auto px-5 w-screen bg-[#121215] h-screen">
        <ToastContainer />
        <div className="flex justify-center items-center h-full flex-col">
          <div className="text-white flex items-center flex-col gap-2 justify-center">
            <img src={Logo} alt=" " className="max-w-[20px]" />
            <h1 className=" text-4xl font-bold tracking-tighter">INKSCRIPT</h1>
            <p className="w-[400px] text-center text-sm text-white/70">
              Organize your life, boost your productivity - all with our notes
              and Pomodoro app!
            </p>
          </div>
          <form
            id="login"
            onSubmit={onFormSubmit}
            className="flex justify-center flex-col items-center"
          >
            <div
              className="flex-col flex bg-[#0a0b0c] justify-center text-white px-5 min-w-[504px] min-h-[53px] rounded-md border-none font-black m-2 py-2"
              onClick={onClick}
            >
              <label htmlFor="email">EMAIL</label>
              <input
                className="bg-transparent outline-none font-medium"
                type="text"
                placeholder="john.doe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              className="flex-col flex bg-[#0a0b0c] justify-center text-white px-5 min-w-[504px] min-h-[53px] rounded-md border-none font-black m-2 py-2"
              onClick={onClick}
            >
              <label htmlFor="password">PASSWORD</label>
              <input
                className="bg-transparent outline-none font-medium"
                type="password"
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="my-5 py-3 px-8 rounded-md border border-[#0085ff] bg-[rgba(0,133,244,0.2)] text-white font-bold ">
              LOGIN
            </button>
          </form>
          <p className="text-white flex gap-1 text-sm">
            Don't have an account?
            <Link
              to="/auth/register"
              className="font-medium text-main hover:underline"
            >
              Register!
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
