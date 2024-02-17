import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import Search from '../components/Search';

const API_URL = 'https://dummyjson.com/posts';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {

      const response = await fetch(API_URL);
      const result = await response.json();
      const APIposts = result.posts;
      setPosts(APIposts);
    }
    getPosts();
  });
  return (
    <div className="Posts">
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h2">Latest Posts</Typography>
      < Search />
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid key={post.id} xs={4}>
            <div className="card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`}>
                <Button variant="outlined" color="success">
                  Learn more
                </Button>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}
