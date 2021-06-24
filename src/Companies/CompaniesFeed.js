import React from 'react';

//┌―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┐//
//│   PROGRAMA  => Companies.js     │   AUTOR => Gustavo Laranjeira   │      DATA => 24/06/2021
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ DESCRICAO =>  Descrição - Get public companies bitcoin amount
//│
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│                                  HISTORICO DE MANUTENCAO
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ AUTOR => __________ │ DESCRICAO =>
//├―――――――――――――――――――――┤
//│ DATA  => dd/mm/aaaa │
//└―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┘//

const CompaniesFeed = () => {
  const [companies, setCompanies] = React.useState([]);

  React.useEffect(() => {
    async function getCompanies() {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      );
      console.log(response);
      const responseJson = await response.json();
      console.log(responseJson);
      setCompanies(responseJson.companies);
    }
    getCompanies();
  }, []);

  return (
    <>
      <h6 style={{ fontSize: 'larger', marginBottom: '0px' }}>
        Public companies bitcoin holdings
      </h6>
      <ol style={{ padding: '0px' }}>
        {companies &&
          companies.map((company) => (
            <>
              <li key={company.name}>{company.name}</li>
              <ul style={{ padding: '0px' }}>
                <li key={company.total_holdings} style={{ listStyle: 'none' }}>
                  {company.total_holdings}
                </li>
              </ul>
            </>
          ))}
      </ol>
    </>
  );
};

export default CompaniesFeed;
