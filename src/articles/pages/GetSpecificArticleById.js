import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ArticleItem from "../components/ArticleItem";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import Button from "../../shared/components/FormElements/Button";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

import "./GetSpecificArticleById.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import SpecificArticleByIdItem from "../components/SpecificArticleByIdItem";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import ArticleCommentInput from "../components/ArticleCommentInput";
import ArticleCommentSection from "../components/ArticleCommentSection";

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
  const [StaredBy, setStaredBy] = useState([]);
  const [Comments, setComments] = useState([]);
  const [ArticleTags, setArticleTags] = useState([]);
  const [ArticleCategories, setArticleCategories] = useState([]);
  const [WordCount, setWordCount] = useState();
  const [EstimatedReadingTime, setEstimatedReadingTime] = useState();
  const [ViewCount, setViewCount] = useState();

  const [IsLoading, setIsLoading] = useState(false);

  const [formState, inputHandler] = useForm(
    {
      comment: { value: "", isValid: false },
    },
    false
  );

  const [ReloadStatus, setReloadStatus] = useState(false);

  const [
    articlesExceptTheCurrentOne,
    setarticlesExceptTheCurrentOne,
  ] = useState([]);

  useEffect(() => {
    const getArticleById = async (params) => {
      setIsLoading(true);
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
        console.log(responseData.article);
        setStaredBy(responseData.article.staredBy);
        setComments(responseData.article.comments);
        setArticleTags(responseData.article.tags);
        setArticleCategories(responseData.article.categories);
        setWordCount(responseData.article.wordCount);
        setEstimatedReadingTime(responseData.article.estimatedReadingTime);
        setViewCount(responseData.article.viewCount);
      } catch (error) {
        console.log(error);
      }
      function moveToTop(params) {
        window.scrollTo(0, 0);
      }
      moveToTop();
      setIsLoading(false);
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

  useEffect(() => {
    const getArticleById = async (params) => {
      setIsLoading(true);
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
        console.log(responseData.article);
        setStaredBy(responseData.article.staredBy);
        setComments(responseData.article.comments);
        setArticleTags(responseData.article.tags);
        setArticleCategories(responseData.article.categories);
        setWordCount(responseData.article.wordCount);
        setEstimatedReadingTime(responseData.article.estimatedReadingTime);
        setViewCount(responseData.article.viewCount);
      } catch (error) {
        console.log(error);
      }
      function moveToTop(params) {
        window.scrollTo(0, 0);
      }
      moveToTop();
      setIsLoading(false);
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
    };
    getArticleById();
  }, [ReloadStatus]);

  const reloadStateHandler = (params) => {
    setReloadStatus((prev) => !prev);
  };

  const submitCommentHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/articles/addCommentsToArticle/${auth.userId}/${articleId}`,
        { comment: formState.inputs.comment.value }
      );

      if (!!response) {
        reloadStateHandler();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && Article && (
        <div>
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
                  categories={ArticleCategories}
                  tags={ArticleTags}
                  price={Article.price}
                  date_created={Article.date_created}
                  downloadable={Article.downloadable}
                  referenceSites={referenceSites}
                  contents={contents}
                  externalSites={externalSites}
                  articlesExceptTheCurrentOne={articlesExceptTheCurrentOne}
                  StaredBy={StaredBy}
                  WordCount={WordCount}
                  EstimatedReadingTime={EstimatedReadingTime}
                  ViewCount={ViewCount}
                  reloadStateHandler={reloadStateHandler}
                />
                <div>
                  <div style={{ padding: "10px", textAlign: "center" }}>
                    {" "}
                    <ArticleCommentInput
                      submitCommentHandler={submitCommentHandler}
                      inputHandler={inputHandler}
                      reloadStateHandler={reloadStateHandler}
                    />
                  </div>
                  <div style={{ padding: "10px" }}>
                    <ArticleCommentSection
                      Comments={Comments}
                      reloadStateHandler={reloadStateHandler}
                    />
                  </div>
                </div>
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

          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default GetSpecificArticleById;
