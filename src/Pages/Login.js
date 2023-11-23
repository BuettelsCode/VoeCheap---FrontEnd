import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        navigate("/blogedit");
    }

    return (
        <Container>
            <StyledForm>
                <Form onSubmit={submit}>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />

                    <label for="password">Senha:</label>
                    <input type="password" id="password" name="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit">Entrar</button>
                </Form>
            </StyledForm>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #013881;
display: flex;
align-items: center;
justify-content: center;
`
const StyledForm = styled.div`
width: 400px;
height: 200px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
`
const Form = styled.form`
display: flex;
flex-direction: column;
input{
    margin-bottom: 20px;
}
button{
    background-color: #013881;
    color: white;
    cursor: pointer;
}
`