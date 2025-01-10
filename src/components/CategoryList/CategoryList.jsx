import React, { useState } from 'react';
import "./CategotyList.css"
import nail1 from '../../assets/nail1.jpg'
import nail2 from '../../assets/nail2.jpg'
import nail3 from '../../assets/nail3.jpg'
import nail4 from '../../assets/nail4.jpg'
import nail5 from '../../assets/nail5.jpg'
import nail6 from '../../assets/nail6.jpg'
import nail7 from '../../assets/nail7.jpg'
import nail8 from '../../assets/nail8.jpg'
import nail9 from '../../assets/nail9.jpg'
import nail10 from '../../assets/nail10.jpg'
import nail11 from '../../assets/nail11.jpg'
import nail12 from '../../assets/nail12.jpg'
import nail13 from '../../assets/nail13.jpg'
import nail14 from '../../assets/nail14.jpg'
import nail15 from '../../assets/nail15.jpg'
import nail16 from '../../assets/nail16.jpg'
import nail17 from '../../assets/nail17.jpg'
import nail18 from '../../assets/nail18.jpg'
import nail19 from '../../assets/nail19.jpg'
import nail20 from '../../assets/nail20.jpg'
import nail21 from '../../assets/nail21.jpg'
import nail22 from '../../assets/nail22.jpg'
import nail23 from '../../assets/nail23.jpg'
import nail24 from '../../assets/nail24.jpg'
import nail25 from '../../assets/nail25.jpg'
import nail26 from '../../assets/nail26.jpg'
import nail27 from '../../assets/nail27.jpg'
import nail28 from '../../assets/nail28.jpg'
import nail29 from '../../assets/nail29.jpg'
import nail30 from '../../assets/nail30.jpg'
import long1 from '../../assets/long1.jpg'
import long2 from '../../assets/long2.jpg'
import long3 from '../../assets/long3.jpg'
import long4 from '../../assets/long4.jpg'
import long5 from '../../assets/long5.jpg'
import long6 from '../../assets/long6.jpg'
import long7 from '../../assets/long7.jpg'



const CategoryList = () => {
    const categories = [
        {
            name: 'Artsy set 🎨🖌️',
            price: 50,
            img: [nail8, nail10, nail11, nail2, nail18, nail19, nail27],
        },
        {
            name: 'Fill in services 🖊️',
            price: 30,
            img: [],
        },
        {
            name: 'Freestyle 💅',
            price: 60,
            img: [],
        },
        {
            name: 'Frenchies 🌸',
            price: 40,
            img: [nail1, nail13, nail11, nail12, nail30, nail18, nail9],
        },
        {
            name: 'Ombré 🖋️',
            price: 55,
            img: [nail15, nail16, nail3],
        },
        {
            name: 'Quick weave 💜',
            price: 45,
            img: [],
        },
        {
            name: 'Simple acrylic sets 💜',
            price: 35,
            img: [nail18, nail19, nail20, nail21, nail22, nail23, nail24],
        },
        {
            name: 'Medium sets 💜',
            price: 35,
            img: [nail14, nail4, nail5, nail6, nail7, nail29],
        },
        {
            name: 'Long set 💜',
            price: 35,
            img: [long1, long2, long3, long4, long5, long6, long7, nail25, nail26, nail17, nail28],
        },

        {
            name: 'Home Service 💜',
            price: X2, 
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(index);
        setSelectedPrice(categories[index].price);


        handleSubmit(categories[index]);
    };

    const handleSubmit = async (category) => {
        const data = {
            access_key: '03bdb8e8-5468-44b4-9e26-1af8373d086a',
            subject: 'Category Selection Notification',
            name: 'Category Selection',
            email: 'eravenailsaesthetics@gmail.com',
            message: `The user selected the category: ${category.name} with price $${category.price}`,
        };

        try {
            const response = await axios.post('https://api.web3forms.com/submit', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert('Order placed sent successfully!');
        } catch (error) {
            console.error('Error response:', error.response ? error.response.data : error);
            alert('Order place fail!');
        }
    };

    return (
        <div className="category-list">
            <h1>Choose a Category...</h1>
            {categories.map((category, index) => (
                <div key={index} className={`category-item ${selectedIndex === index ? 'selected-category' : ''}`}>
                    <p>{category.name}</p>
                    <div className="image-gallery">
                        {category.img.length > 0 ? (
                            category.img.map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt={`${category.name} ${imgIndex + 1}`} />
                            ))
                        ) : (
                                <p>No images available</p>
                            )}
                    </div>
                    <button
                        className={`select-button ${selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => handleSelect(index)}
                    >
                        {selectedIndex === index ? 'Selected' : 'Select'}
                    </button>
                </div>
            ))}

            {selectedPrice !== null && (
                <div className="price-info">
                    <p>Price: ${selectedPrice}</p>
                </div>
            )}
        </div>
    );
};

export default CategoryList;
