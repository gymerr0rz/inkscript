import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MainPageStyle,
  HomeNavbar,
  Container,
  Hero,
  HeroTwo,
  HeroButtons,
  Flex,
} from '../styles/Main.styled';
import Book from '../assets/undraw_design_notes_re_eklr.svg';
import axios from 'axios';
import { useAuthHeader } from 'react-auth-kit';
import SERVER_URL from '../config/config';

const MainPage = () => {
  const [active, setActive] = useState<boolean | null>(null);

  const header = useAuthHeader();

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .get(`${SERVER_URL}/user/getUser`)
      .then(() => {
        window.localStorage.setItem('isLoggedIn', 'true');
        setActive(true);
      })
      .catch((err) => {
        console.log(err);
        window.localStorage.setItem('isLoggedIn', 'false');
        setActive(false);
      });
  }, []);

  return (
    <>
      <Container className="hero">
        <MainPageStyle>
          <HomeNavbar>
            <h1>INKWELL</h1>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>
                {!active ? (
                  <Link to="/auth/login">
                    <button>Log in</button>
                  </Link>
                ) : (
                  <Link to="/app">
                    <button>Dashboard</button>
                  </Link>
                )}
              </li>
            </ul>
          </HomeNavbar>
          <Hero>
            <h1>Unleashing your creativity, one idea at a time.</h1>
            <p>
              Social productivity that puts you back in control. Connect,
              create, and collaborate with like-minded individuals in a safe and
              private environment. Join us and experience a new kind of social
              media.
            </p>
            <HeroButtons>
              <Link to="/auth/login">
                <button className="login">Log in</button>
              </Link>
              <Link to="/auth/register">
                <button className="register">Create account</button>
              </Link>
            </HeroButtons>
          </Hero>
        </MainPageStyle>
      </Container>

      {/* Second Hero */}
      <Container>
        <MainPageStyle>
          <HeroTwo>
            <Flex>
              <h1>Everything you need all in one application</h1>
              <p>
                Inkwell is your all-in-one productivity application. With
                features like note-taking, task management, and the Pomodoro
                technique, Inkwell simplifies your workflow and boosts your
                productivity. Say goodbye to juggling multiple apps and hello to
                a streamlined experience that helps you stay focused and achieve
                your goals.
              </p>
              <Link to="/auth/register">
                <button className="register">Create account</button>
              </Link>
            </Flex>
            <img src={Book} alt="" />
          </HeroTwo>
        </MainPageStyle>
      </Container>
    </>
  );
};

export default MainPage;
