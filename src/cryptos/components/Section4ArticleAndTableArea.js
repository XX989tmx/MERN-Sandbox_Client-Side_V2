import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

const Section4ArticleAndTableArea = (props) => {
  const [MaxSupply, setMaxSupply] = useState();
  useEffect(() => {
    const onLoad = (params) => {
      setMaxSupply(props.maxSupply);
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
            <td className="table-data-crypto-specific">{props.roi}</td>
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">Market Rank</th>
            <td className="table-data-crypto-specific">{props.marketRank}</td>
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">Market Cap</th>
            <td className="table-data-crypto-specific">
              $ {props.marketCap.usd} USD
            </td>
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">24 Hour Volume</th>
            <td className="table-data-crypto-specific">
              $ {props.a24hourVolume.usd} USD
            </td>
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">Circulating Supply</th>
            <td className="table-data-crypto-specific">
              {props.circulatingSupply} {props.code}
            </td>
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">Total Supply</th>
            <td className="table-data-crypto-specific">
              {props.totalSupply} {props.code}
            </td>
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">Max Supply</th>
            {MaxSupply ? <td className="table-data-crypto-specific">
               {props.maxSupply} {props.code} 
            </td> : <td className="table-data-crypto-specific">
               No Data
            </td> }
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">All Time High</th>
            <td className="table-data-crypto-specific">
              $ {props.allTimeHigh} USD
            </td>
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">All Time Low</th>
            <td className="table-data-crypto-specific">
              $ {props.allTimeLow} USD
            </td>
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">52 Week High / Low</th>
            <td className="table-data-crypto-specific">
              {`$ ${props.a52weekHigh} USD / $ ${props.a52weekLow} USD`}
            </td>
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">90 Day High / Low</th>
            <td className="table-data-crypto-specific">
              {`$ ${props.a90dayHigh} USD / $ ${props.a90dayLow} USD`}
            </td>
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">30 Day High / Low</th>
            <td className="table-data-crypto-specific">
              {`$ ${props.a30dayHigh} USD / $ ${props.a30dayLow} USD`}
            </td>
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">7 Day High / Low</th>
            <td className="table-data-crypto-specific">
              {`$ ${props.a7dayHigh} USD / $ ${props.a7dayLow} USD`}
            </td>
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">24 Hour High / Low</th>
            <td className="table-data-crypto-specific">
              {`$ ${props.a24hourHigh} USD / $ ${props.a24hourLow} USD`}
            </td>
          </tr>
          <tr className="table-row-crypto-specific">
            <th className="table-header-crypto-specific">
              Yesterday's High / Low{" "}
            </th>
            <td className="table-data-crypto-specific">
              {`$ ${props.yesterdaysHigh} USD / $ ${props.yesterdaysLow} USD`}
            </td>
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">
              Yesterday's Open / Close{" "}
            </th>
            <td className="table-data-crypto-specific">
              {`$ ${props.yesterdaysOpen} USD / $ ${props.yesterdaysClose} USD`}
            </td>
          </tr>
          <tr className="table-row-crypto-specific ">
            <th className="table-header-crypto-specific">
              Yesterday's Change{" "}
            </th>
            <td className="table-data-crypto-specific">
              $ {props.yesterdaysChange} USD
            </td>
          </tr>
          <tr className="table-row-crypto-specific grey-color-row">
            <th className="table-header-crypto-specific">
              Yesterday's Volume{" "}
            </th>
            <td className="table-data-crypto-specific">
              $ {props.yesterdaysVolume} USD
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Section4ArticleAndTableArea;
