import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ArticleItem from "../components/ArticleItem";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

import "./GetSpecificArticleById.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import SpecificArticleByIdItem from "../components/SpecificArticleByIdItem";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";

const GetSpecificArticleById = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const articleId = useParams().articleId;
  const [Article, setArticle] = useState({});
  const [ArticleAuthor, setArticleAuthor] = useState({});
  const [referenceSites, setreferenceSites] = useState([]);
  const [contents, setcontents] = useState([]);
  const [externalSites, setexternalSites] = useState([]);
  const [images, setimages] = useState([]);
  const auth = useContext(AuthContext);
  const [authorId, setauthorId] = useState();

  const [
    articlesExceptTheCurrentOne,
    setarticlesExceptTheCurrentOne,
  ] = useState([]);

  useEffect(() => {
    const getArticleById = async (params) => {
      let authorId;
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            `/articles/get_specific_article_by_id/${articleId}`
        );
        // console.log(responseData);
        // console.log(responseData.article);
        // console.log(responseData.article.author);
        // console.log(responseData.article.author.name);
        setArticle(responseData.article);
        setArticleAuthor(responseData.article.author);
        console.log(responseData.article.author.id);
        authorId = responseData.article.author.id;
        setauthorId(responseData.article.author.id);
        setreferenceSites(responseData.article.referenceSites);
        setcontents(responseData.article.contents);
        // console.log(responseData.article.referenceSites);
        setexternalSites(responseData.article.externalSites);
        setimages(responseData.article.images);
      } catch (error) {
        console.log(error);
      }
      Axios.get(
        process.env.REACT_APP_BACKEND_URL +
          `/articles/get_same_authors_articles/${articleId}/${authorId}`,
        {
          Authorization: "Bearer " + auth.token,
        }
      )
        .then((response) => {
          console.log(response.data);
          setarticlesExceptTheCurrentOne(
            response.data.articlesExceptTheCurrentOne
          );
        })
        .catch((err) => {
          console.log(err);
        });

        try {
          await Axios.get(
            process.env.REACT_APP_BACKEND_URL +
              `/articles/${articleId}/addViewCount`
          );
        } catch (error) {
          console.log(error);
        }
      // window.scrollTo(0, 0);
    };
    getArticleById();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && Article && (
        <div className="getSpecificArticleById-container">
          <div className="main-container">
            <div>
              {/* <ArticleItem
                key={Article.id}
                id={Article.id}
                image={Article.image}
                title={Article.title}
                content={Article.content}
                authorName={ArticleAuthor.name}
                authorEmail={ArticleAuthor.email}
                authorId={ArticleAuthor._id}
                categories={Article.categories}
                tags={Article.tags}
                price={Article.price}
                date_created={Article.date_created}
                downloadable={Article.downloadable}
              /> */}
              <SpecificArticleByIdItem
                key={Article.id}
                id={Article.id}
                images={images}
                title={Article.title}
                // heading={Article.heading}
                // content={Article.content}
                // heading2={Article.heading2}
                // content2={Article.content2}
                // heading3={Article.heading3}
                // content3={Article.content3}
                // heading4={Article.heading4}
                // content4={Article.content4}
                authorName={ArticleAuthor.name}
                authorEmail={ArticleAuthor.email}
                authorId={ArticleAuthor._id}
                categories={Article.categories}
                tags={Article.tags}
                price={Article.price}
                date_created={Article.date_created}
                downloadable={Article.downloadable}
                referenceSites={referenceSites}
                contents={contents}
                externalSites={externalSites}
                articlesExceptTheCurrentOne={articlesExceptTheCurrentOne}
              />
              <div className="article-index-link">
                <span>
                  <Link to={`/articles`}>Article Index</Link>
                </span>
              </div>
              <MoveToTopButton />
            </div>
          </div>
          {/* <div className="side-container"></div> */}
        </div>
      )}
      {!isLoading && Article && <FooterMainNavigation />}
    </React.Fragment>
  );
};

export default GetSpecificArticleById;
