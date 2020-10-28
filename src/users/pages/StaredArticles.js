import React, { useEffect } from "react";
import { reactRouterDom } from "react-router-dom";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MyProfileSideNavigation from "../components/MyProfileSideNavigation";
import StaredArticlesList from "../components/StaredArticlesList";
import { useState } from "react";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react";

const StaredArticles = () => {
  const auth = useContext(AuthContext);
  const [StaredArticles, setStaredArticles] = useState([]);
  const [SortArticleOptions, setSortArticleOptions] = useState([]);
  const [SortArticleValue, setSortArticleValue] = useState();
  const [TagNames, setTagNames] = useState([]);
  const [CategoryNames, setCategoryNames] = useState([]);
  useEffect(() => {
    const fetch = async (params) => {
      async function fetchAndSetStaredArticlesData(params) {
        try {
          const response = await Axios.get(
            process.env.REACT_APP_BACKEND_URL +
              `/articles/getStaredArticles/${auth.userId}`
          );
          console.log(response.data);
          const data = response.data;
          const staredArticles = data.staredArticles;
          console.log(staredArticles);
          setStaredArticles(staredArticles);
        } catch (error) {
          console.log(error);
        }
      }
      await fetchAndSetStaredArticlesData();

      async function fetchAndSetTagSelectorData(params) {
        let response;
        try {
          response = await Axios.get(
            process.env.REACT_APP_BACKEND_URL + `/articles/tagIndex`
          );
          const data = response.data;
          const tagName = data.responseArray.map((v, i) => {
            return (
              <option key={i} value={v.tagName}>
                {v.tagName}
              </option>
            );
          });
          setTagNames(tagName);
        } catch (error) {
          console.log(error);
        }
      }
      await fetchAndSetTagSelectorData();

      async function fetchAndSetCategorySelectorData(params) {
        let response;
        try {
          response = await Axios.get(
            process.env.REACT_APP_BACKEND_URL + `/articles/categoryIndex`
          );
        } catch (error) {
          console.log(error);
        }
        const data = response.data;
        const categoryName = data.responseArray.map((v, i) => {
          return (
            <option key={i} value={v.categoryName}>
              {v.categoryName}
            </option>
          );
        });
        setCategoryNames(categoryName);
      }
      await fetchAndSetCategorySelectorData();

      function SetSortArticleOptionsData(params) {
        const sortArticleOptions = [
          { value: "most-viewed", text: "Most Viewed" },
          {
            value: "least-viewed",
            text: "Least Viewed",
          },
          {
            value: "downloadable",
            text: "Downloadable",
          },
          {
            value: "web-only",
            text: "Web Only",
          },
          {
            value: "from-highest-price",
            text: "Highest Price to Lowest",
          },
          {
            value: "from-lowest-price",
            text: "Lowest Price to Highest",
          },
          {
            value: "from-highest-comment-count",
            text: "Highest Comment Count to Lowest",
          },
          {
            value: "from-lowest-comment-count",
            text: "Lowest Comment count to Highest",
          },
          {
            value: "from-highest-star-count",
            text: "Highest Star Count to Lowest",
          },
          {
            value: "from-lowest-star-count",
            text: "Lowest Star Count to Highest",
          },
        ];

        const sortArticleOption = sortArticleOptions.map((v, i) => {
          return (
            <option key={i} value={v.value}>
              {" "}
              {v.text}
            </option>
          );
        });
        setSortArticleOptions(sortArticleOption);
      }
      SetSortArticleOptionsData();
    };
    fetch();
  }, []);

  const sortArticleChangeHandler = async (event) => {
    console.log(event.target.value);
    const sortArticleValue = event.target.value;
    const query = sortArticleValue;
    let response;
    try {
      response = await Axios.get(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/getStaredArticles/${auth.userId}/?q=${encodeURIComponent(
            query
          )}`
      );
    } catch (error) {
      console.log(error);
    }
    const data = response.data;
    const staredArticles = data.staredArticles;
    setStaredArticles(staredArticles);
    console.log(data);
  };

  const TagSortChangeHandler = async (event) => {
    const tagValue = event.target.value;
    const query = tagValue;
    let response;
    try {
      response = await Axios.get(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/getStaredArticles/${
            auth.userId
          }/?q=tag-search&tag=${encodeURIComponent(query)}`
      );
    } catch (error) {
      console.log(error);
    }
    const data = response.data;
    const staredArticles = data.staredArticles;
    setStaredArticles(staredArticles);
    console.log(data);
  };

  const CategorySortChangeHandler = async (event) => {
    const categoryValue = event.target.value;
    const query = categoryValue;
    let response;
    try {
      response = await Axios.get(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/getStaredArticles/${
            auth.userId
          }/?q=category-search&category=${encodeURIComponent(query)}`
      );
    } catch (error) {
      console.log(error);
    }
    const data = response.data;
    const staredArticles = data.staredArticles;
    setStaredArticles(staredArticles);
    console.log(data);
  };

  return (
    <React.Fragment>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingLeft: "20%",
        }}
      >
        <div
          style={{ width: "1080px", minHeight: "100vh" }}
          className="address-container"
        >
          <div>
            {" "}
            <h1> Stared Articles</h1>
            <h4>{StaredArticles.length} stared articles.</h4>
            <div style={{ padding: "10px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ marginLeft: "13px" }}>
                  <select name="" onChange={sortArticleChangeHandler}>
                    <option value="">Sort Article</option>
                    {SortArticleOptions}
                  </select>
                </div>
                <div style={{ marginLeft: "13px" }}>
                  <select name="" id="" onChange={TagSortChangeHandler}>
                    <option value="">Tag Sort</option>
                    {TagNames}
                  </select>
                </div>
                <div style={{ marginLeft: "13px" }}>
                  <select name="" id="" onChange={CategorySortChangeHandler}>
                    <option value="">Category Sort</option>
                    {CategoryNames}
                  </select>
                </div>
              </div>
            </div>
            <StaredArticlesList StaredArticles={StaredArticles} />
          </div>
        </div>
        <div
          style={{ padding: "20px", width: "370px" }}
          className="my-profile-sidebar-area"
        >
          <MyProfileSideNavigation />
        </div>
      </div>
      <MoveToTopButton />
      <FooterMainNavigation />
    </React.Fragment>
  );
};

export default StaredArticles;
