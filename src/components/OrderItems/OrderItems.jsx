import React from 'react'
import "./OrderItems.css"

const OrderItems = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "03bdb8e8-5468-44b4-9e26-1af8373d086a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Order Placed Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            alert("Order Place Fail!");
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Inidcate Your Order Here!</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's do business</h1>
                    <p>
                        I am always available to take on new order. Feel free to place your order.
          </p>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                    />
                    <label htmlFor="">Your Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        required
                    />
                    <label htmlFor="">Enter Your Order</label>
                    <textarea
                        name="message"
                        rows="10"
                        placeholder="Enter your order here!"
                        required
                    ></textarea>
                    <button type="submit" className="contact-submit">
                        Order
          </button>
                </form>
            </div>
        </div>
    )
}

export default OrderItems

