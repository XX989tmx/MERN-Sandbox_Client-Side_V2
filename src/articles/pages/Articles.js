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

  useEffect(() => {
    const allArticles = async (params) => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/articles/all`
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
      var query = formState.inputs.query.value;
      const responseData = await sendRequest(
        `http://localhost:5000/api/articles/all?q=${query}`
      );
      console.log(responseData.articles);
      setSearchedArticle(responseData.articles);
    } catch (error) {}
  };

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && AllArticles && (
        <div className="container">
          <div className="main-container">
            <div className="post-form-area">
              <form onSubmit={getArticleBySearchQuery}>
                <Input
                  id="query"
                  element="input"
                  label="query"
                  validators={[VALIDATOR_REQUIRE()]}
                  onInput={inputHandler}
                />
                <Button>Search</Button>
              </form>

              <label>
                Sort Article
                <select name="sort">
                  <option value="default" selected>
                    sort
                  </option>
                  <option value="highest rating">highest rating</option>
                  <option value="lowest rating">lowest rating</option>
                  <option value="oldest">oldest</option>
                  <option value="latest">latest</option>
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

              <label>
                price sort
                <select name="price">
                  <option value="default" selected>
                    sort
                  </option>
                  <option value="500~1000">500~1000</option>
                  <option value="1000~2000">1000~2000</option>
                  <option value="2000~5000">2000~5000</option>
                  <option value="5000~10000">5000~10000</option>
                  <option value="10000~">10000~</option>
                </select>
              </label>

              <label>
                downloadable
                <select name="downloadable">
                  <option value="default" selected>
                    sort
                  </option>
                  <option value="Downloadable">Downloadable</option>
                  <option value="Web Only">Web Only</option>
                </select>
              </label>

              <label>
                Format
                <select name="Format">
                  <option value="default" selected>
                    sort
                  </option>
                  <option value="PDF">PDF</option>
                  <option value="EPUB">EPUB</option>
                  <option value="WEB">WEB</option>
                </select>
              </label>

              <label>
                Category
                <select name="Category">
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

              <label>
                Tag
                <select name="Tag">
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

              <label>
                date
                <select name="date">
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

              <h5>{ArticleCount} articles</h5>
              {SearchedArticle ? (
                <ArticleList items={SearchedArticle} />
              ) : (
                <ArticleList items={AllArticles} />
              )}
            </div>
          </div>
          <div className="side-container"></div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Articles;
