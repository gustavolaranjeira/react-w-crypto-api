import React from 'react';

//┌―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┐//
//│   PROGRAMA  => Trending.js     │   AUTOR => Gustavo Laranjeira   │      DATA => 22/06/2021
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ DESCRICAO =>  Descrição - Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)
//│
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│                                  HISTORICO DE MANUTENCAO
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ AUTOR => __________ │ DESCRICAO =>
//├―――――――――――――――――――――┤
//│ DATA  => dd/mm/aaaa │
//└―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┘//

const Trending = () => {
  const [trending, setTrending] = React.useState([]);

  React.useEffect(() => {
    async function getTrending() {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/search/trending',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      );
      const responseJson = await response.json();
      setTrending(responseJson.coins);
    }
    getTrending();
  }, []);

  return (
    <>
      {trending && (
        <>
          <h5 style={{ marginBottom: '0', fontSize: 'larger' }}>
            Trending Coins
          </h5>
          <ol style={{ marginTop: '0', padding: '0' }}>
            {trending.map((coin, index) => (
              <li key={index}>{coin.item.name}</li>
            ))}
          </ol>
        </>
      )}
    </>
  );
};

export default Trending;
