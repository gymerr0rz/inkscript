import styled from 'styled-components';

const ShowContainer = styled.div`
  position: fixed;
  background-color: #2e2e2e;
  z-index: 99;
  width: 250px;
  left: 25px;
  top: 250px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* height: 100%; */
  border-radius: 0px 0px 10px 10px;
  h1 {
    font-size: 18px;
    font-weight: 300;
  }
  p {
    font-size: 14px;
    font-weight: 300;
  }
  cursor: pointer;
`;

const UserImage = styled.img`
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  min-width: 50px;
  min-height: 50px;
  position: relative;
`;

const ShowInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const User = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  gap: 20px;
`;

export { ShowContainer, ShowInfo, UserImage, ImageContainer, User };
