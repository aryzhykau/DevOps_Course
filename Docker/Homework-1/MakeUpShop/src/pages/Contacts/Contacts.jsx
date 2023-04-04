import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { products as productsAction } from '../../store/actions/products/products.actions';
import './Contacts.css';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
  });

  return (
    <main>
      <section className="contacts">
        <div className="contacts-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.4797700121435!2d20.988593115685752!3d52.234668779761186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc85ceba8407%3A0x11b02169fc7e364d!2zR3J6eWJvd3NrYSwgV2Fyc3phd2EsINCf0L7Qu9GM0YjQsA!5e0!3m2!1sru!2sby!4v1654470536533!5m2!1sru!2sby"></iframe>
        </div>
        <div className="contacts-text"> 
          <h1>Contacts</h1>
          <p>Our 24-hour shop is located in the center of Warsaw. You can get here both by metro and by various buses going to the city center.</p>
          <div className="contacts-information">
            <div>
              <h4>Address</h4>
              <p>Grzybowska St., Warsaw, CA07638</p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>+48-55-12345</p>
              <p>makeup_shop@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
