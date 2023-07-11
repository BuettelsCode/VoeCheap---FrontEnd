import styled from "styled-components";

export default function InformationPage() {

    function submit(e) {
        e.preventDefault();
    }

    return (
        <FormContainer>

            <StyledForm>
                <Informations onSubmit={submit}>
                    <label for="name">Nome:</label>
                    <Input type="text" id="name" name="name" required />

                    <label for="whatsapp">WhatsApp:</label>
                    <Input type="text" id="whatsapp" name="whatsapp" required />

                    <label for="originCity">Origem:</label>
                    <Input type="text" id="originCity" name="originCity" required />

                    <label for="destinationCity">Destino:</label>
                    <Input type="text" id="destinationCity" name="destinationCity" required />

                    <label for="departureDate">Data de ida:</label>
                    <Input type="date" id="departureDate" name="departureDate" required />

                    <label for="returnDate">Data de volta:</label>
                    <Input type="date" id="returnDate" name="returnDate" />

                    <label for="message">Mensagem:</label>
                    <textarea id="message" name="message"></textarea>

                    <Button type="submit"><h1>Enviar</h1></Button>
                </Informations>
            </StyledForm>


        </FormContainer>
    );
}

const FormContainer = styled.div`
 display: flex;
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
  padding-top: 5px;
  border-radius: 11px;

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