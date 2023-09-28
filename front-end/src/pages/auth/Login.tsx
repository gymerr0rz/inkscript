import { useState } from 'react';
import {
  AuthContainer,
  AuthBox,
  AuthInputs,
  AuthBtn,
} from '../../styles/Auth.styled';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SERVER_URL from '../../config/config';

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
// const cookies = new Cookies();

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
      <AuthContainer>
        <ToastContainer />
        <AuthBox>
          <h1>INKWELL</h1>
          <p>
            Organize your life, boost your productivity - all with our notes and
            Pomodoro app!
          </p>
          <form id="login" onSubmit={onFormSubmit}>
            <div className="labels" onClick={onClick}>
              <label htmlFor="email">EMAIL</label>
              <AuthInputs
                type="text"
                placeholder="john@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="labels" onClick={onClick}>
              <label htmlFor="password">PASSWORD</label>
              <AuthInputs
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <AuthBtn type="submit" value="LOGIN" />
          </form>
          <p>
            Don't have an account?
            <b>
              <Link to="/auth/register"> Register!</Link>
            </b>
          </p>
        </AuthBox>
      </AuthContainer>
    </>
  );
};

export default LoginPage;
