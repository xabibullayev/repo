import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/images/download.png" alt="" />
        </div>
        <ul className="menu">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>Services</li>
          <li>Contact</li>
          <li>
            <SearchOutlinedIcon />
            <PersonOutlinedIcon />
            <ShoppingCartOutlinedIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
