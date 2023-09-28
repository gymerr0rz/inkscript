import styled from 'styled-components';

const PomodoroContainer = styled.div`
  min-width: 500px;
  height: 323px;
  background-color: #202123;
  border: 2px solid #2d2d2d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  span {
    font-size: 6rem;
    font-weight: 900;
  }
`;

const PomodoroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  button {
    width: 100px;
    background-color: #121215;
    border: none;
    height: 40px;
    font-weight: 800;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: background-color 100ms ease-in-out;

    &:hover {
      transition: background-color 100ms ease-in-out;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  .play.active {
    background-color: green !important;
  }
  .pause.active {
    background-color: purple !important;
  }
  .stop.active {
    background-color: red !important;
  }
`;
export { PomodoroContainer, PomodoroButtons };
