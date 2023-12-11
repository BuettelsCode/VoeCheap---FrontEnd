import Header from "../Components/InitialPage/Header";
import Slogan from "../Components/InitialPage/Slogan";
import Packages from "../Components/InitialPage/Packages";
import Clients from "../Components/InitialPage/Clients";
import styled from "styled-components";
import Footer from "../Components/InitialPage/Footer";
import Notices from "../Components/InitialPage/Notices";
import wpp from "../Assets/wpp2.0.png";

export default function InitialPage() {
    
    return (<>
        <Container>
        {/* <WhatsApp><img src={wpp} alt="wpp" /></WhatsApp> */}
            <Header/>
            <Slogan />
            <Packages />
            {/* <Notices/> */}
            <Clients/>
            {/* <Footer/> */}
        </Container>
    </>)
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const WhatsApp = styled.div`
  width: 50px;
  position: fixed;
  right: 0px;
  top: 650px; /* Ajuste a posição superior conforme necessário */
  z-index: 9999;
  img {
    width: 40px;
    transform: scaleX(-1);
  }
  @media (max-width: 1050px) {
    width: 80px;
     top: 900px;
    img {
    width: 70px;
    transform: scaleX(-1);
  }
  }
`;