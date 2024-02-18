import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function PostDetailsPage() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();
  const API_URL = "https://dummyjson.com/posts/" + id;

  useEffect(() => {
    async function getPost() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setPost(result);
      } catch (err) {
        setError("Sorry, something went wrong");
      }
    }
    getPost();
  }, [API_URL]);

  const [additionalReactions, setAdditionalReactions] = useState(0);
  const increment = () => {
    setAdditionalReactions((r) => r + 1);
  };

  return (
    <div className="PostContainer">
      {error && (
        <Link to="/posts">
          <Button color="error">
            {error} <br />
            Back to the posts
          </Button>
        </Link>
      )}
      {!error && (
        <Box sx={{ flexGrow: 1, p: 6 }}>
          <Grid container spacing={6}>
            <Card key={post.id} sx={{ maxWidth: 600, p: 6 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="sunset in the mountains"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {post.title}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  Post #{post.id}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {post.body}
                </Typography>
                <Typography
                  sx={{ mt: 2 }}
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                >
                  Written by: User #{post.userId}
                </Typography>
                <Typography
                  sx={{ mt: 1 }}
                  variant="body2"
                  color="text.secondary"
                >
                  {post.tags &&
                    post.tags.map((tag, index) => (
                      <span key={index}>#{tag}</span>
                    ))}
                </Typography>
              </CardContent>
              <CardActions>
                <div className="ButtonContainer">
                  <Link to={"/posts"}>
                    <Button variant="outlined" color="success">
                      Back to the posts
                    </Button>
                  </Link>
                  <Button
                    onClick={increment}
                    sx={{ m: 2 }}
                    variant="contained"
                    color="success"
                  >
                    {post.reactions + additionalReactions}{" "}
                    <FavoriteIcon sx={{ ml: 1 }} />
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
        </Box>
      )}
    </div>
  );
}
