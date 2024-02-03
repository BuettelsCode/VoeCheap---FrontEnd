import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../Components/InitialPage/Header";
import styled from "styled-components";

export default function BlogText() {

    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const postId = location.pathname.split('/').pop();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://api-voecheap.onrender.com/posts");
                const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setPosts(sortedPosts);
                // setLoading(false); 
            } catch (err) {
                console.log(err.response.data);
                // setLoading(false); 
            }
        };
        fetchPosts();
    }, []);

    // Encontre o post correspondente com base no postId
    const post = posts.find(p => p.id === parseInt(postId));

    console.log(post);

    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <Container>
            <Header />
                <h1>{post.text}</h1>
            <Conteudo>
                <h2>{post.link}</h2>
                </Conteudo>
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
    font-size: 30px;
}
`

const Conteudo = styled.div`
width: 800px;
margin-top: 10px;
`