import React from 'react';
import { useParams, useHistory, Link } from "react-router-dom";

const Section4ArticleAndTableArea = (props) => {
    return (
      <div className="section4-article-and-table-area">
        <div className="article-area-crypto-specific">
          <h1>About {props.name}</h1>
        </div>
        <div className="table-area-crypto-specific">
          <h1>{props.name} Price</h1>
          <table>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific grey-color-row">
                {props.name} Price
              </th>
              <td className="table-data-crypto-specific grey-color-row">
                {props.price}
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
              <td className="table-data-crypto-specific">{props.marketCap}</td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">24 Hour Volume</th>
              <td className="table-data-crypto-specific">
                {props.a24hourVolume}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">
                Circulating Supply
              </th>
              <td className="table-data-crypto-specific">
                {props.circulatingSupply}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">Total Supply</th>
              <td className="table-data-crypto-specific">
                {props.totalSupply}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">Max Supply</th>
              <td className="table-data-crypto-specific">{props.maxSupply}</td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">All Time High</th>
              <td className="table-data-crypto-specific">
                {props.allTimeHigh}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">All Time Low</th>
              <td className="table-data-crypto-specific">{props.allTimeLow}</td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                52 Week High / Low
              </th>
              <td className="table-data-crypto-specific">
                {props.a52weekHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">
                90 Day High / Low
              </th>
              <td className="table-data-crypto-specific">
                {props.a90dayHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                30 Day High / Low
              </th>
              <td className="table-data-crypto-specific">
                {props.a30dayHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">7 Day High / Low</th>
              <td className="table-data-crypto-specific">
                {props.a7dayHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                24 Hour High / Low
              </th>
              <td className="table-data-crypto-specific">
                {props.a24hourHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">
                Yesterday's High / Low{" "}
              </th>
              <td className="table-data-crypto-specific">
                {props.yesterdaysHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                Yesterday's Open / Close{" "}
              </th>
              <td className="table-data-crypto-specific">
                {props.yesterdaysOpenAndClose}
              </td>
            </tr>
            <tr className="table-row-crypto-specific ">
              <th className="table-header-crypto-specific">
                Yesterday's Change{" "}
              </th>
              <td className="table-data-crypto-specific">
                {props.yesterdaysChange}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                Yesterday's Volume{" "}
              </th>
              <td className="table-data-crypto-specific">
                {props.yesterdaysVolume}
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
}

export default Section4ArticleAndTableArea;
