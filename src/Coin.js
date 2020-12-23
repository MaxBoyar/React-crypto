import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//rface -> creat arrow function

import './Coin.css'

const Coin = ({name,image,symbol,price,volume,priceChange}) => {
    return (
       
             <div className='coin-container'>
            <div className='coin-row'>
                <Row>
                
                    <img src={image} alt="img" className="img"></img>
                    <Col><h1>{name}</h1></Col>
                    <Col><p className='coin-symbol'>{symbol}</p></Col>
                   <Col><p className="coin-price">ILS: {price.toLocaleString()} </p></Col>
                    <Col><p className="coin-volume">{volume.toLocaleString()}</p></Col>
                    <Col>{priceChange> 0 ? <p className="coin-perc" style={{color:"green"}}>+{priceChange} %</p>:<p className="coin-perc" style={{color:"red"}}>{priceChange} %</p>}</Col>

                

                </Row>
                

            </div>
            
        </div>

        
       
    )
}

export default Coin;
