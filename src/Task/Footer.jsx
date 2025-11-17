import React from 'react'
import './footerStyle.css'

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-about">
                        <h3>Coffee Lovers</h3>
                        <p>Your daily dose of caffeine and comfort. Brewed fresh every day.</p>
                    </div>

                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-social">
                        <h4>Follow Us</h4>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>© 2025 Coffee Lovers | Designed by Akash</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
