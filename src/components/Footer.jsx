const Footer = () => {
    return (
        <footer className="site-footer">
            <p className="site-footer-copy">
                © 2026 KitchenLogs. All rights reserved.
            </p>

            <div className="site-footer-social">
                <a href="#" aria-label="Instagram" className="site-footer-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer-icon">
                        <path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm11.25 1.5a1.25 1.25 0 1 1-1.25 1.25a1.25 1.25 0 0 1 1.25-1.25ZM12 7a5 5 0 1 1-5 5a5 5 0 0 1 5-5Zm0 2a3 3 0 1 0 3 3a3 3 0 0 0-3-3Z" />
                    </svg>
                </a>
                <a href="#" aria-label="Facebook" className="site-footer-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer-icon">
                        <path fill="currentColor" d="M13.5 21v-8h2.6l.4-3h-3V8.2c0-.9.3-1.5 1.6-1.5h1.7V4a22.1 22.1 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.1v8h3.4Z" />
                    </svg>
                </a>
                <a href="#" aria-label="X" className="site-footer-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer-icon">
                        <path fill="currentColor" d="M18.9 3h2.9l-6.3 7.2L23 21h-5.9l-4.6-6.1L7 21H4l6.8-7.8L1.8 3h6l4.1 5.4L18.9 3Zm-1 16h1.6L6.9 5H5.2L17.9 19Z" />
                    </svg>
                </a>
            </div>
        </footer>
    );

};

export default Footer;
