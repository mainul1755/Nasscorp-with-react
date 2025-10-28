 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <div className="social-icons">
            <a href="#"><img src="icon/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="icon/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="icon/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="icon/youtube.png" alt="YouTube" /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Company info</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Features</h3>
          <ul>
            <li><a href="#">Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">IOS & Android</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made With Love By Figmaland All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
