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