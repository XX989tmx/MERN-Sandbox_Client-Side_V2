import React from 'react';

const CryptoIndexTableHeader = () => {
    return (
      <tr className="tr-table-header">
        <th className="table-header-header1">
          <span></span>
        </th>
        <th className="table-header-header2">
          <span>Rank</span>
        </th>
        <th className="table-header-header3">
          <span>Name</span>
        </th>
        <th className="table-header-header4">
          <span>Market Cap</span>
        </th>
        <th className="table-header-header5">
          <span>Price</span>
        </th>
        <th className="table-header-header6">
          <span>Change(24h)</span>
        </th>
        <th className="table-header-header7">
          <span>Volume(24h)</span>
        </th>
        <th className="table-header-header8">
          <span>Circulating Supply</span>
        </th>
        <th className="table-header-header9">
          <span>Price Graph</span>
        </th>
        <th className="table-header-header10">
          <span></span>
        </th>
      </tr>
    );
}

export default CryptoIndexTableHeader;
