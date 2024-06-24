import React from 'react';
import './footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import TwiskLogo from '../images/twisklogo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our latest updates
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Contact'>Support</Link>
            <Link to='/Contact'>Sponsorships</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Twisk
              <img src={TwiskLogo} alt='twisk logo' width="150" height="200"/>
            </Link>
          </div>
          <small class='website-rights'>Twisk © 2024</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;