import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

const Section4ArticleAndTableArea = (props) => {
  // for conditional rendering. isData ? data : no data

  const [Name, setName] = useState();
  const [ROI, setROI] = useState();
  const [MarketRank, setMarketRank] = useState();
  const [MarketCapUSD, setMarketCapUSD] = useState();
  const [a24HourVolumeUSD, seta24HourVolumeUSD] = useState();
  const [CirculatingSupply, setCirculatingSupply] = useState();
  const [TotalSupply, setTotalSupply] = useState();

  const [MaxSupply, setMaxSupply] = useState();
  const [AllTimeHigh, setAllTimeHigh] = useState();
  const [AllTimeLow, setAllTimeLow] = useState();
  const [a52WeekHigh, seta52WeekHigh] = useState();
  const [a52WeekLow, seta52WeekLow] = useState();
  const [a90DayHigh, seta90DayHigh] = useState();
  const [a90DayLow, seta90DayLow] = useState();
  const [a30DayHigh, seta30DayHigh] = useState();
  const [a30DayLow, seta30DayLow] = useState();
  const [a7DayHigh, seta7DayHigh] = useState();
  const [a7DayLow, seta7DayLow] = useState();
  const [a24HourHigh, seta24HourHigh] = useState();
  const [a24HourLow, seta24HourLow] = useState();
  const [YesterdaysHigh, setYesterdaysHigh] = useState();
  const [YesterdaysLow, setYesterdaysLow] = useState();
  const [YesterdaysOpen, setYesterdaysOpen] = useState();
  const [YesterdaysClose, setYesterdaysClose] = useState();
  const [YesterdaysChange, setYesterdaysChange] = useState();
  const [YesterdaysVolume, setYesterdaysVolume] = useState();

  useEffect(() => {
    const onLoad = (params) => {
      setROI(props.roi);
      setMarketRank(props.marketRank);
      setMarketCapUSD(props.marketCap.usd);
      seta24HourVolumeUSD(props.a24hourVolume.usd);
      setCirculatingSupply(props.circulatingSupply);
      setTotalSupply(props.totalSupply);
      setMaxSupply(props.maxSupply);
      setAllTimeHigh(props.allTimeHigh);
      setAllTimeLow(props.allTimeLow);
      seta52WeekHigh(props.a52weekHigh);
      seta52WeekLow(props.a52weekLow);
      seta90DayHigh(props.a90dayHigh);
      seta90DayLow(props.a90dayLow);
      seta30DayHigh(props.a30dayHigh);
      seta30DayLow(props.a30dayLow);
      seta7DayHigh(props.a7dayHigh);
      seta7DayLow(props.a7dayLow);
      seta24HourHigh(props.a24hourHigh);
      seta24HourLow(props.a24hourLow);
      setYesterdaysHigh(props.yesterdaysHigh);
      setYesterdaysLow(props.yesterdaysLow);
      setYesterdaysOpen(props.yesterdaysOpen);
      setYesterdaysClose(props.yesterdaysClose);
      setYesterdaysChange(props.yesterdaysChange);
      setYesterdaysVolume(props.yesterdaysVolume);
    };
    onLoad();
  }, []);

  return (
    <div className="section4-article-and-table-area">
      <div className="article-area-crypto-specific">
        <h1>About {props.name}</h1>

        <h3>{props.article.heading1}</h3>
        {props.article.paragraph1.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}

        <h3>{props.article.heading2}</h3>
        {props.article.paragraph2.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}

        <h3>{props.article.heading3}</h3>
        {props.article.paragraph3.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}

        <h3>{props.article.heading4}</h3>
        {props.article.paragraph4.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}

        <h3>{props.article.heading5}</h3>
        {props.article.paragraph5.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}

        <h3>{props.article.heading6}</h3>
        {props.article.paragraph6.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}

        <h3>{props.article.heading7}</h3>
        {props.article.paragraph7.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}

        <h3>{props.article.heading8}</h3>
        {props.article.paragraph8.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}

        <h3>{props.article.heading9}</h3>
        {props.article.paragraph9.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}

        <h3>{props.article.heading10}</h3>
        {props.article.paragraph10.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}
      </div>
      <div className="table-area-crypto-specific">
        <h1>{props.name} Price</h1>
        <table>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific grey-color-row">
              {props.name} Price
            </th>
            <td className="table-data-crypto-specific grey-color-row">
              $ {props.price.usd} USD
            </td>
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">{props.name} ROI</th>
            {ROI ? (
              <td className="table-data-crypto-specific">{props.roi}</td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">Market Rank</th>
            {MarketRank ? (
              <td className="table-data-crypto-specific">{props.marketRank}</td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">Market Cap</th>
            {MarketCapUSD ? (
              <td className="table-data-crypto-specific">
                $ {props.marketCap.usd} USD
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">24 Hour Volume</th>
            {a24HourVolumeUSD ? (
              <td className="table-data-crypto-specific">
                $ {props.a24hourVolume.usd} USD
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">Circulating Supply</th>
            {CirculatingSupply ? (
              <td className="table-data-crypto-specific">
                {props.circulatingSupply} {props.code}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">Total Supply</th>
            {TotalSupply ? (
              <td className="table-data-crypto-specific">
                {props.totalSupply} {props.code}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">Max Supply</th>
            {MaxSupply ? (
              <td className="table-data-crypto-specific">
                {props.maxSupply} {props.code}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">All Time High</th>
            {AllTimeHigh ? (
              <td className="table-data-crypto-specific">
                $ {props.allTimeHigh} USD
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">All Time Low</th>
            {AllTimeLow ? (
              <td className="table-data-crypto-specific">
                $ {props.allTimeLow} USD
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">52 Week High / Low</th>
            {a52WeekHigh && a52WeekLow ? (
              <td className="table-data-crypto-specific">
                {`$ ${props.a52weekHigh} USD / $ ${props.a52weekLow} USD`}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">90 Day High / Low</th>
            {a90DayHigh && a90DayLow ? (
              <td className="table-data-crypto-specific">
                {`$ ${props.a90dayHigh} USD / $ ${props.a90dayLow} USD`}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">30 Day High / Low</th>
            {a30DayHigh && a30DayLow ? (
              <td className="table-data-crypto-specific">
                {`$ ${props.a30dayHigh} USD / $ ${props.a30dayLow} USD`}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">7 Day High / Low</th>
            {a7DayHigh && a7DayLow ? (
              <td className="table-data-crypto-specific">
                {`$ ${props.a7dayHigh} USD / $ ${props.a7dayLow} USD`}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">24 Hour High / Low</th>
            {a24HourHigh && a24HourLow ? (
              <td className="table-data-crypto-specific">
                {`$ ${props.a24hourHigh} USD / $ ${props.a24hourLow} USD`}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">
              Yesterday's High / Low{" "}
            </th>
            {YesterdaysHigh && YesterdaysLow ? (
              <td className="table-data-crypto-specific">
                {`$ ${props.yesterdaysHigh} USD / $ ${props.yesterdaysLow} USD`}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">
              Yesterday's Open / Close{" "}
            </th>
            {YesterdaysOpen && YesterdaysClose ? (
              <td className="table-data-crypto-specific">
                {`$ ${props.yesterdaysOpen} USD / $ ${props.yesterdaysClose} USD`}
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific ">
            <th className="table-header-crypto-specific">
              Yesterday's Change{" "}
            </th>
            {YesterdaysChange ? (
              <td className="table-data-crypto-specific">
                $ {props.yesterdaysChange} USD
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">
              Yesterday's Volume{" "}
            </th>
            {YesterdaysVolume ? (
              <td className="table-data-crypto-specific">
                $ {props.yesterdaysVolume} USD
              </td>
            ) : (
              <td className="table-data-crypto-specific">No Data</td>
            )}
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Section4ArticleAndTableArea;
