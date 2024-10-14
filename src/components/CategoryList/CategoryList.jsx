import React, { useState } from 'react';
import "./CategotyList.css"

const CategoryList = () => {
    const categories = [
        { name: 'Artsy set 🎨🖌️', price: 50 },
        { name: 'Combo package ✨', price: 75 },
        { name: 'Fill in services 🖊️', price: 30 },
        { name: 'Freestyle 💅', price: 60 },
        { name: 'Frenchies 🌸', price: 40 },
        { name: 'Mani and pedi 🥰', price: 90 },
        { name: 'Ombré 🖋️', price: 55 },
        { name: 'Plugg sett 🔥', price: 65 },
        { name: 'Quick weave 💜', price: 45 },
        { name: 'Simple acrylic sets 💜', price: 35 }
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const handleSelect = (index) => {
        // If the same button is clicked again, deselect the category and hide the price
        if (selectedIndex === index) {
            setSelectedIndex(null);
            setSelectedPrice(null);
        } else {
            setSelectedIndex(index);
            setSelectedPrice(categories[index].price);
        }
    };

    return (
        <div className="category-list">
            <h1>Choose a Category...</h1>
            {categories.map((category, index) => (
                <div key={index} className="category-item">
                    <p>{category.name}</p>
                    <button
                        className={`select-button ${selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => handleSelect(index)}
                    >
                        Select
                    </button>
                </div>
            ))}

            {/* Conditionally render the price without the dollar sign */}
            {selectedPrice !== null && (
                <div className="price-info">
                    <p>Price: {selectedPrice}</p>
                </div>
            )}
        </div>
    );
};

export default CategoryList;
