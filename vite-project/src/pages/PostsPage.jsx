// import * as React from 'react';
import { useState, useEffect, /* useParams, useHistory */ } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";

const API_URL = "https://dummyjson.com/posts";
  
  export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    /* const { id } = useParams();
    const history = useHistory();
    const handleProceed = (e) => {
      history.push(`/products/${id}`)
    } */


    useEffect(() => {
        async function getPosts () {
        const response = await fetch(API_URL);
        const result = await response.json();
        const APIposts = result.posts;
        setPosts(APIposts);
    } getPosts();
    });
    return (
      <Box sx={{ flexGrow: 1, p:4 }}>
      <h1 className='posts'>Posts</h1>
      <Grid container spacing={2}>
        { posts.map((post) => (
          <Grid key={post.id} item xs={4}>
          <div className='card'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
         <Link to={`/posts/${post.id}`}><Button variant="outlined">Learn more</Button></Link>  
            </div>
        </Grid>
        ))}  
      </Grid>
    </Box> 
    ); 
  }