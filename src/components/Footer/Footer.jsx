import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWhatsapp,
    faFacebook,
    faInstagram,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                <div className="social-links">
                    <a
                        href="https://www.facebook.com/profile.php?id=61556071045849&mibextid=LQQJ4d"
                        className="facebook social"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                        href="https://www.instagram.com/e_ravenails/profilecard/?igsh=MW8wNng0NzAyd2RseQ=="
                        className="instagram social"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.tiktok.com/@e_ravenails?_t=8qXPSNueogn&_r=1" className="github social">
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                    <a href="https://wa.me/233595743606?text=" className="whatsapp social">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                </div>
                &copy; 2024 ravenails plug. All rights reserved.
        </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer
