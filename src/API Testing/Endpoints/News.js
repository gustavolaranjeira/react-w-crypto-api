import React from 'react';

//┌―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┐//
//│   PROGRAMA  => News.js     │   AUTOR => Gustavo Laranjeira   │      DATA => 23/06/2021
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ DESCRICAO =>  Descrição - List all status_updates with data
//│
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│                                  HISTORICO DE MANUTENCAO
//├―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┤//
//│ AUTOR => __________ │ DESCRICAO =>
//├―――――――――――――――――――――┤
//│ DATA  => dd/mm/aaaa │
//└―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┘//

const News = () => {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    async function getNews() {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/status_updates',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      );
      const responseJson = await response.json();
      setNews(responseJson.status_updates);
    }
    getNews();
  }, []);

  return (
    <>
      <h5 style={{ marginBottom: '0', fontSize: 'larger' }}>Last News</h5>
      <ul style={{ marginTop: '0', padding: '0' }}>
        {news &&
          news.map((dd, index) => (
            <>
              <li key={index}>{dd.project.name}</li>
              <li
                key={dd.created_at}
                style={{
                  listStyle: 'none',
                  textAlign: 'justify',
                  textJustify: 'inter-word',
                }}
              >
                {dd.description}
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default News;
