import styled from "styled-components"
import logo from "../../Assets/logo.png"
import wpp from "../../Assets/wpp.png"

export default function Header() {
    const PacksClick = () => {
        const packagesSection = document.getElementById("packages");
        packagesSection.scrollIntoView({ behavior: "smooth" });
    };
    const ClientsClick = () => {
        const packagesSection = document.getElementById("client");
        packagesSection.scrollIntoView({ behavior: "smooth" });
    };
    const TeamClick = () => {
        const packagesSection = document.getElementById("team");
        packagesSection.scrollIntoView({ behavior: "smooth" });
    };
    const ContactClick = () => {
        const packagesSection = document.getElementById("contact");
        packagesSection.scrollIntoView({ behavior: "smooth" });
    };

    function Wpp(){
        const message = "Olá, gostaria de saber mais informações sobre os pacotes de viagem";
        const encode = encodeURIComponent(message);
        window.open(`https://wa.me/5532998252663?text=${encode}`);
    }
    
    return (<>
        <Head>
            <Logo src={logo} alt="logo" />
            <Options>
                <h2 onClick={PacksClick}>PACOTES</h2>
                <h2 onClick={ClientsClick}>DEPOIMENTOS</h2>
                <h2 onClick={TeamClick}>EQUIPE</h2>
                <h2 onClick={ContactClick}>CONTATO</h2>
            </Options>
            <WhatsApp onClick={Wpp}>WHATSAPP<img src={wpp} alt="wpp" /></WhatsApp>
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
h2{
    cursor: pointer;
}
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
cursor: pointer;
img{
    width: 17.5px;
}
`