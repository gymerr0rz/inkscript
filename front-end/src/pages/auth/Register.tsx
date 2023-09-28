import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AuthContainer,
  AuthBox,
  AuthInputs,
  AuthBtn,
} from '../../styles/Auth.styled';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSignIn } from 'react-auth-kit';
import SERVER_URL from '../../config/config';

// Toasty Interface Options
const options = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

const RegisterPage = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const signIn = useSignIn();

  function onFormSubmit(e) {
    console.log('Creating account');
    e.preventDefault();

    axios
      .post(`${SERVER_URL}/auth/register`, {
        accountData: { username, email, password },
      })
      .then((data) => {
        toast.success(data.data.message, options);
        const token = data.data.token;
        signIn({
          token,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: { username: data.data.user.username },
        });
        window.location.pathname += '/setupProfile';
      })
      .catch((err) => {
        toast.error(err.response.data.message, options);
      });
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
            <div className="labels">
              <label htmlFor="email">EMAIL</label>
              <AuthInputs
                type="email"
                id="email"
                placeholder="john@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="labels">
              <label htmlFor="username">USERNAME</label>
              <AuthInputs
                type="text"
                placeholder="john1234"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="labels">
              <label htmlFor="password">PASSWORD</label>
              <AuthInputs
                id="password"
                type="password"
                placeholder="password123"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <AuthBtn type="submit" value="REGISTER" />
          </form>
          <p>
            Already have an account?
            <b>
              <Link to="/auth/login"> Login!</Link>
            </b>
          </p>
        </AuthBox>
      </AuthContainer>
    </>
  );
};

export default RegisterPage;
