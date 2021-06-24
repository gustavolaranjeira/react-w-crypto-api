import React from 'react';

//┌―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┐//
//│   PROGRAMA  => Footer.js     │   AUTOR => Gustavo Laranjeira   │      DATA => 24/06/2021
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ DESCRICAO =>  Descrição -
//│
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│                                  HISTORICO DE MANUTENCAO
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ AUTOR => __________ │ DESCRICAO =>
//├―――――――――――――――――――――┤
//│ DATA  => dd/mm/aaaa │
//└―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┘//

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        height: '5vh',
        background: 'rgb(6, 17, 33)',
        color: 'white',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{ margin: '0px' }}>react-w-crypto-api</p>
    </footer>
  );
};

export default Footer;
