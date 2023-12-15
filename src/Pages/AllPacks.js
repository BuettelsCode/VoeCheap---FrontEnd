import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import AllPacksSlogan from "../Components/InitialPage/Allpacks/AllPacksSlogan";
import AllPackages from "../Components/InitialPage/Allpacks/AllPacksPackges";

export default function AllPacks(){
    return (<>
        <Container>
            <Header/>
            <AllPacksSlogan/>
            <AllPackages/>
        </Container>
    </>)
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
// const WhatsApp = styled.div`
//   width: 50px;
//   position: fixed;
//   right: 0px;
//   top: 650px; /* Ajuste a posição superior conforme necessário */
//   z-index: 9999;
//   img {
//     width: 40px;
//     transform: scaleX(-1);
//   }
//   @media (max-width: 1050px) {
//     width: 80px;
//      top: 900px;
//     img {
//     width: 70px;
//     transform: scaleX(-1);
//   }
//   }
// `;