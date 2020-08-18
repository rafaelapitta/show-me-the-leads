import React from 'react';
import './simple-grid.css';
import './Landing.css';

import Logo from './assets/logo_acredita_thin.png';
import Check from './assets/check.png';

function Landing() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* CONTENT */}
        <div className="col-lg-7 content-col">
          {/* <div className="logo-container">
            
          </div> */}

          <img className="logo" src={Logo} alt="Logo Acredita Nelas" />

          <div className="title">
            <span className="superscript">Acesse o kit completo</span>
            <h1>Dos brasileiros com dívidas, 58% são mulheres.</h1>
          </div>

          <div className="are-the-one">
            <h2>Você é uma delas?</h2>
            <p>O Acredita Nelas surgiu da iniciativa de mulheres que identificaram a necessidade de
            empoderar outras mulheres através de conhecimento e ferramentas sobre a vida financeira.</p>

            <p>No nosso conteúdo você vai encontrar:</p>
          </div>

          <div className="bullet">
            <img src={Check} alt="check" />
            <span>Finanças x emoções: Como nossa cabeça age no bolso?</span>
          </div>
          <div className="bullet">
            <img src={Check} alt="check" />
            <span>Por que e como alcançar a inteligência financeira!</span>
          </div>
          <div className="bullet">
            <img src={Check} alt="check" />
            <span>Juros? Linhas de crédito? O que fazer?</span>
          </div>
          <div className="bullet">
            <img src={Check} alt="check" />
            <span>Renda extra: transformando ativos em passivos</span>
          </div>

          <div className="bonus">
            <h4>Bonus</h4>
            <span>Três planilhas sensacionais para planejamento de orçamento e seus sonhos!</span>
          </div>
        </div>

        {/* FORM */}
        <div className="col-lg-5 form-col">
          <h3>Dê um passo à sua independencia financeira!</h3>
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
          <input type="submit" />
        </div>
      </div>
    </div>
  );
}

export default Landing;