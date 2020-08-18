import React from 'react';
import './Landing.css';

import Logo from './assets/logo-acredita.svg';
import Check from './assets/check.svg';

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
      {/* CONTENT */}
        <div className="content">
          <div className="title">
            <p>Acesse o kit completo</p>
            <h1>Dos brasileiros com dívidas, 58% são mulheres.</h1>
          </div>

          <div className="are-the-one">
            <h1>Você é uma delas?</h1>
            <p>O Acredita Nelas surgiu da iniciativa de mulheres que identificaram a necessidade de 
              empoderar outras mulheres através de conhecimento e ferramentas sobre a vida financeira.
              <br></br>No nosso conteúdo você vai encontrar:</p>
          </div>

          <div className="bullet">
            <img src={Check} alt="check"/>
            <p>Finanças x emoções: Como nossa cabeça age no bolso?</p>
          </div>
          <div className="bullet">
            <img src={Check} alt="check"/>
            <p>Finanças x emoções: Como nossa cabeça age no bolso?</p>
          </div>
          <div className="bullet">
            <img src={Check} alt="check"/>
            <p>Finanças x emoções: Como nossa cabeça age no bolso?</p>
          </div>
          <div className="bullet">
            <img src={Check} alt="check"/>
            <p>Finanças x emoções: Como nossa cabeça age no bolso?</p>
          </div>

          <div id="bonus">
            <h1>Bonus</h1>
            <p>Três planilhas sensacionais para planejamento de orçamento e seus sonhos!</p>
          </div>
        </div>

      {/* FORM */}
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
    
    <footer>
      <p>All right reserved</p>
      <a href="#landing-content">Back to Top</a>
    </footer>
    </div>
  );
}

export default Landing;