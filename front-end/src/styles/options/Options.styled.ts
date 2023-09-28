import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  right: -240px;
  top: 0;
  z-index: 99;
  width: 250px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(27, 27, 27, 0.5);
  border: 1px solid #494949;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  flex-direction: column;
  .trash {
    color: #ea8484;
  }
  li {
    list-style: none;
    button {
      background-color: transparent;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: none;
      width: 100%;
      border-radius: 10px;
      transition: 100ms background-color ease-in-out;
      padding: 10px;
      &:hover {
        border-radius: 10px;
        transition: 100ms background-color ease-in-out;
        background-color: #323131;
      }
    }
  }
`;

const SettingsOptions = styled.div`
  position: absolute;
  bottom: 100px;
  z-index: 99;
  left: 30px;
  width: 250px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(27, 27, 27, 0.5);
  border: 1px solid #494949;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  flex-direction: column;
  .trash {
    color: #ea8484;
  }
  li {
    list-style: none;
    button {
      background-color: transparent;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: none;
      width: 100%;
      border-radius: 10px;
      transition: 100ms background-color ease-in-out;
      padding: 10px;
      &:hover {
        border-radius: 10px;
        transition: 100ms background-color ease-in-out;
        background-color: #323131;
      }
    }
  }
`;

export { Container, SettingsOptions };
