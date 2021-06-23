import React from 'react';

import Ping from './Endpoints/Ping';
import Companies from './Endpoints/Companies';
import Exchangerates from './Endpoints/Exchangerates';
import Marketcap from './Endpoints/Marketcap';
import Trending from './Endpoints/Trending';
import News from './Endpoints/News';

const ApiTest = () => {
  return (
    <div>
      <Ping />
      <Trending />
      <Companies />
      <Exchangerates />
      <Marketcap />
      <News />
    </div>
  );
};

export default ApiTest;
