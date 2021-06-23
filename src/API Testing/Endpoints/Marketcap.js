import React from 'react';

//┌―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┐//
//│   PROGRAMA  => Marketcap.js     │   AUTOR => Gustavo Laranjeira   │      DATA => 23/06/2021
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ DESCRICAO =>  Descrição - Get cryptocurrency global data top10
//│
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│                                  HISTORICO DE MANUTENCAO
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ AUTOR => __________ │ DESCRICAO =>
//├―――――――――――――――――――――┤
//│ DATA  => dd/mm/aaaa │
//└―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┘//

const Marketcap = () => {
  const [marketcap, setMarketcap] = React.useState([]);
  React.useEffect(() => {
    async function getMarketcap() {
      const response = await fetch('https://api.coingecko.com/api/v3/global', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      console.log('response', response);
      const responseJson = await response.json();
      console.log('responseJson', responseJson);
      console.log('responseJson.data', responseJson.data);
      console.log(
        'responseJson.data.market_cap_percentage',
        responseJson.data.market_cap_percentage,
      );
      setMarketcap(responseJson.data.market_cap_percentage);
    }
    getMarketcap();
  }, []);

  return (
    <>
      <h6 style={{ fontSize: 'larger', marginBottom: '0px' }}>
        Market Cap Top10
      </h6>
      {marketcap && (
        <ol style={{ padding: '0px', marginTop: '0px' }}>
          {Object.keys(marketcap).map((coin, index) => (
            <>
              <li>{Object.keys(marketcap)[index]}</li>
              <li style={{ listStyle: 'none' }}>
                {Object.values(marketcap)[index]}
              </li>
            </>
          ))}
        </ol>
      )}
    </>
  );
};

export default Marketcap;
