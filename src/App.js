import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
