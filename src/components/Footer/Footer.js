import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="location">
            <FaHome size={30} style={{ color: "#222", marginRight: "2rem" }} />
            <div>
              <p>A2/103 Shree Saraswati Socitey Chembur-71 </p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#222", marginRight: "2rem" }}
              />
              91+ 9137948726
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#222", marginRight: "2rem" }}
              />
              siddharth.yadav0913@gmail.com
            </h4>
          </div>
        </div>

        <div className="footer-right">
          <h4>About Us</h4>
          <p>
            Next generation hiring solution Powerful agile all-in-one hiring
            tool for your recuriting needs built with productivityat heart and
            loaded with features to help you hire more effectivetly
          </p>
        </div>

        <div className="social">
          <FaFacebook
            size={30}
            style={{ color: "#222", marginRight: "2rem" }}
          />
          <FaGithub size={30} style={{ color: "#222", marginRight: "2rem" }} />
          <FaInstagram
            size={30}
            style={{ color: "#222", marginRight: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
