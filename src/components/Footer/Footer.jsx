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
                        href="https://www.instagram.com/e_ravenails%2Fprofilecard/igsh%3DMW8wNng0NzAyd2RseQ%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAAR28T1dNnpyw2tzGGRX9713yGQ54ah2IS3WABj7gw0h1FUY4u0qw_lLjBpQ_aem_Bpaz1_Iq1pur0shu6wHK5Q&h=AT0M2nsV_cm4ZRUwaswrXQaHoFtiw5h0KtDVJOo-CDE1QoW15c067Qt_cmf2SRJmReZJJPJQNpaOsHEAVXF5rT6OD3Q_HdpiMBwi5ZpyXcKDRckmjOOca-jlBpbmwovo9krfuQ"
                        className="instagram social"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://github.com/BlakWeb" className="github social">
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                    <a href="" className="whatsapp social">
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
