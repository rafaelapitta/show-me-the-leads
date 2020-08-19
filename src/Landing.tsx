import React from 'react';
import './simple-grid.css';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

import Logo from './assets/logo_acredita_thin.png';
import LogoWhite from './assets/logo_acredita_thin_white.png';
import Check from './assets/check.png';
import Mulher from './assets/mulher.png';


function Landing() {
  const navigate = useNavigate()
  function handleSubmit() {
    navigate('https://drive.google.com/drive/folders/1kqkYZgF-Smw6nK_uzb4fnk9SQKAGT8-2')
  }
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
            <span>Duas planilhas sensacionais para planejamento de orçamento e seus sonhos!</span>
          </div>
        </div>

        {/* FORM */}
        <div className="col-lg-5 pl-lg-5 pr-lg-5 form-col">
          <div id="form">
            <img src={LogoWhite} alt="Braço branco da Acredita Nelas" className="logo1 mx-auto d-block" />
            <h3 className="mb-4">Dê um passo à sua independencia financeira!</h3>
            <form method="POST" action="https://smtl.gama.academy/leads/7f2b6f21-dcac-11ea-91f1-99fb0c9231dc">

              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  pattern="^\D{2,}\s[\D\s]{2,}$"
                  title="Digite seu nome completo"
                  placeholder='Digite seu nome completo'
                  required
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder='Digite seu melhor email'
                  required
                />
              </div>

              <input name="redirectTo" type="hidden" value="https://drive.google.com/drive/folders/1POzj6XYQq0vR_6f31kNY15k2BY439txc?usp=sharing" />

              {/* BOTÃO */}
              <input id="submit" type="submit" className="button btn btn-block btn-success btn-lg" value="BAIXAR MEU KIT AGORA" onClick={handleSubmit}>

              </input>
            </form>
            <img className="mx-auto d-block" src={Mulher} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;