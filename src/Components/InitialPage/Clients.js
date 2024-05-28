import styled from "styled-components";
import foto1 from "../../Assets/foto1.png";
import foto2 from "../../Assets/foto2.png";
import foto3 from "../../Assets/foto3.png";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { IoLogoInstagram } from "react-icons/io";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Clients() {

  const photos = [foto2, foto3, foto1];
  const clientsName = [
    "GEÓRGIA DELGADO", "YSNAIRA", "ESTHEPHANY DIAS", "GEÓRGIA DELGADO", "YSNAIRA", "ESTHEPHANY DIAS"
  ]
  const clientTexts = [
    "Voar com a Voecheap foi a melhor escolha! O atendimento personalizado, a praticidade na compra e a agilidade foram incríveis. Eles cuidaram de toda a pesquisa e burocracia, encontrando a melhor opção dentro dos meus pedidos. Parabéns! Mal posso esperar pela próxima viagem com eles!",
    "Que experiência agradável viajar com a @voecheap, além do preço ser acessível, é seguro e os profissionais são super atenciosos, desde o pré viagem e até mesmo durante. Agradeço pelo ótimo atendimento e disponibilidade, super confiável e de qualidade. Com certeza comprarei outras vezes!!",
    "Voar com a Voecheap foi a melhor escolha! O atendimento personalizado, a praticidade na compra e a agilidade foram incríveis. Eles cuidaram de toda a pesquisa e burocracia, encontrando a melhor opção dentro dos meus pedidos. Parabéns! Mal posso esperar pela próxima viagem com eles!",
    "Que experiência agradável viajar com a @voecheap, além do preço ser acessível, é seguro e os profissionais são super atenciosos, desde o pré viagem e até mesmo durante. Agradeço pelo ótimo atendimento e disponibilidade, super confiável e de qualidade. Com certeza comprarei outras vezes!!",
    "Viajar com a Voecheap foi a melhor escolha que fiz. Recebi todo suporte necessário, sempre muito rápido nas respostas e prontos para me ajudar na minha ansiedade. O melhor preço de todos. Melhor empresa sem dúvidas.❤️✈️",
    "Viajar com a Voecheap foi a melhor escolha que fiz. Recebi todo suporte necessário, sempre muito rápido nas respostas e prontos para me ajudar na minha ansiedade. O melhor preço de todos. Melhor empresa sem dúvidas.❤️✈️",
  ];

  const clients = clientsName.map((name, index) => ({
    photo: photos[index],
    name: name,
    text: clientTexts[index]
  }));

  return (
    <>
       <Title>#QUEM<span style={{color:'#546e9e'}}>VOA</span>RECOMENDA</Title>
      <Container id="client">
        <SlideShow
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={350}
          slidesPerView={1}
          navigation={true}
          loop={true} 
          breakpoints={{
            700: {
              slidesPerView: 3,
              spaceBetween: 375
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 300 
            },
          }}>
          {clients.map((clients, index) =>
            <Slide>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Feedbacks style={{ display: 'flex' }}>
                  <div style={{ marginRight: '10px', position: 'absolute', left: '0', top: '0', paddingRight: '10px' }}>
                    <ImQuotesLeft /> 
                  </div>
                  <div>
                    {clients.text} 
                  </div>
                </Feedbacks>
                <Instagram>
                  <img src={clients.photo} alt="" />
                  <h2>{clients.name}</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", color: 'white' }}><IoLogoInstagram /></div>
                </Instagram>
              </div>
            </Slide>
          )}
        </SlideShow>
      </Container>
    </>)
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  cursor:grab;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100px; /* Ajuste a largura conforme necessário */
    height: 100%;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
    @media(min-width:900px){
      z-index:10;
}
  
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
    @media(min-width:900px){
      z-index:10;
}
   
  }
`;
const Title = styled.h1`
font-size: 25px;
z-index: 50;
margin-bottom: -11px;
margin-top: 20px;
@media(min-width:900px){
  margin-left:-800px;
font-size: 30px;
margin-bottom: -15px;
}
font-family: "Montserrat", sans-serif;
font-weight: bold;
color:#484848;
`;
const SlideShow = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    --swiper-navigation-color: #003095; /* Cor dos botões */
    --swiper-navigation-size: 40px; /* Tamanho dos botões */
    height: 130px;
width: 50px;
z-index:20;
@media(min-width:900px){
  width: 80px;
 height: 40px;
}
    /* Esconde o ícone padrão */
    &::after {
      display: none;
    }

    /* Personaliza a seta usando SVG */
    &::before {
      content: '';
      display: block;
      width: 40px; /* Ajuste o tamanho conforme necessário */
      height: 40px;
      @media(min-width:900px){
        height: 60px;
        width: 60px;
      }
      background-color: currentColor;
      mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%233464ad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>') no-repeat center / contain;
    }
  }

  .swiper-button-prev::before {
    transform: rotate(180deg);
  }
`;
const Slide = styled(SwiperSlide)`
`;
const Feedbacks = styled.div`
 height: 100px;
  width: 360px;
  display: flex;
  justify-content: center; // Alinha o conteúdo à esquerdaF
    padding-left: 10px; // Adiciona algum 
    align-items: center;
    position:relative;
    font-family: "Montserrat", sans-serif;
    font-size:12px;
    font-weight:600;
    font-style: italic;
`;
const Instagram = styled.div`
   background-color: #839cc2;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
  img {
    width: 30px;
    margin-right: 5px;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    color: white;
    font-weight: bold;
    white-space: nowrap;
  }
  div{
    width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  }
`;