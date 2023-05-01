import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import "./app.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
