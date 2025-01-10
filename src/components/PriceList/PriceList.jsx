import React from 'react';
import './PriceList.css'; // Add some custom styling

const PriceList = () => {
    return (
        <>
            <div className="price-list-header">
                <h1>E_ravenails Price List</h1>
            </div>
            <div className="price-list-container">

                <div className="price-category">
                    <h2>Acrylics</h2>
                    <ul>
                        <li>Short acrylic plain - 250</li>
                        <li>Medium acrylic plain - 300</li>
                        <li>Long acrylic plain - 350</li>
                        <li>Refill - 200</li>
                    </ul>
                </div>

                <div className="price-category">
                    <h2>Extras</h2>
                    <ul>
                        <li>Stones per finger - 30</li>
                        <li>Art per finger - 30</li>
                    </ul>
                </div>

                <div className="price-category">
                    <h2>Gel Builder</h2>
                    <ul>
                        <li>Gel builder short - 250</li>
                        <li>Gel builder medium - 300</li>
                        <li>Gel builder long - 350</li>
                    </ul>
                </div>

                <div className="price-category">
                    <h2>Overlay & Designs</h2>
                    <ul>
                        <li>Overlay - 200</li>
                        <li>French design - 50</li>
                        <li>Ombré nails short - 300</li>
                        <li>Ombré nails medium - 350</li>
                        <li>Ombré nails long - 400</li>
                        <li>Chrome - 50</li>
                    </ul>
                </div>

                <div className="price-category">
                    <h2>Other Services</h2>
                    <ul>
                        <li>Stick on Nails - 200</li>
                        <li>Toe acrylic with gel - 200</li>
                        <li>Gel polish - 100</li>
                        <li>Dissolving - 50</li>
                        <li>Manicure - 100</li>
                        <li>Pedicure - 200</li>
                        <li>Home service - X2</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PriceList;
