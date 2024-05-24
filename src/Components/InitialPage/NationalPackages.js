import { Container, Title, SubTitle } from "../../GlobalStyle/PackagesCSS";
import NationalPacks from "./NationalPacks";

export default function NationalPackages() {

  const nationalPacks = [
    { id: 1, destiny: "Lisboa", image: "https://encurtador.com.br/mAGS5", price: "R$2.800,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (1x23kg+1x10kg) + 1 mochila", ticket: "Passagem de ida com volta cancelada" },
    { id: 2, destiny: "Orlando", image: "https://encurtador.com.br/asu14", price: "R$3.050,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (1x23kg+1x10kg) + 1 mochila", ticket: "Passagens de ida e volta" },
    { id: 3, destiny: "Paris", image: "https://encurtador.com.br/goEU1", price: "R$4.500,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "3 bagagens (2x23kg/1x10kg) + 1 mochila", ticket: "Passagens de ida e volta" },
    { id: 4, destiny: "Madrid", image: "https://encurtador.com.br/gszBU", price: "R$4.000,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (1x23kg/1x10kg) + 1 mochila", ticket: "Passagens de ida e volta" },
    { id: 5, destiny: "Orlando - Executiva (Assento Cama)", image: "https://encurtador.com.br/oILU0", price: "R$8.490,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "3 bagagens (2x23kg/1x10kg) + 1 mochila", ticket: "Passagens de ida e volta" },
    // { id: 6, destiny: "Nova York", image: "https://encurtador.com.br/pIPY1", price: "R$3.000,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (1x23kg/1x10kg) + 1 mochila", ticket: "Passagens de ida e volta" }
  ]


  return (<>
    <Title>
      <h1>PASSAGENS <strong>NACIONAIS</strong></h1>
      <SubTitle>
        <h2>até 40% de desconto</h2>
        <h2>mais relevantes</h2>
        <h2>todas as taxas inclusas</h2>
      </SubTitle>
    </Title>
    <Container id="packages">
      {nationalPacks.map((p, index) => (<NationalPacks p={p} key={index} />))}
    </Container>
  </>)
};