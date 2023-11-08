import styled from "styled-components"
import arrowLeft from "../../Assets/ArrowLeft.png"
import arrowRight from "../../Assets/ArrowRight.png"
import dep1 from "../../Assets/newDep1.jpeg"
import dep2 from "../../Assets/newDep2.jpeg"
import dep3 from "../../Assets/newDep3.jpeg"
import foto1 from "../../Assets/foto1.png"
import foto2 from "../../Assets/foto2.png"
import foto3 from "../../Assets/foto3.png"
import { useState } from "react"


export default function Clients() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [dep1, dep3, dep2];
  const photos = [foto2, foto3, foto1];
  const [slideDirection, setSlideDirection] = useState(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentClientsName, setCurrentClientsName] = useState(0);
  const clientsName = [
    "Geórgia Delgado", "Ysnaira", "Estephany Dias"
  ]
const clientTexts = [
  "Voar com a Voecheap foi a melhor escolha! O atendimento personalizado, a praticidade na compra e a agilidade foram incríveis. Eles cuidaram de toda a pesquisa e burocracia, encontrando a melhor opção dentro dos meus pedidos. Parabéns! Mal posso esperar pela próxima viagem com eles!",
  "Que experiência agradável viajar com a @voecheap, além do preço ser acessível, é seguro e os profissionais são super atenciosos, desde o pré viagem e até mesmo durante. Agradeço pelo ótimo atendimento e disponibilidade, super confiável e de qualidade. Com certeza comprarei outras vezes!!",
  "Viajar com a Voecheap foi a melhor escolha que fiz. Recebi todo suporte necessário, sempre muito rápido nas respostas e prontos para me ajudar na minha ansiedade. O melhor preço de todos. Melhor empresa sem dúvidas. &quot;❤️✈️&quot;",
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
    setCurrentClientsName(newIndex);
  };

  const handleTransitionEnd = () => {
    setSlideDirection(null);
  };

  return (
    <>
      <Container id="client">
        {/* <Title>NOSSOS CLIENTES INDICAM! <img src={logoInsta} alt="logoinsta" /></Title> */}
        <Recommendations>
          <ArrowLeft src={arrowLeft} onClick={() => handleArrowClick('left')} />
          <ArrowRight src={arrowRight} onClick={() => handleArrowClick('right')} />
          <Feed>FEED</Feed>
          <NewClient>
            <Barrinha>
              <Listra></Listra>
              <Bolinha></Bolinha>
            </Barrinha>
            <ClientBorder>
            </ClientBorder>
            <ClientFeedBack>
              <ClientPhoto
                style={{
                  backgroundImage: `url(${photos[currentImageIndex]})`,
                }}>
              </ClientPhoto>
              <ClientText>
                <div>
                  <h1>
                   {clientsName[currentClientsName]}
                  </h1>
                  "{clientTexts[currentTextIndex]}"
                </div></ClientText>
            </ClientFeedBack>
            <ClientImage src={images[currentImageIndex]}
              slideDirection={slideDirection}
              onTransitionEnd={handleTransitionEnd} />
          </NewClient>
          <Back>BACK</Back>
        </Recommendations>
      </Container>
    </>)
}

