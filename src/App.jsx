import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/posts" element={<PostsPage />}>
        </Route>
        <Route path="/posts/:id" element={<PostDetailsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
