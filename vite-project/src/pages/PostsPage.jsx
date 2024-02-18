import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

const API_URL = "https://dummyjson.com/posts";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(`searching ${search}`);
  };

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
    <div className="PostsContainer">
      <Box sx={{ flexGrow: 1, p: 6 }}>
        <Typography variant="h3" color="text.secondary">
          Latest Posts
        </Typography>
        <Box
          onSubmit={handleOnSubmit}
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            id="outlined-basic"
            name="searchQuery"
            type="search"
            label="Search the title"
            variant="outlined"
            color="success"
          />
        </Box>
        <Grid container spacing={6}>
          {posts
            .filter((post) => {
              return search.toLowerCase() === ""
                ? post
                : post.title.toLowerCase().includes(search);
            })
            .map((post) => (
              <Grid key={post.id} xs={6}>
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image="https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="sunset in the mountains"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" noWrap>
                      {post.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/posts/${post.id}`}>
                      <Button variant="outlined" color="success" sx={{ m: 2 }}>
                        Learn more
                      </Button>
                    </Link>
                    <Link>
                      <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
