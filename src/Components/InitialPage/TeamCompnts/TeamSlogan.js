import styled from "styled-components";
import photoIago from "../../../Assets/photo_Iago.png";
import photoPaulo from "../../../Assets/photo_Paulo.png";
import photoYuri from "../../../Assets/photo_Yuri.png";


export default function TeamSlogan() {
    return (<>
        <Slogan>
            <Title>A EMPRESA.</Title>
            <SubTitle>CONHEÇA NOSSA EQUIPE QUE ESTÁ SEMPRE PRONTA PARA ENCONTRAR AS<br /> <span class="espaco-entre-linhas">MELHORES OFERTAS PARA REALIZAR SEU SONHO DE CONHECER O MUNDO</span></SubTitle>
        </Slogan>
        <Team>
            <div><img src={photoIago} alt="photoIago" /><h2>IAGO</h2></div>
            <div><img src={photoPaulo} alt="photoPaulo" /><h2>PAULO</h2></div>
            <div><img src={photoYuri} alt="photoYuri" /><h2>YURI</h2></div>
        </Team>
        <AboutUs>
            <h1>MISSÃO, VISÕES E VALORES.</h1>
            <div>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 
            </div>
        </AboutUs>
    </>)
}

const Slogan = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #D5D0CA;
h1{
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-left: 200px;
    margin-bottom: 15px;
    span.espaco-entre-linhas {
      margin-top: 5px; /* Adiciona 10 pixels de margem na parte superior do texto */
      display: block; /* Torna o elemento inline em bloco para aplicar a margem */
    }
}
@media (max-width: 768px) {
    height: 500px;
 h1{
    font-size: 30px;
 }
  }
  @media (max-width: 415px) {
    height: 300px;
 h1{
    font-size: 15px;
 }
}
`
const Title = styled.h1`
color:#013881;
`
const SubTitle = styled.h1`
color: white;
`
const Team = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
margin-top: 50px;
text-align: center;
h2{
    font-family: 'Roboto', sans-serif;
    color:#013881;
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
}
img{
    width: 250px;
}
`
const AboutUs = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
div{
    width: 1000px;
    flex-wrap: wrap;
    font-family: 'Roboto', sans-serif;
    color:#013881;
    font-weight: bold;
    font-size: 20px;
    word-wrap: break-word;
    text-align: center;
    margin-top: 20px;
}
h1{
    font-family: 'Roboto', sans-serif;
    color:#013881;
    font-weight: bold;
    font-size: 30px;
}
h2{
    font-family: 'Roboto', sans-serif;
    color:#013881;
    font-weight: bold;
    font-size: 15px;
}
`