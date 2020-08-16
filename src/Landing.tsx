import React from 'react';
import './Landing.css';


function Landing() {
  return (
    <div className="App">
      <header>
      <div id="logo-img">
        {/* Logo Image */}
      </div>
      </header>
      <main>
      <div id="form">
        <div className="form-content">
          <h1>Aproveite: é grátis!</h1>
          <p>Baixe esta merda hoje</p>
          <div className="form-leads">
            <form method="POST" action="https://smtl.gama.academy/leads/7f2b6f21-dcac-11ea-91f1-99fb0c9231dc">
            <input
              name="name"
              type="text"
              pattern="^\D{2,}\s[\D\s]{2,}$"
              title="Digite seu nome completo"
  required
/>
            </form>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}

export default Landing;