import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import Homeproduct from '../components/homeproduct';
import banner from '../assets/Banner.jpg';
import './home.css';

const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  useEffect(() => {
    categorizeProducts();
  }, []);

  const categorizeProducts = () => {
    setNewProduct(Homeproduct.filter(product => product.type === 'new'));
    setFeaturedProduct(Homeproduct.filter(product => product.type === 'featured'));
    setTopProduct(Homeproduct.filter(product => product.type === 'top'));
  };

  const filterTrendingProducts = (type) => {
    setTrendingProduct(Homeproduct.filter(product => product.type === type));
  };

  const resetTrendingProducts = () => {
    setTrendingProduct(Homeproduct);
  };

  return (
    <div className='home'>
      <div
        className='banner'
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '550px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className='grid sm:grid-cols-2 gap-6 items-center'>
        <div
          className='banner-content '
          style={{
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <h1>Winter Sale up to 50% Off</h1>
          <p>Get the best deals on our latest collection of winter wear!</p>
          <Link
            to='/shop'
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#ff5733',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e14a1d')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff5733')}
          >
            Shop Now
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                Winter Sale up to 50% Off
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio.
              </p>
              <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p>Quality Products</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p>Fast Delivery</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                  <p>Easy Payment Methods</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                  <p>Get Offers</p>
                </div>
              </div>
              </div>
            </div>
      </div>
      <div className='trending'>
      <div className='container'>
  <div className='header'>
    <div className='heading'>
      <h2 onClick={resetTrendingProducts}>Trending Products</h2>
    </div>
    {/* <div className='cate'>
      <h3 onClick={() => filterTrendingProducts('new')}>New</h3>
      <h3 onClick={() => filterTrendingProducts('featured')}>Featured</h3>
      <h3 onClick={() => filterTrendingProducts('top')}>Top Selling</h3>
    </div> */}
  </div>
  <div className='products'>
    <div className='container'>
      {trendingProduct.map((product) => (
        <div className='box' key={product.id}>
          <div className='img_box'>
            <img src={product.image} alt={product.Name} />
            <div className='icon'>
              <div className='icon_box'>
                <AiFillEye />
              </div>
              <div className='icon_box'>
                <AiFillHeart />
              </div>
            </div>
          </div>
          <div className='info'>
            <h3>{product.Name}</h3>
            <p>Rs.{product.price}</p>
            <button className='btn' onClick={() => addtocart(product)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
    <button>Show More</button>
  </div>
</div>

      </div>


      <div className='product_type'>
  <div className='container'>
    <div className='new_product'>
      <div className='header'>
        <h2>New Products</h2>
      </div>
      <div className='product-list'>
        {newProduct.map((product) => (
          <div className='product-box' key={product.id}>
            <div className='product-image'>
              <img src={product.image} alt={product.Name} />
            </div>
            <div className='product-info'>
              <h3>{product.Name}</h3>
              <p>Rs. {product.price}</p>
              <div className='icon'>
                <button><AiFillEye /></button>
                <button><AiFillHeart /></button>
                <button onClick={() => addtocart(product)}><AiOutlineShoppingCart /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;