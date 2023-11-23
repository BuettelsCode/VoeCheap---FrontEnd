import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import BlogSlogan from "../Components/InitialPage/Blog/BlogSlogan";
import pass from "../Assets/Passaporte.jpg";

export default function BlogPage() {
    return (
        <Container>
            <Header />
            <BlogSlogan />
            <Notices>
                <Contender>
                    <Img src={pass} alt="pass" />
                    <Column>
                        <Text>
                            Seu texto aqui. Este é um exemplo de texto longo 
                        </Text>
                        <Info>Ler Mais</Info>
                    </Column>
                </Contender>
                <Contender>
                    <Img src={pass} alt="pass" />
                    <Column>
                        <Text>
                            Seu texto aqui. Este é um exemplo de texto longo 
                        </Text>
                        <Info>Ler Mais</Info>
                    </Column>
                </Contender>
                <Contender>
                    <Img src={pass} alt="pass" />
                    <Column>
                        <Text>
                            Seu texto aqui. Este é um exemplo de texto longo 
                        </Text>
                        <Info>Ler Mais</Info>
                    </Column>
                </Contender>
                <Contender>
                    <Img src={pass} alt="pass" />
                    <Column>
                        <Text>
                            Seu texto aqui. Este é um exemplo de texto longo 
                        </Text>
                        <Info>Ler Mais</Info>
                    </Column>
                </Contender>
            </Notices>
        </Container>
    )
}


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Notices = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
`
const Contender = styled.div`
 display: flex;
  align-items: center;
  width: 600px; /* Ajuste conforme necessário */
  height: 400px;
  padding: 10px;
  margin-top: 50px;
`;

const Img = styled.img`
 width: 300px;
        height: 100%;
        object-fit: cover; 
  margin-right: 10px;
`
const Text = styled.p`
margin-top: 180px;
font-size: 30px;
  word-wrap: break-word;
`;

const Info = styled.div`
font-size: 25px;
margin-top: 20px;
width: 100px;
padding: 5px;
text-align: center;
background-color: blue;
`
const Column = styled.div`
display: flex;
flex-direction: column;
`