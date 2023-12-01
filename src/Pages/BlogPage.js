import styled from "styled-components";
import Header from "../Components/InitialPage/Header";
import BlogSlogan from "../Components/InitialPage/Blog/BlogSlogan";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Posts from "../Components/InitialPage/Blog/Posts";

export default function BlogPage() {

    const [lastPosts, setLastPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://api-voecheap.onrender.com/posts");
                const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setLastPosts(sortedPosts);
            } catch (err) {
                console.log(err.response.data);
            }
        };

        fetchPosts();
    }, []);

    return (
        <Container>
            <Header />
            <BlogSlogan />
            <Notices>
                {lastPosts.map((p, index) => (<Posts p={p} key={index} />))}
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