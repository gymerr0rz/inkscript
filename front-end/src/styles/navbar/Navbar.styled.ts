import styled from 'styled-components';

const NavbarNoProps = styled.button`
  position: relative;
  height: 50px;
  width: 90%;
  margin: 0 auto;
  outline: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  color: #fff;
  background-color: transparent;
  border-radius: 10px;
  transition: background-color 100ms ease-in-out;
  &:hover {
    transition: background-color 100ms ease-in-out;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const NavbarButton = styled.button`
  svg {
    stroke: #848486;
  }
  height: 50px;
  width: 250px;
  margin: 0 auto;
  outline: none;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  gap: 20px;
  color: #848486;
  font-weight: 500;
  background-color: transparent;
  border-radius: 10px;
  transition: background-color 100ms ease-in-out;
  &:hover {
    transition: background-color 100ms ease-in-out;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const NavbarContainer = styled.div`
  position: relative;
  text-align: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #202123;
  h1 {
    color: #fff;
  }
  p {
    margin-top: -10px;
    color: #6a6a6a;
    font-weight: lighter;
    font-size: 20px;
  }
`;

const NavbarInnerContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  justify-content: space-between;
  padding: 20px 0;
  flex-direction: column;
`;

const NavLogo = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #logo {
    height: 50px;
    width: 50px;
    margin-bottom: 10px;
  }
`;

const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SearchIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 250px;
  height: 50px;
  background-color: #3a3a3a;
  position: relative;
  border: 2px solid #484848;
  margin: 20px auto;
  border-radius: 10px;

  input {
    outline: none;
    background-color: #3a3a3a;
    border: none;
    color: #fff;
    width: 100%;
    height: 100%;
    /* position: relative; */
  }
`;

const NavLinks = styled.div`
  a {
    text-decoration: none;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
  button.active {
    svg {
      stroke: #fff;
    }
    color: #fff;
    ::before {
      position: absolute;
      left: 0;
      height: 50px;
      width: 50px;
      content: '';
      color: #fff;
      border-left: 3px solid rgb(99, 100, 255);
    }
  }
`;

const NavbarContainerProps = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 100%;
  min-width: 100% !important;
  background-color: #202123;
  h1 {
    color: #fff;
  }
  p {
    margin-top: -10px;
    color: #6a6a6a;
    font-weight: lighter;
    font-size: 20px;
  }
`;

const NavFixed = styled.div`
  position: absolute;
  height: 100vh;
  min-width: 100px !important;
  background-color: #202123;
`;

const NavNoFixed = styled.div`
  position: absolute;
  margin-right: 500px;
  height: 100vh;
  min-width: 300px !important;
  background-color: #202123;
`;

const NavClosed = styled.button`
  position: absolute;
  background-color: #1c1c1c;
  height: 25px;
  width: 25px;
  top: 25px;
  right: -10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #363535;
  z-index: 99;
  cursor: pointer;
`;

const NavOpen = styled.button`
  position: absolute;
  background-color: #1c1c1c;
  height: 25px;
  width: 25px;
  top: 25px;
  right: -10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #363535;
  z-index: 99;
  cursor: pointer;
`;

export {
  NavbarButton,
  NavbarContainer,
  NavbarNoProps,
  NavbarContainerProps,
  NavClosed,
  NavFixed,
  NavOpen,
  NavNoFixed,
  NavLogo,
  NavLinks,
  NavbarInnerContainer,
  SearchDiv,
  SearchIcons,
};
