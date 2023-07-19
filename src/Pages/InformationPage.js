import styled from "styled-components";
import arrowLeft from "../Assets/ArrowLeft.png";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { useContext } from "react";
import UserContext from "../contexts/ContextApi";
import { useState } from "react";

export default function InformationPage() {

    const { packSelect } = useContext(UserContext);
    const [name, setName] = useState("");
    const [whatsApp, setWhatsApp] = useState("");
    const [originCity, setOriginCity] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    function formatarData(data) {
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
      }

    function submit(e) {
        e.preventDefault();
        let message;
        const formattedDepartureDate = formatarData(departureDate);
        console.log(formattedDepartureDate);
        if (returnDate === "") {
            message = `Olá, meu nome é ${name}. Gostaria de obter informações sobre um pacote de viagem para ${packSelect}, saindo de ${originCity} com data de ida em ${formattedDepartureDate}, sem data de retorno.`;
        } else {
           const formattedReturnDate = formatarData(returnDate);
            message = `Olá, meu nome é ${name}. Gostaria de obter informações sobre um pacote de viagem para ${packSelect}, saindo de ${originCity} com data de ida em ${formattedDepartureDate} e com retorno programado para o dia ${formattedReturnDate}.`;
        }
        const encode = encodeURIComponent(message);
        window.open(`https://wa.me/553284186537?text=${encode}`);
    }

    return (
        <FormContainer>
            <Logo src={logo} alt="logo" />
            <StyledForm>
                <Informations onSubmit={submit}>
                    <label for="name">Nome:</label>  <Link style={{ textDecoration: "none" }} to={"/"}><Back src={arrowLeft} /></Link>
                    <Input type="text" id="name" name="name" value={name}
                        onChange={(e) => setName(e.target.value)} required />

                    <label for="whatsapp">WhatsApp:</label>
                    <Input type="text" id="whatsapp" name="whatsapp" value={whatsApp}
                        onChange={(e) => setWhatsApp(e.target.value)} required />

                    <label for="originCity">Origem:</label>
                    <Input type="text" id="originCity" name="originCity" value={originCity}
                        onChange={(e) => setOriginCity(e.target.value)} required />

                    <label for="destinationCity">Destino:</label>
                    <Input type="text" id="destinationCity" name="destinationCity" defaultValue={packSelect}
                        readOnly style={{ color: "black" }} required />

                    <label for="departureDate">Data de ida:</label>
                    <Input type="date" id="departureDate" name="departureDate" style={{ color: "black" }} value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)} required />

                    <label for="returnDate">Data de volta:</label>
                    <Input type="date" id="returnDate" name="returnDate" style={{ color: "black" }} value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)} />

                    <Button type="submit"><h1>Enviar</h1></Button>
                </Informations>
            </StyledForm>
        </FormContainer>
    );
}

const FormContainer = styled.div`
 display: flex;
 flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(1, 56, 129, 0.5);
`;

const Informations = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 350px;
    textarea{
        margin-bottom:10px;
color: #8707ff;
 border: 2px solid #013881;
 border-radius: 10px;
 padding: 10px 25px;
 background: transparent;
    }
    input{
        color: black;
    }
`
const Back = styled.img`
position: absolute;
width: 15px;
left: 30px;
top: 25px;
`
const Logo = styled.img`
width: 300px;
margin-bottom: 10px;
`

const Input = styled.input`
margin-bottom:10px;
color: #8707ff;
 border: 2px solid #013881;
 border-radius: 10px;
 padding: 10px 25px;
 background: transparent;
`
const StyledForm = styled.div`
    background-color: white;
  width: 500px;
  position: relative;
  padding-top: 5px;
  border-radius: 11px;
  font-weight: bold;
font-family: 'Roboto', sans-serif;
`
const Button = styled.button`
 margin-bottom:10px;
color: #8707ff;
 border: 2px solid #013881;
 border-radius: 10px;
 padding: 10px 25px;
 background: transparent;
 cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
     background-color: rgba(1, 56, 129, 0.5);
}
 h1{
    color: black;
 }
`