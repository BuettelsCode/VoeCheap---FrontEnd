import styled from "styled-components"
import logo from "../../Assets/logoBranca.png"
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import fundo from "../../Assets/fundo-footer.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Container fundo={fundo}>
        <Certificados>
          <Conteudo>
            <Logo src={logo} />
            <Contatcs>
              <CiInstagram />
              <FaTiktok />
              <FaWhatsapp />
            </Contatcs>
          </Conteudo>
          <Institucional>
            <h1>INSTITUCIONAL</h1>
            <div className="columns-container">
              <div className="column">
                <a href="#" class="link"><h2>Sobre Nós</h2></a>
                <a href="#" class="link"><h2>Formas de Pagamento</h2></a>
              </div>
              <div className="column">
                <a href="#" class="link"><h2>Políticas de Privacidade</h2></a>
                <a href="#" class="link"><h2>Central de Ajuda</h2></a>
              </div>
            </div>
          </Institucional>
          <Newsletter>
            <h1>Cadastre-se e receba <span>novidades</span> e <span> promoções</span> exclusivas:</h1>
            <form action="/submit-email" method="post">
              <input type="email" id="email" name="email" placeholder="Digite seu melhor email" required />
              <button type="submit"><FaArrowRight />
              </button>
            </form>
            <h2>Obrigado!</h2>
          </Newsletter>
        </Certificados>
        <Direitos>
          <div>©2024 VOECHEAP.Todos os direitos reservados.</div>
        </Direitos>
      </Container>
    </>
  )
}

const Container = styled.div`
background-size: cover;
background-image: url(${props => props.fundo});
background-position: center; 
position: relative;
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (min-widht:950px){
  height: 300px;
}
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
const Direitos = styled.div`
background-color: #3464AD;
width: 100%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
font-size: 10px;
color: rgba(255, 255, 255, 0.5);
margin-top: -5px;
div{
  margin-top: 10px;
  height: 15px;
}
`;
const Logo = styled.img`
width: 150px;
margin-top: 10px;
@media(min-width:950px){
  width: 220px;
}
`;
const Certificados = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 300px;
background-color: #3464AD;
width: 100%;
@media (min-width: 750px){
flex-direction: row;
margin-top:150px;
align-items: center;
justify-content: space-around;
}
@media (min-width: 950px){
margin-top:350px;
}
`;
const Contatcs = styled.div`
display: flex;
  justify-content: center;
  gap: 10px;
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
  @media(min-width:950px){
    svg{
      width: 30px;
      height: 30px;
    }
  }
`;
const Institucional = styled.div`
  h1 {
    text-align: center; /* Opcional: centraliza o título */
    margin-top: 10px;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: bold;
    @media (min-width: 750px){
      margin-bottom: 20px;
    }
  }

  .columns-container {
    display: flex;
   justify-content: space-between;
    margin-top: 10px; /* Ajuste conforme necessário */
    margin-bottom: 5px;
    @media (min-width: 750px){
    display: inline;
    
}
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 170px; /* Ajuste conforme necessário */

  }

  h2 {
    margin-bottom: 8px;
    font-size:13.5px;
    color: white;
    font-family: "Montserrat", sans-serif;
  }
  a.link {
  text-decoration-color: white/* sua cor desejada */;
}
@media (min-width:950px){
  margin-left: -100px;
  margin-top: 15px;
}
`;
const Newsletter = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
font-size: 14px;
  @media (min-width: 750px){
    width: 210px;
    text-align: left;
  }
  @media (min-width:950px){
    width: 300px;
    h1{
      font-size:18px;
    }
  }
  h2{
    font-size: 14px;
    margin-top: 15px;
  }
span{
  font-weight: bold;
}
  form {
    margin-top: 10px;
    display: inline-block;
    position: relative;
    @media (min-width: 750px){
    width: 100%;
  }
  }
  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    padding-left: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    width: 300px;
    display: flex;
    justify-content: end;
    @media (min-width: 750px){
    width: 100%;
  }
  @media(min-width:950px){
    width: 300px;
  }
  }

  button {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #007BFF;
  }

  button svg {
    color: #3464AD;
    font-size: 20px;
  }
`
const Conteudo = styled.div`

`