import styled from "styled-components"
import photoFooter from "../../Assets/photoFooter.png"
import wpp from "../../Assets/wpp.png"
import cadastur from "../../Assets/cadastur-logo.png"


export default function Footer() {
    return (
        <>

            <Container photoFooter={photoFooter} id="contact">
                <Contact>CONTATO:

                </Contact>
                <Translucent></Translucent>
                    <Infos>
                        <Wpp><img src={wpp} /> <h1>{`(32) 98495-7373`}</h1></Wpp>
                        <Instagram><ion-icon name="logo-instagram"></ion-icon> <h1>@voecheap</h1></Instagram>
                        <Email><ion-icon name="mail-outline"></ion-icon><h1>voecheap@gmail.com</h1></Email>
                        <Linha></Linha>
                        <CopyRight> VoeCheap | CNPJ 47.580.288/0001-84 – Juiz de Fora – MG | Todos os direitos reservados <img src={cadastur}/></CopyRight>
                    </Infos>
                    
                
            </Container>
        </>
    )
}

const Container = styled.div`
width: 100%;
height: 200px;
background: rgba(1, 56, 129, 0.8);
background-image: url(${props => props.photoFooter});
background-size:cover;
background-position: center center;
position: relative;
display: flex;
`
const Translucent = styled.div`
width: 100%;
height:100%;
background-color: #013881;
opacity: 0.6;
position: absolute;
`
const Contact = styled.div`
position: absolute;
z-index: 10;
width: 95%;
top: 20px;
left: 30px;
color: white;
font-size: 20px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`
const Infos = styled.div`
position: relative;
width: 100%;
z-index: 10;
display: flex;
align-items: center;
justify-content: space-around;
`
const Wpp = styled.div`

z-index: 10;
left: 30px;
display: flex;
align-items: center;
img{
    width: 30px;
    margin-right: 10px;
}
h1{
    font-size: 25px;
    color: white;
}
`
const Instagram = styled.div`

z-index: 10;
left: 30px;
display: flex;
align-items: center;
ion-icon[name="logo-instagram"] {
  color: white;
  font-size: 30px;
  margin-right: 10px;
}
h1{
    font-size: 25px;
    color: white;
}
`
const Email = styled.div`

z-index: 10;
left: 30px;
display: flex;
align-items: center;
ion-icon[name="mail-outline"] {
  color: white;
  font-size: 30px;
  margin-right: 10px;
}
h1{
    font-size: 25px;
    color: white;
}
`
const Linha = styled.div`
position: absolute;
background-color: white;
margin-top: 10px;
height: 2px;
width: 100%;
bottom: 70px;
`

const CopyRight = styled.h1`
color: white;
position: absolute;
bottom: 30px;
img{
    padding-left: 80px;
    width: 100px;
}
`
