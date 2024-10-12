import React, { useState } from 'react';
import "./CategotyList.css"

const CategoryList = () => {
    const categories = [
        { name: 'Artsy set 🎨🖌️' },
        { name: 'Combo package ✨' },
        { name: 'Fill in services 🖊️' },
        { name: 'Freestyle 💅' },
        { name: 'Frenchies 🌸' },
        { name: 'Mani and pedi 🥰' },
        { name: 'Ombré 🖋️' },
        { name: 'Plugg sett 🔥' },
        { name: 'Quick weave 💜' },
        { name: 'Simple acrylic sets 💜' }
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(index);
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
        </div>
    );
};

export default CategoryList;
