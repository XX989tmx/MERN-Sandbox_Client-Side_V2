import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
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

import "./Articles.css";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

const ARTICLES = [
  {
    id: "a1",
    title: "BIOS",
    content:
      "BIOS (pronounced: /ˈbaɪɒs/, BY-oss; an acronym for Basic Input/Output System and also known as the System BIOS, ROM BIOS or PC BIOS) is firmware used to perform hardware initialization during the booting process (power-on startup), and to provide runtime services for operating systems and programs.[1] The BIOS firmware comes pre-installed on a personal computer's system board, and it is the first software to run when powered on. The name originates from the Basic Input/Output System used in the CP/M operating system in 1975.[2][3] The BIOS originally proprietary to the IBM PC has been reverse engineered by companies looking to create compatible systems. The interface of that original system serves as a de facto standard.The BIOS in modern PCs initializes and tests the system hardware components, and loads a boot loader from a mass memory device which then initializes an operating system. In the era of DOS, the BIOS provided a hardware abstraction layer for the keyboard, display, and other input/output (I/O) devices that standardized an interface to application programs and the operating system. More recent operating systems do not use the BIOS after loading, instead accessing the hardware components directly.Most BIOS implementations are specifically designed to work with a particular computer or motherboard model, by interfacing with various devices that make up the complementary system chipset. Originally, BIOS firmware was stored in a ROM chip on the PC motherboard. In modern computer systems, the BIOS contents are stored on flash memory so it can be rewritten without removing the chip from the motherboard. This allows easy, end-user updates to the BIOS firmware so new features can be added or bugs can be fixed, but it also creates a possibility for the computer to become infected with BIOS rootkits. Furthermore, a BIOS upgrade that fails can brick the motherboard permanently, unless the system includes some form of backup for this case.Unified Extensible Firmware Interface (UEFI) is a successor to the legacy PC BIOS, aiming to address its technical shortcomings.[4]",
    author: "u1",
    category: "computer",
    publishedDate: "a",
  },
  {
    id: "a2",
    title: "Memory address",
    content:
      "In computing, a memory address is a reference to a specific memory location used at various levels by software and hardware. Memory addresses are fixed-length sequences of digits conventionally displayed and manipulated as unsigned integers.[1] Such numerical semantic bases itself upon features of CPU (such as the instruction pointer and incremental address registers), as well upon use of the memory like an array endorsed by various programming languages.",
    author: "u2",
    category: "computer",
    publishedDate: "a",
  },
  {
    id: "a3",
    title: "3",
    content: "a",
    author: "u3",
    category: "computer",
    publishedDate: "a",
  },
];

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

  const [query, setQuery] = useState();

  useEffect(() => {
    const allArticles = async (params) => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/articles/all`
        );
        console.log(responseData);
        setAllArticles(responseData.articles);
        console.log(responseData.count);
        setArticleCount(responseData.count);
      } catch (error) {}
    };
    allArticles();
  }, [sendRequest]);

  const getArticleBySearchQuery = async (event) => {
    event.preventDefault();
    try {
      var sort = "oldest";
      var latest = "latest";
      // var query = formState.inputs.query.value;
      const queryValue = event.target.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/articles/all?q=${queryValue}`
      );
      console.log(responseData.articles);
      setSearchedArticle(responseData.articles);
    } catch (error) {}
  };

  const sortByCategory = async (params) => {
    console.log("selected");
    try {
      var categories = document.getElementById("categories");
      var categoriesValue = categories.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/all?categories=${categoriesValue}`
      );
      console.log(responseData);
      setAllArticles(responseData.articles);
      console.log(responseData.count);
      setArticleCount(responseData.count);
    } catch (error) {}
  };

  const sortByTag = async (params) => {
    console.log("selected");
    try {
      var tags = document.getElementById("tags");
      var tagsValue = tags.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/articles/all?tags=${tagsValue}`
      );
      console.log(responseData);
      setAllArticles(responseData.articles);
      console.log(responseData.count);
      setArticleCount(responseData.count);
    } catch (error) {}
  };

  const sortByPrice = async (params) => {
    console.log("selected");
    try {
      var price = document.getElementById("price");
      var priceValue = price.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/articles/all?price=${priceValue}`
      );
      console.log(responseData);
      setAllArticles(responseData.articles);
      console.log(responseData.count);
      setArticleCount(responseData.count);
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
          console.log(responseData);
          console.log(responseData.results);
          setAllArticles(responseData.results);
        } catch (error) {}
        break;
      case "CheapestToHighest":
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/articles/price_sort?q=${sortArticleFieldValue}`
          );
          console.log(responseData);
          console.log(responseData.results.id);
          setAllArticles(responseData.results);
        } catch (error) {}
        break;
      case "FromOldest":
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/articles/date_sort?date=FromOldest`
          );
          console.log(responseData);
          console.log(responseData.results);
          setAllArticles(responseData.results);
        } catch (error) {}
        break;
      case "FromLatest":
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/articles/date_sort?date=FromLatest`
          );
          console.log(responseData);
          console.log(responseData.results);
          setAllArticles(responseData.results);
        } catch (error) {}
        break;
      default:
        break;
    }
  };

  const changeHandler = (event) => {
    const queryValue = event.target.value;
    setQuery(queryValue);
  }

  const submitHandler = async(event) => {
    event.preventDefault();
    try {
      var sort = "oldest";
      var latest = "latest";
      // var query = formState.inputs.query.value;
      const queryValue = event.target.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/all?q=${event.target.value}`
      );
      console.log(responseData.articles);
      setSearchedArticle(responseData.articles);
    } catch (error) {}
  }

  const DownloadableHandler = async (params) => {
  try {var downloadable = document.getElementById("downloadable");
       var downloadableValue = downloadable.value;
    const responseData = await sendRequest(
      process.env.REACT_APP_BACKEND_URL +
        `/articles/downloadable?downloadable=${downloadableValue}`
    );
    console.log(responseData.articles);
    setAllArticles(responseData.articles);
  } catch (error) {
    
  }
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
                  // type="search"
                  label="SEARCH"
                  placeholder="Search"
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                  autoFocus
                />
                {/* <Button btnBlack>Search</Button> */}
              </form>
              <form onChange={submitHandler}>
                <input type="text" value={query} onChange={changeHandler} />
                <h3>{query}</h3>
              </form>
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
                    <option value="lowest rating">lowest rating</option>
                    <option value="FromOldest">From Oldest</option>
                    <option value="FromLatest">From Latest</option>
                    <option value="Most viewed">Most viewed</option>
                    <option value="Least viewed">Least viewed</option>
                    <option value="Highest Favorite Count">
                      Highest Favorite Count
                    </option>
                    <option value="Lowest Favorite Count">
                      Lowest Favorite Count
                    </option>
                    {/* <option value="Highest Cited">Highest Cited</option>
                  <option value="Lowest Cited">Lowest Cited</option> */}
                    <option value="stock">stock</option>
                    <option value="Free Shipment">Free Shipment</option>
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

              <span className="selector-item">
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
              </span>

              <span className="selector-item">
                <label>
                  Category
                  <select
                    className="selector"
                    name="Category"
                    id="categories"
                    onChange={sortByCategory}
                  >
                    <option value="default" selected>
                      sort
                    </option>
                    <option value="politics">politics</option>
                    <option value="science">science</option>
                    <option value="education">education</option>
                    <option value="literature">literature</option>
                    <option value="investment">investment</option>
                    <option value="technology">technology</option>
                    <option value="business">business</option>
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
                    <option value="default" selected>
                      sort
                    </option>
                    <option value="politics">politics</option>
                    <option value="science">science</option>
                    <option value="education">education</option>
                    <option value="literature">literature</option>
                    <option value="investment">investment</option>
                    <option value="technology">technology</option>
                    <option value="business">business</option>
                  </select>
                </label>
              </span>

              <span className="selector-item">
                <label>
                  date
                  <select className="selector" name="date">
                    <option value="default" selected>
                      sort
                    </option>
                    <option value="last 30 days">last 30 days</option>
                    <option value="last 6 month">last 6 month</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                  </select>
                </label>
              </span>
            </div>
            <p style={{ color: "grey", textAlign: "left" }}>
              if something does not work, please reload the page.
            </p>
            <hr />

            <h5>{ArticleCount} articles</h5>
            {SearchedArticle ? (
              <ArticleList items={SearchedArticle} />
            ) : (
              <ArticleList items={AllArticles} />
            )}
            <MoveToTopButton />
          </div>
        </div>
        <div className="side-container"></div>
      </div>
      {/* )} */}
    </React.Fragment>
  );
};

export default Articles;
