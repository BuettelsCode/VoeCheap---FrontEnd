import styled from "styled-components"
import logo from "../../Assets/logo.png"
import wpp from "../../Assets/wpp.png"

export default function Header() {
    return (<>
        <Head>
            <Logo src={logo} alt="logo"/>
            <Options><a onClick={() => { alert("funfo") }}>PACOTES</a>
                <a onClick={() => {alert("funfo")}}>DEPOIMENTOS</a> 
                <a onClick={() => {alert("funfo")}}>EQUIPE</a>
                <a onClick={() => {alert("funfo")}}>CONTATO</a>
            </Options>
            <WhatsApp>WHATSAPP <img src={wpp} alt="wpp"/></WhatsApp>
        </Head>
    </>)
}

const Head = styled.div`
height: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const Logo = styled.img`
width: 220px;
`

const Options = styled.div`
display:flex;
width: 600px;
justify-content: space-evenly;
font-family: 'Roboto', sans-serif;
font-weight: bold;
color: #4F4F4F;
`

const WhatsApp = styled.div`
height: 40px;
width: 150px;
border-radius: 11px;
background-color: #013881;
color: white;
font-weight: bold;
font-family: 'Roboto', sans-serif;
display: flex;
align-items: center;
justify-content: space-around;
img{
    width: 17.5px;
}
`