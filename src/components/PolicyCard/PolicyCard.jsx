import React from 'react';
import './PolicyCard.css';
import calendar from "../../assets/calendar-icon.png"
import cancel from "../../assets/cancel-icon.png"
import cash from "../../assets/cash-icon.png"
import deposit from "../../assets/deposit-icon.png"
import email from "../../assets/email-icon.png"
import grace from "../../assets/grace-icon.png"
import home from "../../assets/home-icon.png"
import soak from "../../assets/soak-icon.png"
const PolicyCard = () => {
    return (
        <>
            <div className="grid-header-info">
                <h2>E_ravenails Booking-Info/Criteria</h2>

            </div>
            <div className="info-grid">
                <div className="info-card">
                    <img src={deposit} alt="Deposit" className="icon" />
                    <p>A NONREFUNDABLE $15 deposit is due at the time of booking and goes towards your total.</p>
                </div>
                <div className="info-card">
                    <img src={cash} alt="Cash" className="icon" />
                    <p>Please bring all cash on the day of your appointment. I don’t accept electronic payments.</p>
                </div>
                <div className="info-card">
                    <img src={grace} alt="Grace period" className="icon" />
                    <p>Everyone receives a 10 minute grace period. After that, a $10 fee will be charged.</p>
                </div>
                <div className="info-card">
                    <img src={email} alt="Email" className="icon" />
                    <p>Use the correct email and number to receive your appointment details.</p>
                </div>
                <div className="info-card">
                    <img src={cancel} alt="Cancel" className="icon" />
                    <p>Cancel your appointment 24 hours in advance to avoid being marked as a no-show.</p>
                </div>
                <div className="info-card">
                    <img src={calendar} alt="Booking" className="icon" />
                    <p>Booking is done biweekly. The schedule opens on the 26th and 12th of each month.</p>
                </div>
                <div className="info-card">
                    <img src={home} alt="Home-based" className="icon" />
                    <p>I am a home-based nail tech. No extra guests are allowed.</p>
                </div>
                <div className="info-card">
                    <img src={soak} alt="Soak off" className="icon" />
                    <p>I only work on nails I have done previously. Please book a soak off if needed.</p>
                </div>
            </div>
        </>
    );
};

export default PolicyCard
