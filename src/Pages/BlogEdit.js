import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import BlogSlogan from "../Components/InitialPage/Blog/BlogSlogan";
import pass from "../Assets/Passaporte.jpg";

export default function BlogEdit() {
    return (
        <Container>
            <Header />
            <BlogSlogan />
            <AddNewNotice>
                ADICIONAR NOVA NOTÍCIA <ion-icon name="add-circle"></ion-icon>
            </AddNewNotice>
            <Notices>
                <Contender>
                    <Icon>
                        <ion-icon name="trash"></ion-icon>
                        <ion-icon name="create"></ion-icon>
                    </Icon>
                    <Img src={pass} alt="pass" />
                    <Column>
                        <Text>
                            Seu texto aqui. Este é um exemplo de texto longo
                        </Text>
                        <Info>Ler Mais</Info>
                    </Column>
                </Contender>
                <Contender>
                    <Icon>
                        <ion-icon name="trash"></ion-icon>
                        <ion-icon name="create"></ion-icon>
                    </Icon>
                    <Img src={pass} alt="pass" />
                    <Column>
                        <Text>
                            Seu texto aqui. Este é um exemplo de texto longo
                        </Text>
                        <Info>Ler Mais</Info>
                    </Column>
                </Contender>
                <Contender>
                    <Icon>
                        <ion-icon name="trash"></ion-icon>
                        <ion-icon name="create"></ion-icon>
                    </Icon>
                    <Img src={pass} alt="pass" />
                    <Column>
                        <Text>
                            Seu texto aqui. Este é um exemplo de texto longo
                        </Text>
                        <Info>Ler Mais</Info>
                    </Column>
                </Contender>
                <Contender>
                    <Icon>
                        <ion-icon name="trash"></ion-icon>
                        <ion-icon name="create"></ion-icon>
                    </Icon>
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

const Icon = styled.div`

ion-icon[name="trash"]{
    font-size: 50px;
  }
  ion-icon[name="create"]{
    font-size: 50px;
  }
`

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
const AddNewNotice = styled.div`
font-size: 50px;
`