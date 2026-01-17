"use client";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-slug">
      <div className="footer-content">
        {/* Services + About */}
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Hosting</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#">Company</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section footer-text">
            <h3>Slug</h3>
            <p>
              Connecting farms with restaurants and nonprofits. Reducing waste and feeding communities.
              Join our mission to make surplus food useful.
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><i className="icon ion-social-facebook"></i></a>
          <a href="#"><i className="icon ion-social-twitter"></i></a>
          <a href="#"><i className="icon ion-social-snapchat"></i></a>
          <a href="#"><i className="icon ion-social-instagram"></i></a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">Slug © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
