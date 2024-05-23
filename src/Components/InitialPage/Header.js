import styled from "styled-components"
import logo from "../../Assets/logo.png"
import { useState } from "react";
import { FaBars, FaSearch } from 'react-icons/fa';

export default function Header() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (<>
    <Head>
      <Logo src={logo} alt="logo" />
      <OptionsHeader>
        <Link href="/">HOME</Link>
        <Link
          href="#passagens"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          PASSAGENS
          {isSubMenuOpen && (
            <SubMenu>
              <h1>Ver Tudo</h1>
              <h1>Internacionais</h1>
              <h1>Nacionais</h1>
            </SubMenu>
          )}
        </Link>
        <Link href="#blog">BLOG</Link>
        <Link href="#sobre">SOBRE NÓS</Link>
        <Link href="#contato">CONTATO</Link>
        <SearchContainer>
          <SearchInput type="text" placeholder="BUSCAR PASSAGENS" />
          <SearchIcon />
        </SearchContainer>
      </OptionsHeader>
      <MenuButton onClick={toggleMenu} >
        <IconContainer>
          <FaBars style={{ width: '100%', height: '100%', color: "#013881" }} />
        </IconContainer>
      </MenuButton>
    </Head>
    <OptionsContainer isMenuOpen={isMenuOpen}>
      {isMenuOpen && (
        <SearchContainer>
          <SearchInput type="text" placeholder="BUSCAR PASSAGENS" />
          <SearchIcon />
        </SearchContainer>
      )}
      <Options>
        <Link href="/">HOME</Link>
        <Link href="#passagens">PASSAGENS</Link>
        <Link href="#sobre">SOBRE NÓS</Link>
        <Link href="#blog">BLOG</Link>
        <Link href="#contato">CONTATO</Link>
      </Options>
    </OptionsContainer>
    <Overlay isMenuOpen={isMenuOpen} onClick={closeMenu} />
  </>)
}


const Head = styled.div`
 display: flex;
 width: 100%;
 height: 80px;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  position: relative;
`;
const Logo = styled.img`
cursor: pointer;
width: 200px;
padding-left: 30px;
`;
const OptionsHeader = styled.div`
display: flex;
width: 800px;
justify-content: space-evenly;
position: relative;
@media(max-width:900px){
  display: none;
}
`;
const MenuButton = styled.div`
   background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 30px;
  @media(min-width:900px){
    display:none;
  }
`;
const IconContainer = styled.div`
flex-grow: 1;
width: 30px; 
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 3px solid #4a4a4a;
  padding: 8px 0;
  margin-bottom: 16px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 4px;
  ::placeholder{
    font-family: "Montserrat", sans-serif;
  }
`;
const SearchIcon = styled(FaSearch)`
  margin-left: 8px;
  color: #4a4a4a;
`;
const OptionsContainer = styled.div`
position: fixed;
  top: 0;
  right: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')};
  height: 350px;
  width: 250px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease;
  z-index: 1000;
  @media(min-width:900px){
    display:none;
  }
`;
const Overlay = styled.div`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  @media(min-width:900px){
    display:none;
  }
`;
const Options = styled.div`
   display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const Link = styled.a`
  color: #3a3a3a;
  text-decoration: none;
  margin: 1rem 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
const SubMenu = styled.div`
display: flex;
flex-direction: column;
position: absolute;
  top: 30;
  background: white;
  z-index:20;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  h1{
    margin-top: 5px;
    padding-bottom: 5px;
    font-family: "Montserrat", sans-serif;
  font-weight: 600;
  }
`;