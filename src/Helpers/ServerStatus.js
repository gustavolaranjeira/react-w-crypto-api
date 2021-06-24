import React from 'react';

//┌―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┐//
//│   PROGRAMA  => ServerStatus.js     │   AUTOR => Gustavo Laranjeira   │      DATA => 24/06/2021
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ DESCRICAO =>  Descrição - Check API server status
//│
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│                                  HISTORICO DE MANUTENCAO
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ AUTOR => __________ │ DESCRICAO =>
//├―――――――――――――――――――――┤
//│ DATA  => dd/mm/aaaa │
//└―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┘//

const ServerStatus = () => {
  const [stats, setStats] = React.useState(false);

  React.useEffect(() => {
    async function getStats() {
      const response = await fetch('https://api.coingecko.com/api/v3/ping', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      setStats(response.ok);
    }
    getStats();
  }, []);

  return (
    <div>
      {stats && (
        <>
          <p style={{ display: 'inline-block', margin: '0px' }}>Servidor: </p>
          <span style={{ color: '#0f0' }}>
            {stats ? ' Ligado' : ' Desligado'}
          </span>
        </>
      )}
    </div>
  );
};

export default ServerStatus;
