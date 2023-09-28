import styled from 'styled-components';

const AuthContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #121215;
`;

const AuthBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 644px;
  height: 495px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-weight: 900;
    font-size: 64px;
    line-height: 77px;
    color: #ffffff;
  }
  p {
    color: #fff;
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .labels {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    padding: 0 20px;
    min-width: 504px;
    min-height: 63px;
    border-radius: 10px;
    background-color: #0a0b0c;
    border: none;
    font-weight: 900;
    margin: 10px;
    cursor: text;
    label {
      cursor: text;
    }
  }
`;

const AuthInputs = styled.input`
  background-color: #0a0b0c;
  border: none;
  color: #fff;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

const AuthBtn = styled.input`
  cursor: pointer;
  margin: 20px 0 20px 0;
  padding: 20px 90px;
  border: 1px #0085ff solid;
  border-radius: 10px;
  background-color: rgba(0, 133, 255, 0.2);
  color: #fff;
  font-weight: 700;
  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export { AuthContainer, AuthBox, AuthInputs, AuthBtn };
