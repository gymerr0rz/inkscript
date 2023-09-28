import styled from 'styled-components';

const ConfirmContainer = styled.div`
  position: fixed;
  width: 100%;
  text-align: center;
  background-color: #6364ff;
  padding: 10px 0;
  color: #fff;
  z-index: 99;
  h1 {
    font-weight: 300;
    font-size: 1rem;
    a {
      color: #fff;
      font-weight: 500;
      text-decoration: none;
    }
  }
`;

export { ConfirmContainer };
