import React from 'react';
import './simple-grid.css';
import './Landing.css';

import Logo from './assets/logo_acredita_thin.png';
import Check from './assets/check.png';
import Mulher from './assets/mulher.png'
import Logo1 from './assets/so-braco-branco.png'

function Landing() {
  return (
    <div className="container-fluid h-100 pl-xs-0 pr-xs-0">
      <div className="row h-100">
        {/* CONTENT */}
        <div className="col-lg-7 content-col pl-lg-5 pr-lg-5">
          

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
            <h4>Bonus:</h4>
            <span>Três planilhas sensacionais para planejamento de orçamento e seus sonhos!</span>
          </div>
        </div>

        {/* FORM */}
        <div className="col-lg-5 pl-lg-5 pr-lg-5 form-col">
          <img className="logo1" src={Logo1} alt="Logo Acredita Nelas Branco" />
          <h3 className="mb-4">Dê um passo rumo à sua independência financeira!</h3>
          <div className='form'>
            <form method="POST" action="https://smtl.gama.academy/leads/7f2b6f21-dcac-11ea-91f1-99fb0c9231dc">
              <div className="form-group">
                <input
                  className='form-control'
                  name="name"
                  type="text"
                  pattern="^\D{2,}\s[\D\s]{2,}$"
                  title="Digite seu nome completo"
                  placeholder='NOME COMPLETO'
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className='form-control'
                  name="email"
                  type="email"
                  title="Digite seu email"
                  placeholder='DIGITE SEU MELHOR EMAIL'
                  required
                />
              </div>

              {/* BOTÃO */}
              <input name="redirectTo" type="hidden" value="https://gama.academy" />
              <input name="debugMode" type="hidden" value="true" />
              <input className='button btn btn-block btn-success btn-lg' type="submit" value="EU QUERO MEU KIT!" />
            </form>
          </div>
          {/* imagem */}
          <img className="mx-auto d-block" src={Mulher} alt="" />
        </div>
      </div>

      <footer id="footer">
        <p>Garanta sua independencia financeira hoje!</p>
      </footer>
    </div>
  );
}

export default Landing;