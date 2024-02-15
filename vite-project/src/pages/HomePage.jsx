import Button from "@mui/material/Button";

export default function HomePage() {
  return (
      <div className="HomePage">
        <p className="type">Welcome to the world of posts</p>
        <Button color="secondary" size="medium" variant="contained">
          Browse Posts
        </Button>
      </div>
  );
}
