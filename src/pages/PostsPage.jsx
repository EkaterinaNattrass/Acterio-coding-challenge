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
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        const APIposts = result.posts;
        setPosts(APIposts);
      } catch (err) {
        console.log("Something went wrong");
      }
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
                      image="/static/post-image.jpg"
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
                        <Button
                          variant="outlined"
                          color="success"
                          sx={{ m: 2 }}
                        >
                          Learn more
                        </Button>
                      </Link>
                      <Button
                        disabled
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
    </div>
  );
}
