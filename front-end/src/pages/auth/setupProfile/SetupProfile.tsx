import { useEffect, useState } from 'react';
import {
  SetupContainer,
  Introduction,
  Select,
  Buttons,
} from '../../../styles/setupProfile/setup.styled';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';
import { Link } from 'react-router-dom';
import SERVER_URL from '../../../config/config';

const SetupProfile = () => {
  const [user, setUser] = useState('{User}');
  const header = useAuthHeader();

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .get(`${SERVER_URL}/user/getUser`)
      .then((user) => {
        const data = user.data;
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRetry = () => {
    axios
      .get(`${SERVER_URL}/auth/retry`)
      .then((response) => console.log(response));
  };

  return (
    <>
      {user.email_confirmed ? (
        <SetupContainer>
          <Introduction>
            <h1>
              Welcome <b>{user.username}</b>!
            </h1>
            <p>
              Personalize your account and make it easier for others to
              recognize you.
            </p>
          </Introduction>
          <Select>
            <div className="container">
              <div className="profileimage">
                <label for="files">Select Profile Image</label>
                <input type="file" name="" id="files" />
              </div>
            </div>
          </Select>
          <Buttons>
            <Link to="/app">
              <button>SKIP</button>
            </Link>
            <Link to="/app">
              <button>CONTINUE</button>
            </Link>
          </Buttons>
        </SetupContainer>
      ) : (
        <div>
          {!user.email_confirmed ? (
            <SetupContainer>
              <Introduction>
                <p>Confirming email address...</p>
                <p>
                  When you have confirmed the email, please refresh the site.
                </p>
                <a onClick={() => handleRetry()}>Send request.</a>
              </Introduction>
            </SetupContainer>
          ) : null}
        </div>
      )}
    </>
  );
};

export default SetupProfile;
