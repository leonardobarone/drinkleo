import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
import useTitle from "../utils/useTitle";
const ContactScreen = () => {
  useTitle('Contattaci')
  return <>
    <Hero img={backImage} disalbeOverlay>
      <div className="contact-hero container">
        <div className="contact-hero-text">
          <div className="contact-hero-title">
            <h2 className="contact-title">
              Vorresti aggiungere un cocktail?

            </h2>
            <h4 className="contact-subtitle">
              Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle alla nostro database
            </h4>
          </div>
        </div>
        <div className="container contact-form-container">
          <form action="https://formspree.io/f/xkgnapgq" method="POST" className="contact-form container">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" className="input" placeholder="Daniele" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="cognome">Cognome</label>
              <input type="text" id="cognome" name="cognome" className="input" placeholder="Tamarindo" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="input" placeholder="daniele@esempio.com" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="cellulare">Telefono</label>
              <input type="cel" id="cellulare" name="cellulare" className="input" placeholder="555 555-5555" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="nome">La tua ricetta</label>
              <textarea type="tel" id="ricetta" name="ricetta" className="input" placeholder="Descrivi la tua ricetta" />
              <hr />
            </div>
            <button type="submit" className="btn btn-primary">Invia Ricetta</button>
          </form>
        </div>
      </div>
    </Hero>
  </>;
};

export default ContactScreen;
