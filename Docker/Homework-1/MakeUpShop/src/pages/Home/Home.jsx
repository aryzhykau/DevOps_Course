import React, { useEffect } from 'react';
import OurValues from './OurValues';
import './Home.css';
import { Link } from 'react-router-dom';
import { BrandsSvg } from './HomeSvg';
import { useDispatch } from 'react-redux';
import { products as productsAction } from '../../store/actions/products/products.actions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
  });
  return (
    <main>
      <section className="section-header">
        <div className="section-header-inf">
          <h1>Treat your skin everyday</h1>
          <Link to="/catalogue"> <button>Shop now</button></Link>
        </div>
      </section>
      <section className="shopTarget">
        <div>
          <p className="targetText">
          We are in business to set a new benchmark in beauty, creating a positive impact on your skin and your wellbeing.
          </p>
          <p className="shopTarget-inf">
          Your unique skin chemistry is what makes you, you. Our skin loving rituals are designed to help you take a moment to appreciate yourself, no matter what kind of skin day you&apos;re having. We believe that developing a positive relationship with your skin creates an invaluable connection to yourself - even when you&apos;re constantly evolving.
          </p>
          <Link to="/aboutus"><button>Read more</button></Link>
        </div>
        <div>
          <img src={require('../../assets/TargetSection.png')} alt="Photo" />
        </div>
      </section>
      <section className="section-brands">
        <p className="brands-header">Our brands</p>
        <div className="brands-svg">
          <BrandsSvg />
        </div>
        <div className="brands-text">
          <p>
          “Makeupshop is pioneering transparent and responsible beauty, with affacious products that consider people and the planet.”
          </p>
        </div>
      </section>
      <OurValues/>
    </main>
  );
};

export default Home;
