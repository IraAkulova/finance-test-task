import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./PriceTickers.module.css";
import { fetchTickers } from "../../redux/operations";
import Loader from "../loader/Loader";
import Ticker from "../tiker/Ticker";

const PriceTickers = () => {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers);
  const tickersArr = tickers.tickers;

  useEffect(() => {
    dispatch(fetchTickers());
  }, [dispatch]);

  return (
    <div className="container">
      <section className={css.tickersContainer}>
        {tickersArr === undefined  && <Loader />}
        <h2 className={css.tickersHeader}>Price tickers</h2>
         <ul className={css.tickers}>
          {tickersArr?.length > 0 && tickersArr?.map((ticker) => (
            <li key={`${ticker.ticker}-${ticker.price}`} className={css.ticker}>
              <Ticker item={ticker} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PriceTickers;
