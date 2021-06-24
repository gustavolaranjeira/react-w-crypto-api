import React from 'react';
import styles from './NewsFeed.module.css';

//┌―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――┐//
//│   PROGRAMA  => NewsFeed.js     │   AUTOR => Gustavo Laranjeira   │      DATA => 24/06/2021
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

const NewsFeed = () => {
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
    <section>
      <h5
        style={{
          margin: '2rem 0rem 1rem 0rem',
          fontSize: 'xx-large',
          textDecoration: 'underline',
        }}
      >
        Last News
      </h5>
      <ul style={{ marginTop: '0', padding: '0' }}>
        {news &&
          news.map((dados, index) => (
            <>
              <li key={index}>
                <span style={{ fontWeight: 'bold' }}>{dados.project.name}</span>
                <span style={{ marginLeft: '0.2rem' }}>
                  {dados.created_at.slice(0, 10)}
                </span>
              </li>
              <li
                key={dados.created_at}
                style={{
                  listStyle: 'none',
                  textAlign: 'justify',
                  textJustify: 'inter-word',
                  marginBottom: '1rem',
                }}
              >
                {dados.description}
              </li>
            </>
          ))}
      </ul>
    </section>
  );
};

export default NewsFeed;
