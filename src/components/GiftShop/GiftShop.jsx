// GiftShop.jsx
import React, { useState } from 'react';
import './GiftShop.css'; // Import your CSS file for styling

// Import images correctly relative to the component
import bagImage from '../../assets/images/bags.png';
import notebookImage from '../../assets/images/notebook.png';
import shirtImage from '../../assets/images/shirts.png';
import stickerImage from '../../assets/images/stickers.png';
import syringePenImage from '../../assets/images/Syringe pen.jpg';
import medicalSocksImage from '../../assets/images/socks.jpg';

const products = [
    { id: 1, name: 'Bags', price: 14.99, img: bagImage },
    { id: 2, name: 'Notebook', price: 19.99, img: notebookImage },
    { id: 3, name: 'Shirts', price: 24.99, img: shirtImage },
    { id: 4, name: 'Stickers', price: 29.99, img: stickerImage },
    { id: 5, name: 'Syringe Pen Set', price: 9.99, img: syringePenImage },
    { id: 6, name: 'Medical Socks', price: 12.99, img: medicalSocksImage }
];

const GiftShop = () => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        setCart([...cart, product]);
    };

    const removeProductFromCart = (productId) => {
        const updatedCart = cart.filter(p => p.id !== productId);
        setCart(updatedCart);
    };

    const checkout = () => {
        alert('Thank you for your purchase!');
        setCart([]);
    };

    return (
        <div className="gift-shop">
            <header>
                <div className="header-content">
                    <div className="logo">
                        <img src="../../assets/images/logo.png" alt="Medical Gift Shop Logo" />
                    </div>
                    <h1><i className="fas fa-stethoscope"></i> Medical Gift Shop</h1>
                    <p>Discover unique medical-themed gifts and souvenirs!</p>
                </div>
                <div className="header-video">
                    <video autoPlay loop muted>
                        <source src="../../assets/videos/backgroundA.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </header>

            <main>
                <section id="products">
                    <h2>Our Products</h2>
                    <div id="product-list" className="product-list">
                        {products.map(product => (
                            <div key={product.id} className="product">
                                <img src={product.img} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>${product.price.toFixed(2)}</p>
                                <button onClick={() => addProductToCart(product.id)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="cart">
                    <h2>Shopping Cart</h2>
                    <div id="cart-list" className="cart-list">
                        {cart.map(product => (
                            <div key={product.id} className="cart-item">
                                <img src={product.img} alt={product.name} />
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>${product.price.toFixed(2)}</p>
                                </div>
                                <button onClick={() => removeProductFromCart(product.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div id="cart-summary" className="cart-summary">
                        <p>Total: <span id="total-price">${cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}</span></p>
                        <button onClick={checkout}>Checkout</button>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Medical Gift Shop. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default GiftShop;
