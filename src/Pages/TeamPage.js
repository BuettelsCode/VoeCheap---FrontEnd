import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import wpp from "../Assets/wpp.png";
import TeamSlogan from "../Components/InitialPage/TeamCompnts/TeamSlogan";

export default function TeamPage(){
  
        return (<>
            <Container>
            {/* <WhatsApp><img src={wpp} alt="wpp" /></WhatsApp> */}
                <Header/>
              <TeamSlogan/>
            </Container>
        </>)
    }

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
// const WhatsApp = styled.div`
//       width: 50px;
//       position: fixed;
//       right: 0px;
//       top: 650px; /* Ajuste a posição superior conforme necessário */
//       z-index: 9999;
//       img {
//         width: 40px;
//         transform: scaleX(-1);
//       }
//       @media (max-width: 1050px) {
//         width: 80px;
//          top: 900px;
//         img {
//         width: 70px;
//         transform: scaleX(-1);
//       }
//       }
//  `;