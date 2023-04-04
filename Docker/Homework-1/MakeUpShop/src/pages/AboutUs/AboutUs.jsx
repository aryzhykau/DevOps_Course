import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OurValues from '../Home/OurValues';
import { products as productsAction } from '../../store/actions/products/products.actions';
import './AboutUs.css';

const AboutUs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
  });
  return (
    <main>
      <section className="section-aboutUs">
        <h1>About Us</h1>
        <div className="aboutus-inf">
          <div className="aboutus-mission">
            <p className="header-mission">Our mission is to establish makeupshop as the global benchmark in beauty.</p>
            <ul>
              <li>Through providing luxurious skincare that is scientifically proven and 100% natural.</li>
              <li>Through uplifting, educating and empowering.</li>
              <li>Through leading a movement towards a circular, climate positive and transparent industry.</li>
            </ul>
          </div>
          <div className="aboutus-img">
            <img src={require('../../assets/AboutUsSection.png')} alt="Photo" />
          </div>
        </div>
      </section>
      <OurValues/>
      <section className="slogan">
        <p className="slogantext">We&rsquo;re more than just beauty. We&rsquo;re a community.</p>
      </section>
      <section className="section-benefits">
        <div className="benefits-img">
          <img src={require('../../assets/Product.png')} alt="Photo" />
        </div>
        <div className="benefits-ing">
          <p className="benefit-header">Straight Talking</p>
          <p className="benefit-text">Smoke and mirrors? Pass! We live with our hearts on our sleeves and keep it real when it comes to our product feels, facts and features. No hidden agenda here.</p>
          <p className="benefit-header">Kindness Cures</p>
          <p className="benefit-text">We believe we should all be more kind to ourselves, to each other and to the generous earth we live on. Beaut serums promote gentle skincare.</p>
          <p className="benefit-header">Inclusive</p>
          <p className="benefit-text">We all have skin, and that skin is beautiful. Imperfections will heal, marks will fade. Underneath it all, we&rsquo;re all Beauts.</p>
          <p className="benefit-header">Made for Impact</p>
          <p className="benefit-text">Our products do what they&rsquo;re meant to, nothing less. Their results excite us and we are driven to share the Beaut experience with the world.</p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
