import styled from "styled-components"
import Passaporte from "../../Assets/Passaporte.jpg"

export default function Notices(){
    return(
        <>
        <Container id="team">
           <Title>Últimas Notícias |<span>#voenotícias</span></Title>
           <LastNotices>
            <News><img src={Passaporte} alt="passaporte"/><div>LER MAIS</div></News>
            <News><img src={Passaporte} alt="passaporte"/><div>LER MAIS</div></News>
            <News><img src={Passaporte} alt="passaporte"/><div>LER MAIS</div></News>
            <News><img src={Passaporte} alt="passaporte"/><div>LER MAIS</div></News>
           </LastNotices>
           <Separation></Separation>
        </Container>
        </>
    )
}

const Container = styled.div`
height: 525px;
width: 100%;
background-color: #D5D0CA;
`
const Separation = styled.div`
width: 100%;
height: 50px;
background-color: black;
margin-top: 20px;
`
const LastNotices = styled.div`
display:flex;
align-items: center;
justify-content: space-evenly;
margin-top: 20px;
flex-wrap: wrap;
`
const News = styled.div`
    width: 270px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 415px) {
 justify-content: space-around;
  }
  div{
    background-color:#013881;
    margin-top: 20px;
    padding: 5px;
    color: white;
  }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
`

const Title = styled.h1`
display: flex;
margin-top: 40px;
margin-left: 80px;
font-size: 50px;
color: #013881;
span{
    margin-left: 10px;
}
`
