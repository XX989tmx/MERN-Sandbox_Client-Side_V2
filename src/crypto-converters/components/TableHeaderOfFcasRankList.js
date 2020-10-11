import React from 'react';
import './TableHeaderOfFcasRankList.css';

const TableHeaderOfFcasRankList = () => {
    return (
      <tr className="table-header-of-fcas-rank-list-list">
        <td className="fcas-list-td-image"></td>
        <td className="fcas-list-td-name">Name</td>
        <td className="fcas-list-td-code">Code</td>
        <td className="fcas-list-td-fcasscore">FCAS Score</td>
        <td className="fcas-list-td-usd-price">Price</td>
        <td className="fcas-list-td-marketcap">MarketRank</td>
      </tr>
    );
}

export default TableHeaderOfFcasRankList;
