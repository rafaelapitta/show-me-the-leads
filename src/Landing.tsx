import React from 'react';
import './simple-grid.css';
import './Landing.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

import Logo from './assets/logo_acredita_thin.png';
import LogoWhite from './assets/logo_acredita_thin_white.png';
import Check from './assets/check.png';
import Mulher from './assets/mulher.png';


function Landing() {
  const navigate = useNavigate()
  // function doSubmit() {
  //   navigate('/thank-you')
  // }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name.length < 3) {
      alert("Seu nome precisa ter 3 caracteres!");
      return;
    }

    if (email.length < 5) {
      alert("Seu e-mail precisa ter 5 caracteres!");
      return;
    }

    const params = {
      name,
      email
    }

    const data = Object.entries(params)
      .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
      .join('&');

    
    const response = await axios.post('https://smtl.gama.academy/leads/7f2b6f21-dcac-11ea-91f1-99fb0c9231dc', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }) 
          
    console.log(response.data)
    navigate('/thank-you')
  }

  return (
    <div className="container-fluid h-100 pl-xs-0 pr-xs-0">
      <div className="row h-100">
        {/* CONTENT */}
        <div className="col-lg-7 content-col pl-lg-5 pr-lg-5">


          <img className="logo" src={Logo} alt="Logo Acredita Nelas" />

          <div className="title-lp">
            <span className="superscript">Acesse o kit completo</span>
            <h1>Entre os endividados, 58% são mulheres.</h1>
          </div>

          <div className="are-the-one">
            <h2>Você é uma delas?</h2>
            <p>O Acredita Nelas surgiu da iniciativa de mulheres que identificaram a necessidade de
            empoderar outras mulheres através de conhecimento e ferramentas sobre a vida financeira.</p>

            <p>Esse kit vai guiar seus passos rumo à independência financeira, mostrando:</p>
          </div>

          <div className="bullet">
            <img src={Check} alt="check" />
            <span>Finanças x emoções: Como nossa cabeça age no bolso?</span>
          </div>
          <div className="bullet">
            <img src={Check} alt="check" />
            <span>Porque e como alcançar a inteligência financeira!</span>
          </div>
          <div className="bullet">
            <img src={Check} alt="check" />
            <span>Como as taxas afetam suas finanças.</span>
          </div>
          <div className="bullet">
            <img src={Check} alt="check" />
            <span>Renda extra: transformando passivos em ativos.</span>
          </div>

          <div className="bonus">
            <h4>Bonus:</h4>
            <span>Duas planilhas sensacionais para planejamento de orçamento e seus sonhos!</span>
          </div>

          <div className="cadastre-se">
            <span>Curtiu? Cadastre-se e garanta o kit!</span>
          
          </div>

        </div>

        {/* FORM */}
        <div className="col-lg-5 pl-lg-5 pr-lg-5 form-col">
          <div id="form">
            <img src={LogoWhite} alt="Braço branco da Acredita Nelas" className="logo1 mx-auto d-block" />
            <h3 className="mb-4">Dê um passo à sua independencia financeira!</h3>

            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                pattern="^\D{2,}\s[\D\s]{2,}$"
                title="Digite seu nome completo"
                placeholder='Digite seu nome completo'
                required
              />

              <input
                className="form-control"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder='Digite seu melhor email'
                required
              />

              {/* WHATCH OUT */}
              <button id="submit" type="submit" className="button btn btn-block btn-success btn-lg" value="BAIXAR MEU KIT AGORA">
                BAIXAR MEU KIT AGORA
              </button>
            </form>
            <img className="mx-auto d-block" src={Mulher} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;