const Feed = styled.div`
margin-top: -220px;
letter-spacing: -25px;
writing-mode: vertical-rl; /* Texto na forma vertical, da direita para a esquerda */
  text-orientation: upright; /* Orientação do texto em pé */
  font-size: 80px;
  color: #013881;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 660px) {
margin-top: -300px;
  }
`
const Back = styled.div`
margin-top: 220px;
letter-spacing: -25px;
writing-mode: vertical-rl; /* Texto na forma vertical, da direita para a esquerda */
  text-orientation: upright; /* Orientação do texto em pé */
  font-size: 80px;
  color: #013881;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 660px) {
margin-top: 150px;
  }
`
const NewClient = styled.div`
width: 300px;
height: 590px;
background-color: #d5d0ca;
border-radius: 40px;
border: 5px solid black;
position: relative;
display: flex;
justify-content: center;
@media (max-width: 563px) {
    height: 480px;
  }
  @media (max-width:409px) {
    height: 420px;
  }
img{
  width: 280px;
  height: 560px;
  border-radius: 30px;
  position: absolute;
  top: 15px;
  z-index: 5;
  @media (max-width: 563px) {
    width: 200px;
    height: 450px;
  }
  @media (max-width:409px) {
    width: 170px;
    height: 390px;
  }
}
@media (max-width: 660px) {
  margin-top: -100px;
  }
`
const Barrinha = styled.div`
background-color: #d5d0ca;
border-radius: 10px;
width: 170px;
height: 25px;
position: absolute;
top: 10px;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
@media (max-width: 563px) {
  width: 120px;
  }
  @media (max-width:409px) {
    width:80px; 
  }
`
const Listra = styled.div`
width: 50px;
height: 5px;
background-color: black;
border-radius: 10px;
z-index: 10;
@media (max-width: 563px) {
  width: 30px;
  }
  @media (max-width:409px) {
    width: 20px;
    height: 3px;
  }
`
const Bolinha = styled.div`
width: 7px;
height: 7px;
background-color: black;
border-radius: 7px;
margin-left: 10px;
z-index: 10;
@media (max-width:409px) {
  width: 4px;
height: 4px;
  }
`
const Container = styled.div`
width: 100%;
height: 800px;
/* background: linear-gradient(to bottom, gray, white); Gradiente linear de cinza para branco */
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
@media (max-width: 660px) {
  height: 1000px;
  }
`
const Title = styled.h1`
margin-top: -350px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
color: #013881;
font-size: 30px;
img{
    width: 25px;
    margin-left: 15px;
}
@media (max-width: 1108px) {
    margin-top: -520px;
  }
  @media (max-width: 519px) {
    font-size: 20px;
    margin-top: -540px;
    img{
      width: 15px;
    }
  }
`
const Recommendations = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 700px;
/* background-color: blue; */
@media (max-width: 700px) {
 width: 550px;
  }
  @media (max-width: 563px) {
 height: 800px;
 width: 400px;
  }
  @media (max-width:409px) {
 height: 800px;
 width: 360px;
  }
`
const ArrowLeft = styled.img`
width: 40px;
position: absolute;
left: -10px;
cursor: pointer;
@media (max-width: 780px) {
  width: 20px;
  left: 0px;
  }
  @media (max-width: 563px) {
 top: 0px;
 left: 100px;
  }
`
const ArrowRight = styled.img`
width: 40px;
position: absolute;
right: -10px;
cursor: pointer;
@media (max-width: 780px) {
  width: 20px;
  right: 0px;
  }
  @media (max-width: 563px) {
 top: 0px;
 right: 100px;
  }
`
const ClientImage = styled.img`
   /* width: 280px;
  height: 560px;
  border-radius: 30px;
  position: absolute;
  top: 15px;
  z-index: 5;
  transition: all 0.3s ease-out;
  transform: ${({ slideDirection }) =>
    slideDirection === "slide-left" ? "translateX(-5%)" : slideDirection === "slide-right" ? "translateX(5%)" : "none"}; */
  /* @media (max-width: 563px) {
    width: 20px;
  } */
`
const Stories = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  height: 10px;
  position: absolute;
  top: -350px;
  width: 310px;
  left: -305px;
  @media (max-width: 1108px) {
  left:-185px;
  }
`
const Story = styled.div`
  flex-grow: 1;
  height: 3px;
  background-color: ${({ isActive }) => (isActive ? "#013881" : "#CCC")};
  border-radius: 15%;
  margin: 0 5px;
`
const ClientFeedBack = styled.div`
  position: absolute;
  background-color: white;
  margin: 10px;
  border-top-left-radius: 100px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 100px;
  width: 410px;
  height: 120px;
  right: 40px;
  top: 350px;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 660px) {
  top: 650px;
  left: -55px;
  }
  @media (max-width: 563px) {
    top: 550px;
  left: -90px;
  width: 330px;
  }
`
const ClientPhoto = styled.div`
width: 90px;
height: 90px;
position: absolute;
border-radius: 70px;
top: 12px;
left: 10px;
border: 2px solid #d1b8b2;
/* background-image: url(${foto1}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
`
const ClientText = styled.h2`
div{
  width: 70%;
  margin-left: 115px;
  h1{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
}
font-size: 12px;
`
const ClientBorder = styled.div`
position: absolute;
background-color: rgba(0, 0, 0, 0.0); /* Valor de transparência: 0.5 */
  margin: 10px;
  border-top-left-radius: 100px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 100px;
  border: 2px solid #d1b8b2; 
  width: 430px;
  height: 150px;
  right: 27px;
  top: 333px;
  z-index: 20;
  @media (max-width: 660px) {
  top: 633px;
  left: -70px;
  }
  @media (max-width: 563px) {
    top: 535px;
  left: -100px;
  width: 350px;
  height: 150px;
  }
`
const ClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

