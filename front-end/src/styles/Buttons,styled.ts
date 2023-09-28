import styled from 'styled-components';

const StyledButton = styled.button`
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

export { StyledButton };
