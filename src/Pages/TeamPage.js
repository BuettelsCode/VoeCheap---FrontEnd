import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import TeamSlogan from "../Components/InitialPage/TeamCompnts/TeamSlogan";

export default function TeamPage(){
  
        return (<>
            <Container>
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