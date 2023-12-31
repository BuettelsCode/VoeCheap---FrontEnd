import styled from "styled-components";
import photoIago from "../../../Assets/photo_Iago.png";
import photoPaulo from "../../../Assets/photo_Paulo.png";
import photoYuri from "../../../Assets/photo_Yuri.png";
import certificado1 from "../../../Assets/certificadoPaulin.png";
import certificado2 from "../../../Assets/certificadoPaulin2.png";


export default function TeamSlogan() {
    return (<>
        <Slogan>
            <Title>A EMPRESA.</Title>
            <SubTitle>CONHEÇA NOSSA EQUIPE QUE ESTÁ SEMPRE PRONTA PARA ENCONTRAR AS<br /> <span class="espaco-entre-linhas">MELHORES OFERTAS PARA REALIZAR SEU SONHO DE CONHECER O MUNDO</span></SubTitle>
        </Slogan>
        <AboutUs>
            <h1>MISSÃO, VISÕES E VALORES.</h1>
            <div>
                A VoeCheap busca democratizar o acesso a passagens aéreas com uma proposta inovadora.
                Oferecemos consultoria especializada em todas as etapas da viagem, preços diferenciados
                e oportunidades de economia utilizando milhas de diversas companhias aéreas ao redor do mundo!

                Nossa missão é nos tornarmos a principal referência na democratização do acesso a passagens aéreas.
                Como empresa de consultoria especializada em viagens, buscamos proporcionar uma experiência única e personalizada
                aos clientes. Almejamos estabelecer parcerias estratégicas globais, expandindo nossa rede e oferecendo oportunidades
                de viagem incomparáveis!

                O DNA da empresa é pautado em: princípios éticos, morais, legalidade, transparência, processos claros, foco na satisfação dos clientes.
            </div>
        </AboutUs>
        <Team>
            <div><img src={photoIago} alt="photoIago" /><h2>IAGO</h2></div>
            <div><img src={photoPaulo} alt="photoPaulo" /><h2>PAULO</h2></div>
            <div><img src={photoYuri} alt="photoYuri" /><h2>YURI</h2></div>
        </Team>
        <LastPhrase>Junte-se a nós e descubra como voar pode ser mais barato do que você imagina!</LastPhrase>
        <Certificados>
            <Certificado1 src={certificado1} alt="certificado1" />
            <img src={certificado2} alt="certificaado2" />
        </Certificados>
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
    @media (max-width: 1195px) {
        margin-left: 100px;
}
@media (max-width: 923px) {
        margin-left: 100px;
        font-size: 25px;
}
@media (max-width: 530px) {
        margin-left: 50px;
        h1{
        font-size: 15px;      
    }
}
}
@media (max-width: 763px) {
       height: 150px;
       h1{
        font-size: 15px;      
    }
}
@media (max-width: 415px) {
 h1{
    font-size: 15px;
 }
}
@media (max-width: 530px) {
       h1{
       font-size: 13px;      
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
    @media (max-width: 1010px) {
       width: 200px;
  }
  @media (max-width: 758px) {
    width: 100px;
}
}
`
const AboutUs = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
div {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    color: #013881;
    font-weight: bold;
    font-size: 20px;
    word-wrap: break-word;
    text-align: center;
    margin-top: 20px;
    line-height: 1.5;
    @media (max-width: 500px) {
    font-size: 10px;
}
  }
h1{
    font-family: 'Roboto', sans-serif;
    color:#013881;
    font-weight: bold;
    font-size: 30px;
    @media (max-width: 500px) {
    font-size: 20px;
}
}
h2{
    font-family: 'Roboto', sans-serif;
    color:#013881;
    font-weight: bold;
    font-size: 15px;

}
`
const LastPhrase = styled.h1`
 font-family: 'Roboto', sans-serif;
    color:#013881;
    font-weight: bold;
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 50px;
    @media (max-width: 1200px) {
 font-size: 25px;
 text-align: center;
 width: 550px;
}
@media (max-width: 1010px) {
  font-size: 20px;
}
@media (max-width: 510px) {
    width: 300px;
    font-size: 10px;
}
@media (max-width: 550px) {
    width: 400px;
}
@media (max-width: 389px) {
    width: 300px;
}
@media (max-width: 750px) {
    font-size: 15px;
}
`
const Certificados = styled.div`
display: flex;
margin-bottom:20px;
justify-content: space-between;
img{
    @media (max-width: 1401px) {
       height: 300px;
  }
}
@media (max-width: 1010px) {
  display: flex;
    flex-direction: column;
}
@media (max-width: 530px) {
 img{
    height: 200px;
 }
}
`
const Certificado1 = styled.img`
height: 350px;
@media (max-width: 1401px) {
       height: 300px;
  }
  @media (max-width: 389px) {
    width: 380px;
}
`