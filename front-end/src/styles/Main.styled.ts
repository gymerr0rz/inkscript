import styled from 'styled-components';
import HeroB from '../assets/bg/asset.png';

const MainPageStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const HomeNavbar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 80%;
  height: 100px;
  color: #eee;
  z-index: 99;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    button {
      background-color: #6364ff;
      border: none;
      color: #fff;
      outline: none;
      width: 104px;
      height: 40px;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        transition: 100ms background-color ease-in-out;
        background-color: #5453d0;
      }
    }
  }
`;

const Hero = styled.div`
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 20px;
  h1 {
    font-size: 64px;
    width: 950px;
    margin: 0 auto;
  }
  p {
    font-size: 24px;
    font-weight: 300;
    width: 650px;
    margin: 0 auto;
  }

  .login {
    width: 180px;
    height: 60px;
    background-color: #6364ff;
    color: #fff;
    border: none;
    font-size: 1.5rem;
    border-radius: 10px;
    &:hover {
      transition: 100ms background-color ease-in-out;
      background-color: #5453d0;
    }
  }

  .register {
    width: 270px;
    height: 60px;
    background-color: #fff;
    color: #6364ff;
    border: none;
    font-size: 1.5rem;
    border-radius: 10px;
    &:hover {
      transition: 100ms background-color ease-in-out;
      background-color: #d0d0d0;
    }
  }
`;

const HeroTwo = styled.div`
  text-align: left;
  color: #fff;
  display: flex;
  flex-direction: color;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 20px;

  img {
    max-height: 670px;
    max-width: 670px;
  }

  .register {
    width: 270px;
    height: 60px;
    background-color: #6364ff;
    color: #fff;
    border: none;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      transition: 100ms background-color ease-in-out;
      background-color: #5453d0;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  &.hero {
    background-image: url(${HeroB});
    background-position: center bottom; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  button {
    cursor: pointer;
    transition: 100ms background-color ease-in-out;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  h1 {
    font-size: 48px;
    width: 500px;
  }
  p {
    font-size: 24px;
    width: 600px;
    font-weight: 300;
  }
`;

export {
  MainPageStyle,
  HomeNavbar,
  Container,
  Hero,
  HeroButtons,
  HeroTwo,
  Flex,
};
