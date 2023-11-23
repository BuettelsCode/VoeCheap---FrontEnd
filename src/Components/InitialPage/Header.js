import styled from "styled-components"
import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";

export default function Header() {

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

  const openBlogPage = () => {
    window.open('/blogpage', '_blank');
  };

  return (<>
    <Head>
      <Logo src={logo} alt="logo" />
      <Options>
        <Link style={{color:"#013881" , textDecoration: "none" }} to={"/"}><h2>HOME</h2></Link>
        <h2 onClick={openAllPacksInNewPage}>PASSAGENS</h2>
        <h2 onClick={openTeamPage}>SOBRE NÓS</h2>
        <h2 onClick={openBlogPage}>NOTÍCIAS</h2>
        <h2 onClick={openCommonPage}>PERGUNTAS FREQUENTES</h2>
        <h2 onClick={openContactPage}>CONTATO</h2>
      </Options>
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
`

const Logo = styled.img`
width: 220px;
@media (max-width: 768px) {
 width: 100px;
  }
  @media (max-width: 415px) {
    width: 150px;
  }
`

const Options = styled.div`
display:flex;
width: 800px;
justify-content: space-between;
font-family: 'Roboto', sans-serif;
font-weight: bold;
color:#013881;
h2{
    cursor: pointer;
    margin-right: 10px;
}
@media (max-width: 768px) {
  width: 100%;
  h2{
    font-size: 10px;
  }
  }
  @media (max-width: 415px) {
  display: none;
  }
`

const WhatsApp = styled.div`
height: 40px;
width: 150px;
border-radius: 11px;
background-color: #013881;
color: white;
font-weight: bold;
font-family: 'Roboto', sans-serif;
display: flex;
align-items: center;
justify-content: space-around;
cursor: pointer;
img{
    width: 17.5px;
}
@media (max-width: 768px) {
  width: 80px;
  height: 30px;
  font-size: 8px;
  img{
    width: 13px;
}
  }
  @media (max-width: 415px) {
  width: 100px;
  font-size: 12px;
  img{
    width: 15px;
  }
  }
`