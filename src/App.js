import './App.css';
import NewsFeed from './News/NewsFeed';
import ApiTest from './API Testing/ApiTest';
import PriceFeed from './Price/PriceFeed';
import CompaniesFeed from './Companies/CompaniesFeed';
import MarketcapFeed from './Marketcap/MarketcapFeed';
import TrendingFeed from './Trending/TrendingFeed';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/react-w-crypto-api/noticias" element={<NewsFeed />} />
            <Route
              path="/react-w-crypto-api/empresas"
              element={<CompaniesFeed />}
            />
            <Route
              path="/react-w-crypto-api/marketcap"
              element={<MarketcapFeed />}
            />
            <Route
              path="/react-w-crypto-api/tendencias"
              element={<TrendingFeed />}
            />
            <Route path="/react-w-crypto-api/cotacao" element={<PriceFeed />} />

            <Route path="/react-w-crypto-api/API" element={<ApiTest />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
