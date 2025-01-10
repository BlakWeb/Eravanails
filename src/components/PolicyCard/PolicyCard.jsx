import React from 'react';
import './PolicyCard.css';
import calendar from "../../assets/calendar-icon.png";
import cancel from "../../assets/cancel-icon.png";
import cash from "../../assets/cash-icon.png";
import deposit from "../../assets/deposit-icon.png";
import email from "../../assets/email-icon.png";
import grace from "../../assets/grace-icon.png";
import home from "../../assets/home-icon.png";
import soak from "../../assets/soak-icon.png";

const PolicyCard = () => {
    return (
        <>
            <div className="grid-header-info">
                <h2>E_ravenails Booking-Info/Criteria</h2>
            </div>
            <div className="info-grid">
                <div className="info-card">
                    <img src={deposit} alt="Deposit" className="icon" />
                    <p>A NONREFUNDABLE $5 deposit is due at the time of booking and goes towards your total.</p>
                </div>
                <div className="info-card">
                    <img src={cash} alt="Cash" className="icon" />
                    <p>I accept both cash and electronic payments. Please bring all cash on the day of your appointment. I accept electronic payments via these account: 0595743606, 1857785791, Francis Ajige Ombugadu. contact me before making transfer!</p>
                </div>
                <div className="info-card">
                    <img src={grace} alt="Grace period" className="icon" />
                    <p>Everyone receives a 10-minute grace period. After that, a $10 fee will be charged.</p>
                </div>
                <div className="info-card">
                    <img src={email} alt="Email" className="icon" />
                    <p>Use the correct email, name, and phone number to receive your appointment details.</p>
                </div>
                <div className="info-card">
                    <img src={cancel} alt="Cancel" className="icon" />
                    <p>Cancel your appointment 24 hours in advance to avoid being marked as a no-show.</p>
                </div>
                <div className="info-card">
                    <img src={calendar} alt="Booking" className="icon" />
                    <p>Booking is done daily and also biweekly. The schedule opens daily depending on the time and day of your booking.</p>
                </div>
                <div className="info-card">
                    <img src={home} alt="Home-based" className="icon" />
                    <p>I am both home-based and an away nail tech. No extra guests are allowed.</p>
                </div>
                <div className="info-card">
                    <img src={soak} alt="Soak off" className="icon" />
                    <p>I work with any style a client sends to me, not just my own work.</p>
                </div>
            </div>
        </>
    );
};

export default PolicyCard;
