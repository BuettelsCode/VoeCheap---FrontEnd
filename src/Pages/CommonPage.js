import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import CommonSlogan from "../Components/InitialPage/CommonAsk/CommonSlogan";


export default function CommonPage(){
    return(
        <>
         <Container>
        {/* <WhatsApp><img src={wpp} alt="wpp" /></WhatsApp> */}
            <Header/>
          <CommonSlogan/>
        </Container>
        </>
    )
};


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`