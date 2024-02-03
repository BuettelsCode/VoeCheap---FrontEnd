import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import BlogSlogan from "../Components/InitialPage/Blog/BlogSlogan";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { EditPosts } from "../Components/EditBlog/EditPosts";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/ContextApi";

export default function BlogEdit() {

    const { lastPosts, setLastPosts } = useContext(UserContext);
    const [showForm, setShowForm] = useState(false);
    const [newNoticeData, setNewNoticeData] = useState({
        text: '',
        image: '',
        link: '',
    });

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const URL = "https://api-voecheap.onrender.com/posts";
                const response = await axios.get(URL);
                setLastPosts(response.data);
            } catch (err) {
                console.log(err.response.data);
            }
        };

        fetchPosts();
    }, []);

    const handleUpdate = async () => {
        try {
            const response = await axios.get("https://api-voecheap.onrender.com/posts");
            setLastPosts(response.data);
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const handleAddNewNotice = () => {
        setShowForm(true);
    };

    const handleFormSubmit = async (e) => {
        console.log(e);
        e.preventDefault();

        try {
            await axios.post("https://api-voecheap.onrender.com/create", newNoticeData);
            setShowForm(false);
            setNewNoticeData({ text: '', image: '', link: '' });
            handleUpdate();
        } catch (err) {
            console.log(err.response.data);
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNoticeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Container>
            <Header />
            <BlogSlogan />
            <AddNewNotice>
                ADICIONAR NOVA NOTÍCIA <ion-icon name="add-circle" onClick={handleAddNewNotice}></ion-icon>
            </AddNewNotice>
            {showForm && (
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Título:
                        <input
                            type="text"
                            name="text"
                            value={newNoticeData.text}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        URL da Imagem:
                        <input
                            type="text"
                            name="image"
                            value={newNoticeData.image}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Texto:
                        <textarea
                            name="link"
                            value={newNoticeData.link}
                            onChange={handleInputChange}
                            className="text-input"
                        />
                    </label>
                    <button type="submit">Adicionar</button>
                </form>
            )}
            <Notices>
                {lastPosts.map((p, index) => (<EditPosts p={p} key={index} onUpdate={handleUpdate} />))}
            </Notices>
        </Container>
    )
}


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
        margin-top: 10px;
       
    }
}
label > textarea.text-input {
    width: 1000px;
    height: 500px;
    border: 1px solid #ccc;
    padding: 8px;
    margin-top: 4px;
    line-height: 1.5;  // Ajuste conforme necessário
    resize: vertical;  // Permite redimensionar verticalmente
    /* Adicione outros estilos conforme necessário */
}
`

const Notices = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
`
const AddNewNotice = styled.div`
font-size: 50px;
`