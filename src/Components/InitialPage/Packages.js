import styled from "styled-components"
import Pack from "./Pack"
import Lisboa from "../../Assets/Lisboa.png"
import Orlando from "../../Assets/Orlando.png"

export default function Packages(){
    const packs = [
        {destiny:"Lisboa", image: Lisboa, price:"R$2.600,00/pessoa", support:"Suporte diário", departureTax: "Taxa de embarque inclusa", baggage:"2 bagagens (23kg/10kg) + 1 de mão", tickets:"Passagem de ida com volta cancelada"},
        {destiny:"Orlando", image: Orlando, price:"R$3.050,00/pessoa", support:"Suporte diário", departureTax: "Taxa de embarque inclusa", baggage:"2 bagagens (23kg/10kg) + 1 de mão", tickets:"Passagens de ida e volta"},
        {destiny:"Paris", image: Orlando , price:"R$8.490,00/pessoa", support:"Suporte diário", departureTax: "Taxa de embarque inclusa", baggage:"3 bagagens (2x23kg/10kg) + 1 de mão", tickets:"Passagens de ida e volta"},
        {destiny:"Madrid", image:Orlando , price:"R$4.500,00/pessoa", support:"Suporte diário", departureTax: "Taxa de embarque inclusa", baggage:"2 bagagens (23kg/10kg) + 1 de mão", tickets:"Passagens de ida e volta"},
        {destiny:"Orlando - Executiva", image: Orlando , price:"R$8.490,00/pessoa", support:"Suporte diário", departureTax: "Taxa de embarque inclusa", baggage:"3 bagagens (2x23kg/10kg) + 1 de mão", tickets:"Passagens de ida e volta"},
        {destiny:"Nova York", image: Orlando , price:"R$8.490,00/pessoa", support:"Suporte diário", departureTax: "Taxa de embarque inclusa", baggage:"3 bagagens (2x23kg/10kg) + 1 de mão", tickets:"Passagens de ida e volta"}
    ]
    return(<>
    <Title>PRINCIPAIS PACOTES</Title>
    <Container>
        {packs.map((p) => (<Pack p = {p}/>))}
    </Container> 
    </>)
}

const Container = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
width: 1200px;
padding-bottom: 30px;
`
const Title = styled.h1`
margin-top: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #013881;
font-size: 30px;
`