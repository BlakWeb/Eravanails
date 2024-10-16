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
                        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fe_ravenails%2Fprofilecard%2F%3Figsh%3DMW8wNng0NzAyd2RseQ%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3V341hMP-8dtasTUBGhzlngVWVJsX9qu4niLaZvHzw1Yi1GEtkgcabhBs_aem_5_pjmr5FE_pGeFwCiJ4pfA&h=AT1bWrolLBWMq4YdpWwhPcH0kqmdeMTsPnWZzmz0BMYk0DXJB5gEyHQT1fSbCxry2aqbprAjWIizVj7Mf2Be46PhJ4aHjPRwqQ33vQD7uFzstHBECPp_8E62oA-2fzxhXhQgmQ"
                        className="instagram social"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.tiktok.com/@e_ravenails?_t=8qXPSNueogn&_r=1" className="github social">
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                    <a href="wa.me/233595743606" className="whatsapp social">
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
