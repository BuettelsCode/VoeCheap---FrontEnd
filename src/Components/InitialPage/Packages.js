import styled from "styled-components"
import Pack from "./Pack"

export default function Packages() {
    
    const packs = [
        { destiny: "Lisboa", image: "https://encurtador.com.br/mAGS5", price: "R$2.600,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (23kg/10kg) + 1 de mão", ticket: "Passagem de ida com volta cancelada" },
        { destiny: "Orlando", image: "https://encurtador.com.br/asu14", price: "R$3.050,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" },
        { destiny: "Paris", image: "https://encurtador.com.br/goEU1", price: "R$8.490,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "3 bagagens (2x23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" },
        { destiny: "Madrid", image: "https://encurtador.com.br/gszBU", price: "R$4.500,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" },
        { destiny: "Orlando - Executiva", image: "https://encurtador.com.br/oILU0", price: "R$8.490,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "3 bagagens (2x23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" },
        { destiny: "Nova York", image: "https://encurtador.com.br/pIPY1", price: "R$8.490,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "3 bagagens (2x23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" }
    ]

    return (<>
        <Title>PRINCIPAIS PASSAGENS</Title>
        <Container id="packages">
            {packs.map((p) => (<Pack p={p} />))}
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
@media (max-width: 1200px) {
    
    width: 100%;
  }
`
const Title = styled.h1`
margin-top: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #013881;
font-size: 30px;
@media (max-width: 768px) {
    text-align: center;
  }
`