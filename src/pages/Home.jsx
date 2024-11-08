// src/pages/Home.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import product1 from '../assets/P1.png';
import product2 from '../assets/P2.png';
import product4 from '../assets/P4.png';
import product3 from '../assets/P3.png';
import product5 from '../assets/P5.png';
import product6 from '../assets/P6.png';
import product7 from '../assets/P7.png';
import product8 from '../assets/P8.png';
import product9 from '../assets/P9.png';
import product10 from '../assets/P10.png';
import product11 from '../assets/P11.png';
import product12 from '../assets/P12.png';

const products = [
  { id: 1, name: ' Product 1', price: 200, image: product1 },
  { id: 2, name: 'Product 2', price: 300, image: product2 },
  { id: 3, name: 'Product 3', price: 250, image: product3 },
  { id: 4, name: 'Product 4', price: 450, image: product4 },
  { id: 5, name: 'Product 5', price: 150, image: product5 },
  { id: 6, name: 'Product 6', price: 350, image: product6 },
  { id: 7, name: 'Product 7', price: 400, image: product7 },
  { id: 8, name: 'Product 8', price: 200, image: product8 },
  { id: 9, name: 'Product 9', price: 220, image: product9 },
  { id: 10, name: 'Product 10', price: 1800, image: product10 },
  { id: 11, name: 'Product 11', price: 260, image: product11 },
  { id: 12, name: 'Product 12', price: 280, image: product12 },
];

const Home = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


export default Home;
