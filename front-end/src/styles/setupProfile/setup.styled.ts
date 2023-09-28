import styled from 'styled-components';

const SetupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Introduction = styled.div`
  text-align: center;
  h1 {
    font-size: 4rem;
    color: #fff;
    font-weight: 600;
    b {
      color: #6364ff;
      font-weight: 900;
      text-transform: uppercase;
    }
  }
  p {
    font-size: 1rem;
    color: #8b8b8b;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  button {
    border: 2px solid #6364ff;
    color: #6364ff;
    font-weight: 900;
    background-color: transparent;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 100ms ease-in-out background-color, color 100ms ease-in-out;
    &:hover {
      transition: 100ms ease-in-out background-color, color 100ms ease-in-out;
      background-color: #6364ff;
      color: #fff;
    }
  }
`;

const Select = styled.div`
  display: flex;
  width: 482px;
  gap: 10px;
  height: 300px;
  flex-direction: column;
  .container {
    display: flex;
    flex-direction: row;
    gap: 10px;
    overflow: hidden;
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  input[type='file'] {
    visibility: hidden;
    color: transparent;
  }
  .profileimage {
    width: 300px;
    background-color: #09090a;
    height: 100%;
    border-radius: 10px;
    label {
      width: 100%;
      height: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
    }
  }
`;

export { SetupContainer, Introduction, Select, Buttons };
