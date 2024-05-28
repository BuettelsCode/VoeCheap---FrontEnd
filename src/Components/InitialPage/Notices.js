import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Notices() {

    // eslint-disable-next-line no-sparse-arrays
    const notices = [
        {
            img: "https://img.nsctotal.com.br/wp-content/uploads/2023/07/passaporte-brasileiro-e-o-etias-Marcelo-Camargo-Agencia-Brasil.jpg",
            title: "LEI JOCA:",
            text: "oferta de transporte de animais em cabine de avião é aprovada pela Câmara",
            link: "SAIBA MAIS"
        },
        {
            img: "https://img.nsctotal.com.br/wp-content/uploads/2023/07/passaporte-brasileiro-e-o-etias-Marcelo-Camargo-Agencia-Brasil.jpg",
            title: "LEI JOCA:",
            text: "oferta de transporte de animais em cabine de avião é aprovada pela Câmara",
            link: "SAIBA MAIS"
        },
        {
            img: "https://img.nsctotal.com.br/wp-content/uploads/2023/07/passaporte-brasileiro-e-o-etias-Marcelo-Camargo-Agencia-Brasil.jpg",
            title: "LEI JOCA:",
            text: "oferta de transporte de animais em cabine de avião é aprovada pela Câmara",
            link: "SAIBA MAIS"
        },
        {
            img: "https://img.nsctotal.com.br/wp-content/uploads/2023/07/passaporte-brasileiro-e-o-etias-Marcelo-Camargo-Agencia-Brasil.jpg",
            title: "LEI JOCA:",
            text: "oferta de transporte de animais em cabine de avião é aprovada pela Câmara",
            link: "SAIBA MAIS"
        },
        {
            img: "https://img.nsctotal.com.br/wp-content/uploads/2023/07/passaporte-brasileiro-e-o-etias-Marcelo-Camargo-Agencia-Brasil.jpg",
            title: "LEI JOCA:",
            text: "oferta de transporte de animais em cabine de avião é aprovada pela Câmara",
            link: "SAIBA MAIS"
        },
    ]

    return (
        <Container>
            <Title><h1><span>VOE</span>NOTÍCIAS</h1></Title>
            <SlideShow
                style={{ width: "100%", height:"300px"}}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                loop
                breakpoints={{
                    700:{
                        slidesPerView: 3
                    }
                }}
            >
                {notices.map((n, index) =>
                    <SwiperSlide>
                        <New key={index}>
                            <Img>
                                <img src={n.img} alt='img' />
                            </Img>
                            <Text>
                                <h1>{n.title}{n.text}</h1>
                                <Link>{n.link}</Link>
                            </Text>
                        </New>
                    </SwiperSlide>
                )}
            </SlideShow>
        </Container>
    );
};

const Container = styled.div`
width: 100%;
height: 350px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-around;
background-color: #ffffff;
position: relative;
h1{
    font-size: 30px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
}
`;

const Title = styled.div`
width:100%;
display: flex;
align-items: center;
justify-content: center;
color: #484848;
margin-top: 30px;
@media(min-width: 900px){
    justify-content: flex-start;
    margin-left:80px;
}
h1{
 
}
span{
    color: #5f78a9;
}
`;

const New = styled.div`
    width:450px;
    height:180px;
    display: flex;
    margin-top: 80px;
`;

const Img = styled.div`
    width: 150px;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    padding-left:30px;

    img{
        width: 200px;
        height: 100%;
        border-radius: 20px;
        transition: 0.3s ease-in-out;
    }

    img:hover{
        filter: brightness(0.7);
    }
`;

const Text = styled.div`
    padding-left:5px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    font-family: "Montserrat", sans-serif;
    width: 180px;
    h1{
        font-size: 15px;
        font-family: "Montserrat", sans-serif;
    }
`;

const Link = styled.div`
    font-size: 25px;
    margin-top: 10px;
`;

const SlideShow = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    --swiper-navigation-color: #003095; /* Cor dos botões */
    --swiper-navigation-size: 40px; /* Tamanho dos botões */
    height: 0px;
    top:50px;
width: 50px;
z-index:200;
position:absolute;
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