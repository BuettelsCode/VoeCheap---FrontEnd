import styled from "styled-components"
import logoInsta from "../../Assets/logo-insta.png"
import client1 from "../../Assets/fotoCliente1.png"
import arrowLeft from "../../Assets/ArrowLeft.png"
import arrowRight from "../../Assets/ArrowRight.png"

export default function Clients(){
    return(
    <>
    <Container>
    <Title>NOSSOS CLIENTES INDICAM! <img src={logoInsta}/></Title> 
    <Recommendations><ArrowLeft src={arrowLeft}/><ClientImage src={client1}/><ArrowRight src={arrowRight}/></Recommendations>

    </Container>
    </>)
}

const Container = styled.div`
width: 100%;
height: 800px;
background-color: #F0F0F0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

`
const Title = styled.h1`
margin-top: -50px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #013881;
font-size: 30px;

img{
    width: 25px;
    margin-left: 15px;
}
`

const Recommendations = styled.div`
position: relative;
`

const ArrowLeft = styled.img`
position: absolute;
left: -100px;
top:200px;
width: 30px;

`
const ArrowRight =styled.img`
position: absolute;
right: -102px;
top:200px;
width: 30px;

`
const ClientImage = styled.img`
width: 300px;
`