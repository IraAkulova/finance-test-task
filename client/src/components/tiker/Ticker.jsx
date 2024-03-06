import React from "react";
import css from "./Ticker.module.css";

function Ticker({
  item
}) {
    const { ticker, price, exchange, change, change_percent, dividend, last_trade_time} = item;
  return (
    <div
        style={{ backgroundColor: getRandomHexColor(),}}
        className={css.ticker}
      >
          <h2 className={css.title}>{ticker}</h2>
          <ul style={{listStyle: "none", padding: 0, margin: 0}}>
              <li className={css.item}>Price: {price}</li>
              <li className={css.item}>Exchange: {exchange}</li>
              <li className={css.item}>Change: {change}</li>
              <li className={css.item}>Change percent: {change_percent * 100}%</li>
              <li className={css.item}>Dividend: {dividend}</li>
              <li className={css.item}>Yield: {ticker.yield}</li>
              <li className={css.item}>Last trade time: {last_trade_time}</li>
          </ul>
    </div>
  );
}

function getRandomHexColor() {
  const isWhite = Math.random() > 0.9;

  if (isWhite) {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const green = Math.floor(Math.random() * 200 + 55).toString(16).padStart(2, '0');
  const red = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`;
}



export default Ticker;
