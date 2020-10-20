import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import ArticleList from "../components/ArticleList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { dateOptions } from "../data/article-date-sort-data";

import "./Articles.css";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import Axios from "axios";
import Top5MostViewedArticlesList from "../components/Top5MostViewedArticlesList";

const Articles = () => {
  const [AllArticles, setAllArticles] = useState([]);
  const [ArticleCount, setArticleCount] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      query: { value: "", isValid: false },
    },
    false
  );
  const [SearchedArticle, setSearchedArticle] = useState();
  const [tagnames, settagnames] = useState();
  const [categoryNames, setcategoryNames] = useState();
  const [searchResultInfo, setsearchResultInfo] = useState();
  const [query, setQuery] = useState();
  const [DateSelector, setDateSelector] = useState();
  // const [TagNames, setTagNames] = useState();
  // const [CategoryNames, setCategoryNames] = useState();
  const [Top5MostViewedArticles, setTop5MostViewedArticles] = useState([]);

  useEffect(() => {
    const allArticles = async (params) => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/articles/all`
        );
        // console.log(responseData);
        setAllArticles(responseData.articles);
        // console.log(responseData.count);
        // setArticleCount(responseData.count);
        const articleCount = responseData.articles.length;
        let singleOrPlural;
        if (articleCount === 1) {
          singleOrPlural = "article";
        } else {
          singleOrPlural = "articles";
        }
        const result = `${articleCount} ${singleOrPlural} found in total`;
        setsearchResultInfo(result);
        // console.log(responseData.TagArray);
        // console.log(responseData.CategoryArray);
        // let tagNames = responseData.TagArray.map(a => <option value={a}>{a}</option>)
        // let categoryNames = responseData.CategoryArray.map(a => <option value={a}>{a}</option>)
        // setTagNames(tagNames);
        // setCategoryNames(categoryNames);
      } catch (error) {}
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/articles/categoryIndex`
        );
        // console.log(responseData.responseArray);
        const categoryName = responseData.responseArray.map((t) => (
          <option value={t.categoryName}>{t.categoryName}</option>
        ));
        setcategoryNames(categoryName);
      } catch (error) {}
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/articles/tagIndex`
        );
        // console.log(responseData.responseArray);
        const tagName = responseData.responseArray.map((t) => (
          <option value={t.tagName}>{t.tagName}</option>
        ));
        settagnames(tagName);
      } catch (error) {}
      try {
        const dateSelector = await dateOptions.map(function (v, i) {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        });
        setDateSelector(dateSelector);
      } catch (error) {}
      try {
        const response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL + `/articles/top5MostViewedArticles`
        );
        const data = response.data;
        console.log(data.articles);
        const top5MostViewedArticles = data.articles;
        setTop5MostViewedArticles(top5MostViewedArticles);
      } catch (error) {
        console.log(error);
      }
    };
    allArticles();
  }, [sendRequest]);

  const getArticleBySearchQuery = async (event) => {
    event.preventDefault();
    try {
      var sort = "oldest";
      var latest = "latest";
      // var query = formState.inputs.query.value;
      const queryValue = event.target.value.trim();
      // console.log(queryValue);
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/all?q=${encodeURIComponent(queryValue)}`
      );
      // console.log(responseData.articles);
      setAllArticles(responseData.articles);
      const articleCount = responseData.articles.length;
      let singleOrPlural;
      if (articleCount === 1) {
        singleOrPlural = "article";
      } else {
        singleOrPlural = "articles";
      }
      const result = `${articleCount} ${singleOrPlural} found in searched term '${queryValue}'`;
      setsearchResultInfo(result);
    } catch (error) {}
  };

  const sortByCategory = async (params) => {
    // console.log("selected");
    try {
      var categories = document.getElementById("categories");
      var categoriesValue = categories.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/all?categories=${categoriesValue}`
      );
      // console.log(responseData);
      setAllArticles(responseData.articles);
      // console.log(responseData.count);
      // setArticleCount(responseData.count);
      const articleCount = responseData.articles.length;
      let singleOrPlural;
      if (articleCount === 1) {
        singleOrPlural = "article";
      } else {
        singleOrPlural = "articles";
      }
      const result = `${articleCount} ${singleOrPlural} found in ${categoriesValue} category`;
      setsearchResultInfo(result);
    } catch (error) {}
  };

  const sortByTag = async (params) => {
    // console.log("selected");
    try {
      var tags = document.getElementById("tags");
      var tagsValue = tags.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/articles/all?tags=${tagsValue}`
      );
      // console.log(responseData);
      setAllArticles(responseData.articles);
      // console.log(responseData.count);
      // setArticleCount(responseData.count);
      const articleCount = responseData.articles.length;
      let singleOrPlural;
      if (articleCount === 1) {
        singleOrPlural = "article";
      } else {
        singleOrPlural = "articles";
      }
      const result = `${articleCount} ${singleOrPlural} found in ${tagsValue} tag`;
      setsearchResultInfo(result);
    } catch (error) {}
  };

  const sortByPrice = async (params) => {
    // console.log("selected");
    try {
      var price = document.getElementById("price");
      var priceValue = price.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/articles/all?price=${priceValue}`
      );
      // console.log(responseData);
      setAllArticles(responseData.articles);
      // console.log(responseData.count);
      // setArticleCount(responseData.count);
      const articleCount = responseData.articles.length;
      let singleOrPlural;
      if (articleCount === 1) {
        singleOrPlural = "article";
      } else {
        singleOrPlural = "articles";
      }
      const result = `${articleCount} ${singleOrPlural} found in ${priceValue} price range`;
      setsearchResultInfo(result);
    } catch (error) {}
  };

  const sortArticleMainHandler = async (params) => {
    // event.preventDefault();
    let sortArticleField = document.getElementById("sortArticleMain");
    let sortArticleFieldValue = sortArticleField.value;
    switch (sortArticleFieldValue) {
      case "HighestToCheapest":
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/articles/price_sort?q=${sortArticleFieldValue}`
          );
          // console.log(responseData);
          // console.log(responseData.results);
          setAllArticles(responseData.results);
        } catch (error) {}
        break;
      case "CheapestToHighest":
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/articles/price_sort?q=${sortArticleFieldValue}`
          );
          // console.log(responseData);
          // console.log(responseData.results.id);
          setAllArticles(responseData.results);
        } catch (error) {}
        break;
      case "FromOldest":
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/articles/date_sort?date=FromOldest`
          );
          // console.log(responseData);
          // console.log(responseData.results);
          setAllArticles(responseData.results);
        } catch (error) {}
        break;
      case "FromLatest":
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/articles/date_sort?date=FromLatest`
          );
          // console.log(responseData);
          // console.log(responseData.results);
          setAllArticles(responseData.results);
        } catch (error) {}
        break;
      default:
        break;
    }
  };

  // const changeHandler = (event) => {
  //   const queryValue = event.target.value;
  //   setQuery(queryValue);
  // };

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   try {
  //     var sort = "oldest";
  //     var latest = "latest";
  //     // var query = formState.inputs.query.value;
  //     const queryValue = event.target.value;
  //     const responseData = await sendRequest(
  //       process.env.REACT_APP_BACKEND_URL +
  //         `/articles/all?q=${event.target.value}`
  //     );
  //     console.log(responseData.articles);
  //     setSearchedArticle(responseData.articles);
  //   } catch (error) {}
  // };

  const DownloadableHandler = async (params) => {
    try {
      var downloadable = document.getElementById("downloadable");
      var downloadableValue = downloadable.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/downloadable?downloadable=${downloadableValue}`
      );
      // console.log(responseData.articles);
      setAllArticles(responseData.articles);
      const articleCount = responseData.articles.length;
      let singleOrPlural;
      if (articleCount === 1) {
        singleOrPlural = "article";
      } else {
        singleOrPlural = "articles";
      }
      const result = `${articleCount} ${downloadableValue} ${singleOrPlural} found.`;
      setsearchResultInfo(result);
    } catch (error) {}
  };

  return (
    <React.Fragment>
      {/* {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )} */}
      {/* {!isLoading && AllArticles && ( */}
      <div className="articles-container">
        <div className="main-wrapper">
          <div className="post-form-area">
            <div className="search-box-container center">
              <form onChange={getArticleBySearchQuery}>
                <Input
                  id="query"
                  element="input"
                  type="search"
                  label="SEARCH"
                  placeholder="Search"
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                  autoFocus
                />
                {/* <Button btnBlack>Search</Button> */}
              </form>
              {/* <form onChange={submitHandler}>
                <input type="text" value={query} onChange={changeHandler} />
                <h3>{query}</h3>
              </form> */}
            </div>
            <div className="sort-selector-container center">
              <span className="selector-item">
                <label>
                  Sort Article
                  <select
                    name="sort"
                    id="sortArticleMain"
                    onChange={sortArticleMainHandler}
                    className="selector"
                  >
                    <option value="default" selected>
                      sort
                    </option>
                    <option value="HighestToCheapest">
                      From Highest Price
                    </option>
                    <option value="CheapestToHighest">From Lowest Price</option>
                    {/* <option value="lowest rating">lowest rating</option> */}
                    <option value="FromOldest">From Oldest</option>
                    <option value="FromLatest">From Latest</option>
                    {/* <option value="Most viewed">Most viewed</option>
                    <option value="Least viewed">Least viewed</option>
                    <option value="Highest Favorite Count">
                      Highest Favorite Count
                    </option>
                    <option value="Lowest Favorite Count">
                      Lowest Favorite Count
                    </option> */}
                    {/* <option value="Highest Cited">Highest Cited</option>
                  <option value="Lowest Cited">Lowest Cited</option> */}
                    {/* <option value="stock">stock</option>
                    <option value="Free Shipment">Free Shipment</option> */}
                  </select>
                </label>
              </span>

              <span className="selector-item">
                <label>
                  price sort
                  <select
                    className="selector"
                    name="price"
                    id="price"
                    onChange={sortByPrice}
                  >
                    <option value="default" selected>
                      sort
                    </option>
                    <option value="0~499">~499</option>
                    <option value="500~999">500~999</option>
                    <option value="1000~1999">1000~1999</option>
                    <option value="2000~4999">2000~4999</option>
                    <option value="5000~9999">5000~9999</option>
                    <option value="10000~">10000~</option>
                  </select>
                </label>
              </span>

              <span className="selector-item">
                <label>
                  downloadable
                  <select
                    className="selector"
                    name="downloadable"
                    id="downloadable"
                    onChange={DownloadableHandler}
                  >
                    <option value="default" selected>
                      sort
                    </option>
                    <option value="Downloadable">Downloadable</option>
                    <option value="WebOnly">Web Only</option>
                  </select>
                </label>
              </span>

              {/* <span className="selector-item">
                <label>
                  Format
                  <select className="selector" name="Format">
                    <option value="default" selected>
                      sort
                    </option>
                    <option value="PDF">PDF</option>
                    <option value="EPUB">EPUB</option>
                    <option value="WEB">WEB</option>
                  </select>
                </label>
              </span> */}

              <span className="selector-item">
                <label>
                  Category
                  <select
                    className="selector"
                    name="Category"
                    id="categories"
                    onChange={sortByCategory}
                  >
                    <option>sort</option>
                    {categoryNames}
                  </select>
                </label>
              </span>

              <span className="selector-item">
                <label>
                  Tag
                  <select
                    className="selector"
                    name="Tag"
                    id="tags"
                    onChange={sortByTag}
                  >
                    <option>sort</option>
                    {tagnames}
                  </select>
                </label>
              </span>

              <span className="selector-item">
                <label>
                  date
                  <select className="selector" name="date">
                    <option value="default">sort</option>
                    {DateSelector}
                  </select>
                </label>
              </span>
            </div>
            <p className="reload-request">
              if something does not work, please reload the page.
            </p>
            <span>
              <Link to={"/articles/tagIndex"}>Tag Index</Link>
            </span>
            <span>
              <Link to={"/articles/categoryIndex"}>Category Index</Link>
            </span>
            <hr />

            {isLoading && (
              <div className="center">
                <LoadingSpinner />
              </div>
            )}
            {!isLoading && AllArticles && (
              <div>
                <h4>{searchResultInfo}</h4>
                {/* {SearchedArticle ? (
              <ArticleList items={SearchedArticle} />
            ) : ( */}
                <ArticleList items={AllArticles} />
              </div>
            )}
          </div>
        </div>
        {!isLoading && AllArticles && (
          <div className="side-container">
            <h4>Top5 Most Viewed Articles</h4>
            <Top5MostViewedArticlesList
              Top5MostViewedArticles={Top5MostViewedArticles}
            />
          </div>
        )}
      </div>
      <MoveToTopButton />
      <FooterMainNavigation />
      {/* )} */}
    </React.Fragment>
  );
};

export default Articles;
