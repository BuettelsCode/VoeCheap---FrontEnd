import styled from "styled-components"
import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';

export default function Header() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  const openAllPacksInNewPage = () => {
    window.open('/allpacks', '_blank');
  };

  const openTeamPage = () => {
    window.open('/teampage', '_blank');
  };

  const openCommonPage = () => {
    window.open('/commonpage', '_blank');
  };

  const openContactPage = () => {
    window.open('/contactpage', '_blank');
  };

  // const openBlogPage = () => {
  //   window.open('/blogpage', '_blank');
  // };

  return (<>
    <Head>
      <Logo src={logo} alt="logo" />
      <OptionsContainer isMenuOpen={isMenuOpen}>
          <Options>
            <Link style={{ color: "#013881", textDecoration: "none" }} to={"/"}><h2>HOME</h2></Link>
            <h2 onClick={openAllPacksInNewPage}>PASSAGENS</h2>
            <h2 onClick={openTeamPage}>SOBRE NÓS</h2>
            {/* <h2 onClick={openBlogPage}>NOTÍCIAS</h2> */}
            <h2 onClick={openCommonPage}>PERGUNTAS FREQUENTES</h2>
            <h2 onClick={openContactPage}>CONTATO</h2>
          </Options>
        </OptionsContainer>
        <MenuButton onClick={toggleMenu}>
          <FaBars size={24} />
        </MenuButton>
    </Head>
  </>)
}

const Head = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 415px) {
    justify-content: space-around;
  }
`;

const Logo = styled.img`
width: 220px;
@media (max-width: 768px) {
  width: 100px;
}
@media (max-width: 477px) {
  width: 150px;
}
@media (max-width: 860px) {
  width: 200px;
}
@media (max-width: 760px) {
  width: 150px;
}
`;

const OptionsContainer = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100px; // Ajuste conforme necessário
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  @media (min-width: 560px) {
    display: flex;
    position: static;
    flex-direction: row;
    width: auto;
    box-shadow: none;
    justify-content: space-around;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #013881;
  h2 {
    cursor: pointer;
    margin-right: 10px;
    &:hover {
      background-color: #f0f0f0;
    }
  }
  @media (max-width: 860px) {
    h2 {
      font-size: 13px;
    }
  }
  @media (max-width: 695px) {
    h2 {
      font-size: 11px;
    }
  }
  @media (max-width: 560px) {
    display: none;
  }
  @media (max-width: 760px) {
    display: flex;
    h2 {
      font-size: 10px;
    }
  }
  @media (max-width: 408px) {
    display: flex;
    h2 {
      font-size: 8px;
    }
  }
  &.menu-open {
    h2 {
      font-size: 10px;
  }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 560px) {
    display: block;
  }
`;
