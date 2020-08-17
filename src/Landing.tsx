import React from 'react';
import './Landing.css';

import Logo from './assets/logo-acredita.svg'

function Landing() {
  return (
    <div id="landing-content">
      <div className="background">
        <header>
          <div className="logo-container">
            <img className="logo" src={Logo} alt="Logo Acredita Nelas"/>
          </div>
        </header>
      </div>
    
    <div id="sections">
      <div className="content">

      </div>
      <div className="form">
        <h1>Dê um passo à sua independencia financeira!</h1>
        <form method="POST" action="https://smtl.gama.academy/leads/7f2b6f21-dcac-11ea-91f1-99fb0c9231dc">
        
        <label htmlFor="Nome"></label>
        <input
            name="name"
            type="text"
            pattern="^\D{2,}\s[\D\s]{2,}$"
            title="Digite seu nome completo"
            placeholder='Nome'
            required
        />
        <br></br>
        <label htmlFor="Email"></label>
        <input
          name="email"
          type="email"
          placeholder='Email'
          required
        />
      </form>
      {/* BOTÃO */}
      <input type="submit"/>
      </div>
    </div>

    </div>
  );
}

export default Landing;