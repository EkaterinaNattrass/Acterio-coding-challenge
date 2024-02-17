
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostDetailsPage() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const API_URL = "https://dummyjson.com/posts/" + id;

  useEffect(() => {
    async function GetPosts() { 
      const response = await fetch(API_URL);
      const result = await response.json();
      setPost(result);
    }
    GetPosts();
  });
  return (
    <div className="Posts">
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={2}>
          <Grid key={post.id} xs={4}>
            <div className="card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <Link to={'/posts'}>
              <Button variant="contained" color="success">
                  React
                </Button>
                <Button variant="outlined" color="success">
                  Back to the posts
                </Button>
              </Link>
            </div>
          </Grid>
      </Grid>
    </Box>
    </div>
  );
}
