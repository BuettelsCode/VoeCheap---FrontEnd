import styled from "styled-components"
import photoFooter from "../../Assets/photoFooter.png"
import logo from "../../Assets/logoBranca.png"

export default function Footer() {
    return (
        <>
            <Container photoFooter={photoFooter} id="contact">
                <Logo src={logo} />
                <Contact>
                    <ContactContainer>
                        <div>DÚVIDAS? ENTRE EM CONTATO</div>
                        <div>E-MAIL
                            <h2> voechap@gmail.com</h2>
                        </div>
                        <div>WHATSAPP
                            <h2> +55 (32) 98495-7373</h2>
                        </div>
                    </ContactContainer>
                    <ClientEmail>
                        <div>
                            INSCREVA-SE PARA RECEBER AS MELHORES<br />
                            PROMOÇÕES COM EXCLUSIVIDADE
                        </div>
                        <div>:E-MAIL<br/>
                        -----------------------------------------</div>
                        <Button>INSCREVA-SE</Button>
                    </ClientEmail>
                </Contact>
            </Container>
            <Verif>2023 por VOECHEAP</Verif>
        </>
    )
}

const Container = styled.div`
width: 100%;
height: 300px;
background-color:#013881;
display: flex;
@media (max-width: 810px) {
    height: auto; /* Adjusted height for smaller screens */
    flex-direction: column; /* Updated to column for mobile layout */
  align-items: center; /* Center content in the column */
  }
`
const Logo = styled.img`
width: 200px;
height: 45px;
margin-top: 45px;
margin-left: 50px;
@media (max-width: 810px) {
    margin-top: 15px; /* Further adjusted margin for smaller screens */
    margin-bottom: -15px;
  }
`
const Contact = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
@media (max-width: 810px) {
    margin-top: 15px; /* Further adjusted margin for smaller screens */
    flex-direction: column; /* Updated to column for mobile layout */
  align-items: center; /* Center content in the column */
  }

`
const ContactContainer = styled.div`
color: white;
height: 100%;
margin-left: 50px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
@media (max-width: 810px) {
    margin-top: 15px; /* Further adjusted margin for smaller screens */
    text-align: center; /* Center text in the column */
    div{
        margin-top: 10px;
    }
  }
`
const ClientEmail = styled.div`
color: white;
display: flex;
flex-direction: column;
direction: rtl;
justify-content: space-around;
margin-right: 100px;
@media (max-width: 810px) {
    margin-top: 15px; /* Further adjusted margin for smaller screens */
    text-align: center; /* Center text in the column */
    margin-right: -35px;
  }
`
const Button = styled.div`
background-color: white;
color: blue;
width: 135px;
padding-right: 5px;
padding-left: 5px;
font-size: 20px;
font-weight: bold;
@media (max-width: 810px) {
   margin-right: 110px;
   font-size: 15px;
   width: 100px;
   margin-bottom: 10px;
  }
`

const Verif = styled.div`
background-color:#013881;
color: white;
width: 100%;
display: flex;
justify-content: center;
box-sizing: border-box;
padding-bottom: 5px;
`