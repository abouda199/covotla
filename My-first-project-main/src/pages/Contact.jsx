import React from 'react';
import './Contact.css'; // Fichier CSS pour les styles
import static_map from '../assets/static_map.png';

function ContactUs() {
  return (
    <section className="contact-us">
      {/* Informations de contact */}
      <div className="contact-info">
        <div className="contact-item">
          <div className="icon">📍</div>
          <h3>NOTRE BUREAU PRINCIPAL</h3>
          <p>Sahlloul<br />Eniso departement informatique</p>
        </div>
        <div className="contact-item">
          <div className="icon">📞</div>
          <h3>NUMÉRO DE TÉLÉPHONE</h3>
          <p>234-9876-5400<br />888-0123-4567 (sans frais)</p>
        </div>
        <div className="contact-item">
          <div className="icon">📠</div>
          <h3>FAX</h3>
          <p>1-234-567-8900</p>
        </div>
        <div className="contact-item">
          <div className="icon">✉️</div>
          <h3>E-MAIL</h3>
          <p><a href="mailto:hello@theme.com">bari@gmail.com</a></p>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="contact-form">
        <h2>Nous contacter</h2>
        <form>
          <input type="text" placeholder="Enter your Name" required />
          <input type="email" placeholder="Enter a valid email address" required />
          <textarea placeholder="Votre message" rows="5" required></textarea>
          <button type="submit">NOUS FAIRE PARVENIR</button>
        </form>
        
      </div>
      
      
      <section className="map">
        <img src={static_map} alt="map eniso" />
        </section>
    </section>
    
  );
}

export default ContactUs;

