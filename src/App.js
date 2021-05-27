
import './App.css';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import Coin from './Coin.jsx';
import SetInterval from 'set-interval'


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false
function App() {
  const [coins ,  setCoins] = useState([])
  const [search , setSearch] = useState("")
  useEffect(()=>{
    Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      // console.log(res.data)
    }).catch(error => console.log(error))
  },[]);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filterCoin = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

    // SetInterval.start(, 2000, 'test')

  return (
   <div className="App">
      <div className="search">
        <form>
            <input type='text'
            placeholder='search'
            className='input'
            onChange={handleChange}/>
          </form>
      </div>
      {filterCoin.map(coin =>{
        return(
          <Coin key={coin.id}
          name={coin.name}
          price={coin.current_price}
          image={coin.image}
          symbol={coin.symbol}
          volume={ coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
          marketCap={coin.market_cap}

          />
        )
      })}

   </div>
  );
}

export default App;
