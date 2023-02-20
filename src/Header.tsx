import type React from "react";
import { useState } from "react";
import styled from "styled-components";


const Header: React.FC<{counter:number, theme: string; onToggleMode: () => void }> = props => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const handleShowModal = () => {
    setModalIsShown(true);
  };
  const handleCloseModal = () => {
    setModalIsShown(false);
  };
  const Header = styled.div`
    background-color: ${props =>
      props.theme.mode === "dark" ? "#222" : "#F1F3F4"};
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
  `;
  const ToggleButton = styled.button`
    background-color: #2196f3;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background-color: #1b8ae1;
    }
  `;
  const HamburgerButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    & div {
      border: 1px solid
        ${props => (props.theme.mode === "dark" ? "#f5f5f5" : "#222")};
      width: 15px;
      height: 0;
      margin: 0 auto 3px;
      transition: 0.2s all ease-in;
    }
    @media (min-width: 768px) {
      display: none;
    }
  `;
  const MenuOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 220;
  `;
  const Modal = styled.div`
    background-color:  ${props => (props.theme.mode === "dark" ? "#222" : "#F1F3F4")};
    box-shadow: 0 5px 5px 2px rgba(0, 0, 0, 0.1);
    height: 100%;
    padding: 20px 25px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    transition: all 0.4s ease 0s;
    width: 200px;
    max-width: 100%;
    z-index: 222;
  `;
  const ButtonClose = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    & div {
      border: 1px solid ${props => (props.theme.mode === "dark" ? "#f5f5f5" : "#2b2b2b")};
      width: 15px;
      height: 0;
      margin: 0 auto 3px;
      transition: 0.2s all ease-in;
    }
    & div:first-child {
      -webkit-transform: translate3d(0, 5px, 0) rotate(45deg);
      -moz-transform: translate3d(0, 5px, 0) rotate(45deg);
      -o-transform: translate3d(0, 5px, 0) rotate(45deg);
      -ms-transform: translate3d(0, 5px, 0) rotate(45deg);
      transform: translate3d(0, 5px, 0) rotate(45deg);
    }
    & div:nth-child(2) {
      opacity: 0;
    }

    & div:last-child {
      -webkit-transform: translate3d(0, -5px, 0) rotate(-45deg);
      -moz-transform: translate3d(0, -5px, 0) rotate(-45deg);
      -o-transform: translate3d(0, -5px, 0) rotate(-45deg);
      -ms-transform: translate3d(0, -5px, 0) rotate(-45deg);
      transform: translate3d(0, -5px, 0) rotate(-45deg);
    }
  `;
  const List = styled.ul`
    list-style-type: none;
    padding: 0 0 0 10px;
    & li {
      margin-bottom: 15px;
    }
    & > li > a {
      color: ${props => (props.theme.mode === "dark" ? "#fff" : "#2b2b2b")};
      transition: 0.5s;
    }
    & > li > a:hover,
    & > li > a:focus {
      color: #2196f3;
    }
  `;
  const Timer=styled.div`

  `
  return (
    <Header>
      <ToggleButton onClick={props.onToggleMode}>Toggle Mode</ToggleButton>
      <Timer>time left : {props.counter}</Timer>
      <HamburgerButton onClick={handleShowModal}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>
  
      {modalIsShown && <MenuOverlay onClick={handleCloseModal} />}
      {modalIsShown && (
        <Modal>
          <ButtonClose onClick={handleCloseModal}>
            <div></div>
            <div></div>
            <div></div>
          </ButtonClose>
          <List>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </List>
        </Modal>
      )}
    </Header>
  );
};

export default Header;
