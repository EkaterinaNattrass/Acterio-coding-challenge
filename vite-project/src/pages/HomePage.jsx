import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="HomePage">
      <p className="type">Welcome to the universe of posts</p>
      <Link to="/posts">
        <Button color="secondary" size="medium" variant="contained">
          Browse Posts
        </Button>
      </Link>
    </div>
  );
}
