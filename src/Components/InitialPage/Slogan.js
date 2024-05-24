import styled, { keyframes } from "styled-components"
import React, { useEffect, useState } from 'react';


export default function Slogan() {

    const images = [
        {
            url: ' "https://encurtador.com.br/mAGS5"',
            texts: {
                large: 'LISBOA',
                medium: 'passagem de <strong>ida</strong>',
                small: 'a partir de:',
            },
            price: "R$2800"
        },
        {
            url: "https://encurtador.com.br/asu14",
            texts: {
                large: 'ORLANDO',
                medium: 'passagem de <strong>ida</strong> e <strong>volta</strong>',
                small: 'a partir de:',
            },
            price: "R$3050"
        },
        {
            url: "https://encurtador.com.br/goEU1",
            texts: {
                large: 'PARIS',
                medium: 'passagem de <strong>ida</strong> e <strong>volta</strong>',
                small: 'a partir de:',
            },
            price: "R$4500"
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleCircleClick = (index) => {
        setCurrentImageIndex(index);
    };

    const texts = [
        "suporte 24 *",
        "segurança para comprar e viajar",
        "até 40% de desconto",
        "em até 12x no cartão de crédito",
        "suporte 24 *",
        "segurança para comprar e viajar",
        "até 40% de desconto",
        "em até 12x no cartão de crédito",
        "suporte 24 *",
        "segurança para comprar e viajar",
        "até 40% de desconto",
        "em até 12x no cartão de crédito",
        "suporte 24 *",
        "segurança para comprar e viajar",
        "até 40% de desconto",
        "em até 12x no cartão de crédito",
    ];

    const duplicatedTexts = [...texts, ...texts];

    return (
        <Container>
            <Image capa={images[currentImageIndex].url}>
                <Text>
                    <LargeText>{images[currentImageIndex].texts.large}</LargeText>
                    <MediumText dangerouslySetInnerHTML={{ __html: images[currentImageIndex].texts.medium }} />
                    <SmallText>{images[currentImageIndex].texts.small}</SmallText>
                </Text>
                <Price>{images[currentImageIndex].price}</Price>
                <Date>datas até 2025!</Date>
            </Image>
            <Circles>
                {images.map((_, index) => (
                    <Circle
                        key={index}
                        active={index === currentImageIndex}
                        onClick={() => handleCircleClick(index)}
                    />
                ))}
            </Circles>
            <ScrollingTextContainer>
                <ScrollingText>
                    {duplicatedTexts.map((text, index) => (
                        <TextItem key={index}>{text}</TextItem>
                    ))}
                </ScrollingText>
            </ScrollingTextContainer>
        </Container>
    );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  @media(min-width:900px){
    height: 250px;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.capa});
  background-size: cover;
  background-position: center center;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Sombra escura com 50% de opacidade */
    z-index: 1; /* Certifique-se de que a sombra está abaixo do conteúdo */
}
  /* Para garantir que o conteúdo fique acima da sombra */
& > * {
    position: relative;
    z-index: 2;
  }
`;
const Text = styled.div`
  padding: 10px;
  border-radius: 5px;
  text-align: end;
  color: white;
  font-family: "Montserrat", sans-serif;
  @media(min-width:900px){
    padding-top: 25px;
  }
`;
const Price = styled.div`
width: 100px;
background-color: #3464ad;
z-index: 10px;
float: right;
font-family: "Montserrat", sans-serif;
color:#eac253;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
border-bottom-left-radius: 20px;
border-top-left-radius: 20px;
height: 25px;
@media(min-width:900px){
    font-size: 30px;
 width: 160px;
 height: 50px;
}
`;
const Date = styled.div`
font-family: "Montserrat", sans-serif;
color:#e3dedb;
font-weight: bold;
position: absolute;
bottom: 10px;
left: 10px;
`;
const LargeText = styled.div`
  font-size: 35px;
  font-weight: bold;
  @media(min-width:900px){
    font-size: 45px;
  }
`;
const MediumText = styled.div`
  font-size: 10px;
  margin-top: 5px;
  strong {
    font-weight: bold;
  }
  @media(min-width:900px){
    font-size: 15px;
}
`;
const SmallText = styled.div`
  font-size: 8px;
  margin-top: 5px;
  @media(min-width:900px){
    font-size: 12px;
}
`;
const Circles = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? 'white' : 'transparent')};
  border: 1px solid white;
  transition: background-color 0.3s;
`;
const scroll = keyframes`
   0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;
const ScrollingTextContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #3464ad;
  color: #eac253;
  display: flex;
  align-items: center;
  height: 25px; /* Ajuste a altura conforme necessário */
`;
const ScrollingText = styled.div`
 white-space: nowrap;
  padding: 10px 0;
  animation: ${scroll} 70s linear infinite;
`;
const TextItem = styled.span`
  display: inline-block;
  margin-right: 50px; /* Espaçamento entre os textos */
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 14px; /* Ajuste o tamanho da fonte conforme necessário */
`;