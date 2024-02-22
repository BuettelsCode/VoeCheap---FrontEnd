import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../Components/InitialPage/Header";
import styled from "styled-components";
import BlogSlogan from "../Components/InitialPage/Blog/BlogSlogan";

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
            <BlogSlogan />
            <Title>{post.text}</Title>
            <Conteudo>
                <img src={post.image} alt="img" />
                <Text>{post.link}</Text>
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
    margin-top: 30px;
}

`
const Title = styled.h1`
font-size: 50px;
font-family: 'Roboto', sans-serif;
`
const Text = styled.h2`
font-size: 30px;
flex: 1;
margin-top: 10px;
padding-bottom: 20px;
font-family: 'Open Sans', sans-serif;

`

const Conteudo = styled.div`
width: 1000px;
margin-top: 10px;
img{
    width: 1000px;
        height: 350px;
        object-fit: cover; 
  margin-right: 10px;
}
`