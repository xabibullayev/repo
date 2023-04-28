import "./header.css";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <div>
            <MapOutlinedIcon />
            <span>504 White St . Dawsonville, GA 30534 , New York</span>
          </div>
          <div>
            <DraftsOutlinedIcon />
            <span>suport@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
