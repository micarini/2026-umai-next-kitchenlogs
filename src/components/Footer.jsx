import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <p className="site-footer-copy">
                © 2026 KitchenLogs. All rights reserved.
            </p>

            <div className="site-footer-social">
                <a href="#" aria-label="Instagram" className="site-footer-link">
                    <FaInstagram className="site-footer-icon" aria-hidden="true" />
                </a>
                <a href="#" aria-label="Facebook" className="site-footer-link">
                    <FaFacebookF className="site-footer-icon" aria-hidden="true" />
                </a>
                <a href="#" aria-label="X" className="site-footer-link">
                    <FaTwitter className="site-footer-icon" aria-hidden="true" />
                </a>
            </div>
        </footer>
    );

};

export default Footer;
