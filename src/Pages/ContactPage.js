import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import { useState } from "react";


export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode lidar com os dados do formulário, por exemplo, enviá-los para o servidor.
        console.log(formData);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <Container>
            <Header />
            <ContactSlogan>
                <Title>CONTATO.</Title>
                <SubTitle>ENTRE EM CONTATO, TIRE SUAS DÚVIDAS COM UM ESPECIALISTA E RESERVE O<br /><span class="espaco-entre-linhas"> SEU PRÓXIMO DESTINO!</span></SubTitle>
            </ContactSlogan>
            <StyleForm>
                <Informations onSubmit={handleSubmit}>
                    <label for="name">Nome*</label>
                    <Input type="text" id="name" name="name" value={formData.name}
                        onChange={handleInputChange} placeholder="Digite seu nome" required />

                    <label for="email">E-mail*</label>
                    <Input type="text" id="email" name="email" value={formData.email}
                        onChange={handleInputChange} placeholder="Digite seu e-mail" required />

                    <label for="assunto">Assunto*</label>
                    <Input type="text" id="assunto" name="assunto" value={formData.subject}
                        onChange={handleInputChange} placeholder="Digite o assunto" required />

                    <label for="message">Mensagem*</label>
                    <InputMessage type="text" id="message" name="message" value={formData.message}
                        onChange={handleInputChange} placeholder="Escreve sua mensagem aqui"required />

                    <Button type="submit" style={{ textDecoration: "none" }} ><h1>Enviar</h1></Button>
                </Informations>
            </StyleForm>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ContactSlogan = styled.div`
width: 100%;
height: 200px;
background-color: #D5D0CA;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #D5D0CA;
`
const Title = styled.h1`
font-size: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-left: 200px;
    margin-bottom: 15px;
    color:#013881;
`
const SubTitle = styled.h2`
font-size: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-left: 200px;
    margin-bottom: 15px;
    color: white;
    span.espaco-entre-linhas {
      margin-top: 5px; /* Adiciona 10 pixels de margem na parte superior do texto */
      display: block; /* Torna o elemento inline em bloco para aplicar a margem */
    }
`
const StyleForm = styled.div`
width: 80%;
margin-top: 30px;
`
const Informations = styled.form`
display: flex;
flex-direction: column;
label{
    margin-left: 5px;
}
`
const Button = styled.button`
 border-radius: 10px;
 color: black;
 background: transparent;
 height: 50px;
 width: 80px;
 margin-bottom:20px;
 cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
     background-color: rgba(1, 56, 129, 0.5);
}
`
const Input = styled.input`
 height: 50px;
 margin-bottom: 10px;
 margin-top: 5px;
 border: 3px solid #888;
`
const InputMessage = styled.input`
height: 250px;
border: 3px solid #888;
margin-bottom: 10px;
 margin-top: 5px;
`