import React, { useState } from 'react';
import styled from 'styled-components';

export default function CreatePacks(){

  const [newPackage, setNewPackage] = useState({
    id: 1,
    destiny: "",
    image: "",
    price: "",
    support: "",
    departureTax: "",
    baggage: "",
    ticket: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPackage({ ...newPackage, [name]: value });
  };

  const handleCreatePackage = () => {
    // Aqui você pode fazer o que quiser com o novo pacote, por exemplo, enviá-lo para o servidor ou exibi-lo no console.
    console.log("Novo Pacote:", newPackage);
  };

  return (
    <Container>
    <h1 style={{ color: '#2196f3' }}>Detalhes do Pacote de Viagem</h1>
    <Form>
      <Label>Destino:
        <Input type="text" name="destiny" />
      </Label>
      <Label>Imagem:
        <Input type="text" name="image" />
      </Label>
      <Label>Preço:
        <Input type="text" name="price" />
      </Label>
      <Label>Suporte:
        <Input type="text" name="support" />
      </Label>
      <Label>Taxa de Embarque:
        <Input type="text" name="departureTax" />
      </Label>
      <Label>Bagagem:
        <Input type="text" name="baggage" />
      </Label>
      <Label>Passagem:
        <Input type="text" name="ticket" />
      </Label>
      <Button type="button">Criar Pacote</Button>
    </Form>
  </Container>
  );
}


const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    margin-top: 50px;
    font-weight: bold;
}
`;


const Form = styled.form`
  width: 300px; /* Adjust the width as needed */
  margin: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #2196f3; /* Blue border */
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #2196f3; /* Blue background */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1565c0; /* Darker blue on hover */
  }
`;