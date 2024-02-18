import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Typography variant="h2">
        Reach New Heights: <br /> Explore, Inspire, Conquer!
      </Typography>
      <div className="ButtonContainer">
        <Link to="/posts">
        <Button size="large" color="success" variant="contained">
          Browse Posts
        </Button>
      </Link>
      </div>
      
    </div>
  );
}
