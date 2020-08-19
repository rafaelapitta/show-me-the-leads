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
        
        <a id="compartilhar" href="https://api.whatsapp.com/send?text=Acabei%20de%20baixar%20um%20kit%20com%20dicas%20e%20organiza%C3%A7%C3%A3o%20financeira!%20Olha%20s%C3%B3%20que%20sensacional:%20https://pedantic-volhard-d4081d.netlify.app/" target="blank">COMPARTILHAR <br></br>NO WHATSAPP</a>
      </main>
      </div>
    </div>
  )
}

export default Agradecimento