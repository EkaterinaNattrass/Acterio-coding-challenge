import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DeletePost from "../components/DeletePost";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
    <div className="PostsContainer">
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
              <Typography variant="body1" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
            <CardActions>
              <div className="ButtonContainer">
                <Link>
                <Button variant="contained" color="success">
                  React
                </Button>
              </Link>
              <Link to={"/posts"}>
                <Button variant="outlined" color="success">
                  Back to the posts
                </Button>
              </Link>
              </div>
              
            </CardActions>
          </Card>
        </Grid>
      </Box>
    </div>
  );
}
