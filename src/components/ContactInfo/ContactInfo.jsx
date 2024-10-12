import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import "./ContactInfo.css";
import pedicure from "../../assets/pedicure.jpg"

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <div className="pedicure-icon">
                <img src={pedicure} alt="lady-nail" />
            </div>
            <div className="contact-row">
                <p><strong><FontAwesomeIcon icon={faClock} /> Closed:</strong> Sunday and every other Saturday</p>
                <p><strong><FontAwesomeIcon icon={faMapMarkerAlt} /> Location:</strong> Ghana, Accra</p>
                <p><strong><FontAwesomeIcon icon={faPhone} /> Phone:</strong> 059-574-3606 <br> 0200981394 </p>
                <p><strong><FontAwesomeIcon icon={faEnvelope} /> Email:</strong> eravenailsaesthetics@gmail.com</p>
            </div>
        </div>
    );
};

export default ContactInfo;
