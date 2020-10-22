import React from 'react';

const AnalyticsOfUserArticle = (props) => {
    return (
      <div>
        <h5>analytics</h5>
        <ul>
          <li>
            <h5>
              Total Price of Your articles:{" "}
              <h3>{props.sumOfPriceOfThisUsersArticles}</h3>
            </h5>
          </li>
          <li>
            <h5>
              Average Price of Your Articles:
              <h3>{props.averagePriceOfThisUsersArticles}</h3>
            </h5>
          </li>
          <li>
            <h5>
              Total Count of Your Articles:
              <h3>{props.TotalCountOfThisUsersArticles}</h3>
            </h5>
          </li>
        </ul>
      </div>
    );
}

export default AnalyticsOfUserArticle;
