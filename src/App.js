import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'




function App() {
  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState('');

  /*
  1.fetch api with useEffect
  2.filtered coins wil lhold filtered coins according to searhbox
  3.map filterdCoins and send props to Coin component and return <Coin/>
  */

  //https://34981.wayscript.io/
  //https://api.coingecko.com/api/v3/coins/markets?vs_currency=ils&order=market_cap_desc&per_page=100&page=1&sparkline=false
  //Fetch Api only once when component did mount (App)
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ils&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      console.log(res)
      setCoins(res.data)
      
    }).catch(err=>{
      console.log(err)
    })
  },[])

  
  //We call setSearch with a new value. React will then re-render thecomponent, passing the new search value to it.
  const handleChange = e =>{
    setSearch(e.target.value)
  }

  //FilteredCoins holds filtered arr according to "search" value in searchBox
  const filteredCoins = coins.filter(coin=>{
    return(coin.name.toLowerCase().includes(search.toLowerCase()))
  }
    
  )



  return (
    <Container>
      <div className="coin-app">
        <h1 className=" logo text-center mb-4">Crypto currency App</h1>
        <div className="text-center coin-search mb-5">
          <Row className="justify-content-center">
            <h5 className="coin-text mr-2">Search a currency:</h5>
            <form>
            <input type='text' placeholder='Search' className='coin-input' onChange={handleChange}>
            </input>
            
          </form>
          </Row>
          
          
        </div>

      {filteredCoins.length===0 ? <h4 style={{textAlign:"center"}}>Sorry no data found for the Query...</h4>:filteredCoins.map(coin=>{
        return(
          
          
          
            <Coin 
          key={coin.id}
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          />
        )
      })}
      
      {/* {filteredCoins.map(coin=>{
        return(
          
          
          
            <Coin 
          key={coin.id}
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          />
        )
      })} */}
    </div>
  </Container>
  );
}

export default App;
