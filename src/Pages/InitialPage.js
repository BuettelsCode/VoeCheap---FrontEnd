import Header from "../Components/InitialPage/Header";
import Slogan from "../Components/InitialPage/Slogan";
import Packages from "../Components/InitialPage/Packages";
import Clients from "../Components/InitialPage/Clients";
import styled from "styled-components";
import Team from "../Components/InitialPage/Team";
import Footer from "../Components/InitialPage/Footer";

export default function InitialPage() {
    return (<>
        <Container>
            <Header />
            <Slogan />
            <Packages />
            <Clients/>
            <Team/>
            <Footer/>
        </Container>
    </>)
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`