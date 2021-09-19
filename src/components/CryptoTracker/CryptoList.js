import React, {useState, useEffect} from 'react'
import Coin from './Coin';
import Loading from '../Loading/Loading';
import './CryptoList.css';

const CryptoList = ({openModal}) => {
    
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      return res.json()
    })
    .then((data) =>{
      setLoading(false)
      console.log(data)
      setCoins(data)
    })
    .catch(() => {
      setLoading(false)
      setError(true)
    })
  }, [])

  
  const handleChange = e =>{
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase()),
    )
    
    return (
        <div className="crypto-app-container">
          <div className="app-header-test">
            <h1>Cryptocurrency price tracker</h1>
          </div>
          <div className="coin-search">
            <form>
              <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}></input>
            </form>
          </div>
        <div className="coin-list-container">
        {loading ? <Loading/> :        
        filteredCoins.map(coin => {
            return <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            />
        })}
        </div>
      </div>
    )
      
}

export default CryptoList
