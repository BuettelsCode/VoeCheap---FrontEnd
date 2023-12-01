import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import BlogSlogan from "../Components/InitialPage/Blog/BlogSlogan";
import { useEffect, useState } from "react";
import axios from "axios";
import { EditPosts } from "../Components/EditBlog/EditPosts";

export default function BlogEdit() {

    const [lastPosts, setLastPosts] = useState([]);
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
                        Texto:
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
                        Link:
                        <input
                            type="text"
                            name="link"
                            value={newNoticeData.link}
                            onChange={handleInputChange}
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