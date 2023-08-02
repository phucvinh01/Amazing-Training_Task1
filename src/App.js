import Main from "./components/Main";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course ";
import About from "./pages/About";
import StemCourse from "./pages/StemCourse";
import Mentor from "./pages/Mentor";
import Blog from "./pages/Blog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="course" element={<Course />} />
            <Route path="about" element={<About />} />
            <Route path="stem" element={<StemCourse />} />            
            <Route path="mentor" element={<Mentor />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
