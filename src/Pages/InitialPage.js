import Header from "../Components/InitialPage/Header";
import Slogan from "../Components/InitialPage/Slogan";
import Packages from "../Components/InitialPage/Packages";
import Clients from "../Components/InitialPage/Clients";
import styled from "styled-components";
import Footer from "../Components/InitialPage/Footer";
import Notices from "../Components/InitialPage/Notices";
import NationalPackages from "../Components/InitialPage/NationalPackages";

export default function InitialPage() {
    
    return (<>
        <Container>
            <Header/>
            <Slogan />
            <Packages />
            <NationalPackages/>
            <Clients/>
            <Notices/>
            <Footer/>
        </Container>
    </>)
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`