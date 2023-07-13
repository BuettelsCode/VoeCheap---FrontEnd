import styled from "styled-components"
import logoInsta from "../../Assets/logo-insta.png"
import arrowLeft from "../../Assets/ArrowLeft.png"
import arrowRight from "../../Assets/ArrowRight.png"
import dep1 from "../../Assets/dep1.jpeg"
import dep2 from "../../Assets/dep2.jpeg"
import dep3 from "../../Assets/dep3.jpeg"
import { useState } from "react"

export default function Clients() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [dep1, dep2, dep3];
    const [slideDirection, setSlideDirection] = useState(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const clientTexts = [
        "Que experiência agradável viajar com a @voecheap, além do preço ser acessível, é seguro e os profissionais são super atenciosos, desde o pré viagem e até mesmo durante. Agradeço pelo ótimo atendimento e disponibilidade, super confiável e de qualidade. Com certeza comprarei outras vezes!!",
        "Voar com a voecheap foi com certeza a melhor escolha, além de todo atendimento personalizado que eles fazem com a gente desde da escolha das passagem, dos dias, dos melhores preços e das companhias áreas, a praticidade e agilidade que temos na compra é sem dúvidas a melhor parte. Para mim, que tenho uma vida corrida, eles deram conta de toda a pesquisa e burocracia… e encontraram a melhor opção dentro dos meus pedidos. Deixo aqui meus parabéns e já ansiosa para próxima!!",
        "Viajar com a Voecheap foi a melhor escolha que fiz. Recebi todo suporte necessário, sempre muito rápido nas respostas e prontos para me ajudar na minha ansiedade. O melhor preço de todos. Melhor empresa sem dúvidas. ❤️✈️",
    ];

    const handleArrowClick = (direction) => {
        let newIndex;
        if (direction === "left") {
            newIndex = currentImageIndex - 1;
            if (newIndex < 0) {
                newIndex = images.length - 1;
            }
            setSlideDirection("slide-left");
        } else if (direction === "right") {
            newIndex = (currentImageIndex + 1) % images.length;
            setSlideDirection("slide-right");
        }
        setCurrentImageIndex(newIndex);
        setCurrentTextIndex(newIndex);
    };


    const handleTransitionEnd = () => {
        setSlideDirection(null);
    };

    return (
        <>
            <Container>
                <Title>NOSSOS CLIENTES INDICAM! <img src={logoInsta} alt="logoinsta" /></Title>
                <Recommendations>
                    <ClientText>{clientTexts[currentTextIndex]}</ClientText>
                    <Stories >
                        {images.map((i, index) => (
                            <Story key={index} isActive={index === currentImageIndex} />
                        ))}
                    </Stories>
                    <ArrowLeft src={arrowLeft} onClick={() => handleArrowClick('left')} />
                    <ArrowRight src={arrowRight} onClick={() => handleArrowClick('right')} />
                    <ClientContainer>
                        <ClientImage src={images[currentImageIndex]}
                            slideDirection={slideDirection}
                            onTransitionEnd={handleTransitionEnd} />
                    </ClientContainer>
                </Recommendations>
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
margin-top: -30px;
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
const ArrowRight = styled.img`
position: absolute;
right: -102px;
top:200px;
width: 30px;

`
const ClientImage = styled.img`
  width: 300px;
  transition: transform 0.3s ease;
  transform: ${({ slideDirection }) =>
        slideDirection === "slide-left" ? "translateX(-5%)" : slideDirection === "slide-right" ? "translateX(5%)" : "none"};
`
const Stories = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  height: 10px;
`
const Story = styled.div`
  flex-grow: 1; /* Ocupar espaço disponível */
  height: 3px;
  background-color: ${({ isActive }) => (isActive ? "#013881" : "#CCC")};
  border-radius: 15%;
  margin: 0 5px;
`
const ClientText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  position: absolute;
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
  width: fit-content;
  max-width: 300px;
left: -480px;
top: 100px;
 `
const ClientContainer = styled.div`
  display: flex;
  align-items: center;
`

