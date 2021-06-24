import React from 'react';
import { Link } from 'react-router-dom';
import ServerStatus from './Helpers/ServerStatus';

//┌―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┐//
//│   PROGRAMA  => Header.js     │   AUTOR => Gustavo Laranjeira   │      DATA => 24/06/2021
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

const Header = () => {
  return (
    <header
      style={{
        position: 'fixed',
        left: '0',
        top: '0',
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%',
        height: '5vh',
        background: 'rgb(6, 17, 33)',
        color: 'white',
      }}
    >
      <p style={{ margin: '0px', position: 'absolute', left: '1rem' }}>
        React with Cryptocurrency-API
      </p>
      <span style={{ margin: '0px', position: 'absolute', left: '15rem' }}>
        <ServerStatus />
      </span>

      <nav
        style={{ display: 'inline-flex', position: 'absolute', right: '1rem' }}
      >
        <Link
          style={{ textDecoration: 'none', marginLeft: '.7rem' }}
          to="/react-w-crypto-api/noticias"
        >
          <span style={{ color: 'white' }}>Notícias</span>
        </Link>
        <Link
          style={{ textDecoration: 'none', marginLeft: '.7rem' }}
          to="/react-w-crypto-api/empresas"
        >
          <span style={{ color: 'white' }}>Empresas</span>
        </Link>
        <Link
          style={{ textDecoration: 'none', marginLeft: '.7rem' }}
          to="/react-w-crypto-api/marketcap"
        >
          <span style={{ color: 'white' }}>MarketCap</span>
        </Link>
        <Link
          style={{ textDecoration: 'none', marginLeft: '.7rem' }}
          to="/react-w-crypto-api/tendencias"
        >
          <span style={{ color: 'white' }}>Tendências</span>
        </Link>
        <Link
          style={{ textDecoration: 'none', marginLeft: '.7rem' }}
          to="/react-w-crypto-api/cotacao"
        >
          <span style={{ color: 'white' }}>Cotação</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
