import React from 'react';
import './index.css';

import Mulher from '../../assets/mulher.png';


function Agradecimento() {
  return (
    <div id="page">
      <div className="title">
        <header>
          <h2>Obrigada por baixar o nosso material</h2>
          <img src={Mulher} alt="" />
        </header>
      

      <main>
        <a id="baixar" href="https://drive.google.com/drive/folders/1kqkYZgF-Smw6nK_uzb4fnk9SQKAGT8-2" target="blank" >BAIXAR MATERIAL</a>
        
        <a id="compartilhar" href="https://bit.ly/3aC6FdP" target="blank">COMPARTILHAR <br></br>NO WHATSAPP</a>
      </main>
      </div>
    </div>
  )
}

export default Agradecimento