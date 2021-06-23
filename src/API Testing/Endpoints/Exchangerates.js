import React from 'react';

//┌―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┐//
//│   PROGRAMA  => Exchangerates.js     │   AUTOR => Gustavo Laranjeira   │      DATA => 23/06/2021
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ DESCRICAO =>  Descrição - Get BTC-to-Currency exchange rates
//│
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│                                  HISTORICO DE MANUTENCAO
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ AUTOR => __________ │ DESCRICAO =>
//├―――――――――――――――――――――┤
//│ DATA  => dd/mm/aaaa │
//└―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┘//

const Exchangerates = () => {
  const [exchanges, setExchanges] = React.useState([]);

  React.useEffect(() => {
    async function getExchanges() {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/exchange_rates',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      );
      const responseJson = await response.json();
      setExchanges(Object.values(responseJson.rates));
    }
    getExchanges();
  }, []);

  // API envia valores fora de ordem, a ideia é ordenar os valores e usar eles para ordenar os nomes.

  // cria array para armazenar os valores e array para armazenar os nomes em ordem
  const armazenaValor = [];
  const armazenaNomeOrd = [];

  // adicionar os valores em ordem na variavel armazenaValor
  exchanges.map((coin) => armazenaValor.push(coin.value));

  // armazena na ordem decrescente os preços
  const armazenaValorOrd = armazenaValor.sort((a, b) => a - b);

  // encontra o nome de um item no array de ordem decrescente e depois adiciona a armazenaNomeOrd na ordem
  for (let i in armazenaValor) {
    const result = exchanges.filter(
      (exchange) => exchange.value === armazenaValorOrd[i],
    );
    armazenaNomeOrd.push(result[0].name);
  }

  return (
    <>
      <h6 style={{ fontSize: 'larger', marginBottom: '0px' }}>
        How much worth 1 bitcoin
      </h6>
      <ul style={{ marginTop: '0px', padding: '0px' }}>
        {exchanges &&
          armazenaNomeOrd.map((coin, index) => (
            <>
              <li key={coin}>{coin}</li>
              <li style={{ listStyle: 'none' }} key={armazenaValorOrd[index]}>
                {armazenaValorOrd[index]}
              </li>
            </>
          ))}
      </ul>
    </>
  );
};
export default Exchangerates;
