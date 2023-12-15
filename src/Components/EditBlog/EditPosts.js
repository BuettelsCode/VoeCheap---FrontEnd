import axios from "axios";
import { useState } from "react";
import styled from "styled-components";


export function EditPosts({ p, onUpdate}) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(p.text);
    const [editedImage, setEditedImage] = useState(p.image);
    const [editedLink, setEditedLink] = useState(p.link);

    const handleDeleteClick = async () => {
        const deleteURL = `https://api-voecheap.onrender.com/delete/${p.id}`;

        try {
            await axios.delete(deleteURL);
            onUpdate();
            window.location.reload();
        } catch (err) {
            console.log(err.response.error);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        const editURL = `https://api-voecheap.onrender.com/put/${p.id}`;

        try {
            await axios.patch(editURL, { text: editedText, image: editedImage, link: editedLink });
            setIsEditing(false);
            onUpdate();
        } catch (err) {
            console.log(err.response.error);
        }
    };

    return (
        <>
            <Contender>
                <Icon>
                    <ion-icon name="trash" onClick={handleDeleteClick}></ion-icon>
                    <ion-icon name="create" onClick={handleEditClick}></ion-icon>
                </Icon>
                <Img src={isEditing ? editedImage : p.image} alt="pass" />
                <Column>
                    {isEditing ? (
                        <>
                            <label>
                                Texto:
                                <textarea
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />
                            </label>
                            <label>
                                URL da Imagem:
                                <input
                                    type="text"
                                    value={editedImage}
                                    onChange={(e) => setEditedImage(e.target.value)}
                                />
                            </label>
                            <label>
                                Link:
                                <input
                                    type="text"
                                    value={editedLink}
                                    onChange={(e) => setEditedLink(e.target.value)}
                                />
                            </label>
                            <button onClick={handleSaveClick}>Salvar</button>
                        </>
                    ) : (
                        <>
                            <Text>{p.text}</Text>
                            <a href={isEditing ? editedLink : p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: "white" }}>
                                <Info>Ler Mais</Info>
                            </a>
                        </>
                    )}
                </Column>
            </Contender>
        </>
    )
};


const Contender = styled.div`
 display: flex;
  align-items: center;
  width: 600px; /* Ajuste conforme necessário */
  height: 400px;
  padding: 10px;
  margin-top: 50px;
`;

const Img = styled.img`
 width: 300px;
        height: 100%;
        object-fit: cover; 
  margin-right: 10px;
`
const Text = styled.p`
margin-top: 180px;
font-size: 30px;
  word-wrap: break-word;
`;

const Info = styled.div`
font-size: 25px;
margin-top: 20px;
width: 100px;
padding: 5px;
text-align: center;
background-color: blue;
`
const Column = styled.div`
display: flex;
flex-direction: column;
`
const Icon = styled.div`
display: flex;
flex-direction: column;
ion-icon[name="trash"]{
    font-size: 50px;
    cursor: pointer;
  }
  ion-icon[name="create"]{
    font-size: 50px;
    cursor: pointer;
  }
`