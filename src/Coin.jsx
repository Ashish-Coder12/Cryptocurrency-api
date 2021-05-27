import React from 'react';
// import "./Coin.css";
import './mine.css'

const Coin = ({
    image,
    name,
    price,
    symbol,
    volume,
    priceChange,
    marketCap
}) => {
    return (
        <div classname='coin-container'>
            <div className="coin-row">
                <div className='coin'>
                    <img src={image}/>
                    <h1>{name}</h1>
                    {/* <p className='coin-symbol'>{symbol}</p> */}
                </div>
                <div className="coin-data">
                    <p className="coin-price">Price :- ₹{price}</p>
                    <p className="coin-volume">Volume :- ₹{volume.toLocaleString()}</p>
                    {priceChange<0 ?(<p className="coin-percent red">{priceChange.toFixed(2)}%</p>) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>) }
                    <p className="coin-marketcap">
                        Mkt Cap : ${marketCap.toLocaleString()}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Coin
