import styled from "styled-components"

export default function BlogSlogan() {
    return (
        <>
            <Slogan>
                <Title>NOTÍCIAS.</Title>
                <SubTitle>FIQUE POR DENTRO DAS ÚLTIMAS NOTÍCIAS DO MUNDO DAS VIAGENS, ALÉM DE <span class="espaco-entre-linhas">DICAS EXCLUSIVAS PARA OS VIAJANTES</span></SubTitle>
            </Slogan>
        </>
    )
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
    margin-left: 100px;
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