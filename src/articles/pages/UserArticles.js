import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
// const ARTICLES = [
//   {
//     id: "a1",
//     title: "BIOS",
//     content:
//       "BIOS (pronounced: /ˈbaɪɒs/, BY-oss; an acronym for Basic Input/Output System and also known as the System BIOS, ROM BIOS or PC BIOS) is firmware used to perform hardware initialization during the booting process (power-on startup), and to provide runtime services for operating systems and programs.[1] The BIOS firmware comes pre-installed on a personal computer's system board, and it is the first software to run when powered on. The name originates from the Basic Input/Output System used in the CP/M operating system in 1975.[2][3] The BIOS originally proprietary to the IBM PC has been reverse engineered by companies looking to create compatible systems. The interface of that original system serves as a de facto standard.The BIOS in modern PCs initializes and tests the system hardware components, and loads a boot loader from a mass memory device which then initializes an operating system. In the era of DOS, the BIOS provided a hardware abstraction layer for the keyboard, display, and other input/output (I/O) devices that standardized an interface to application programs and the operating system. More recent operating systems do not use the BIOS after loading, instead accessing the hardware components directly.Most BIOS implementations are specifically designed to work with a particular computer or motherboard model, by interfacing with various devices that make up the complementary system chipset. Originally, BIOS firmware was stored in a ROM chip on the PC motherboard. In modern computer systems, the BIOS contents are stored on flash memory so it can be rewritten without removing the chip from the motherboard. This allows easy, end-user updates to the BIOS firmware so new features can be added or bugs can be fixed, but it also creates a possibility for the computer to become infected with BIOS rootkits. Furthermore, a BIOS upgrade that fails can brick the motherboard permanently, unless the system includes some form of backup for this case.Unified Extensible Firmware Interface (UEFI) is a successor to the legacy PC BIOS, aiming to address its technical shortcomings.[4]",
//     author: "u1",
//     publishedDate: "a",
//   },
//   {
//     id: "a2",
//     title: "Memory address",
//     content:
//       "In computing, a memory address is a reference to a specific memory location used at various levels by software and hardware. Memory addresses are fixed-length sequences of digits conventionally displayed and manipulated as unsigned integers.[1] Such numerical semantic bases itself upon features of CPU (such as the instruction pointer and incremental address registers), as well upon use of the memory like an array endorsed by various programming languages.",
//     author: "u2",
//     publishedDate: "a",
//   },
//   { id: "a3", title: "3", content: "a", author: "u3", publishedDate: "a" },
// ];

const UserArticles = () => {
  const [loadedArticles, setLoadedArticles] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/articles/user/${userId}`
        );
        setLoadedArticles(responseData.articles);
      } catch (err) {}
    };
    fetchArticles();
  }, [sendRequest, userId]);

  const articleDeletedHandler = (deletedArticleId) => {
    setLoadedArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== deletedArticleId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedArticles && (
        <ArticleList
          items={loadedArticles}
          onDeleteArticle={articleDeletedHandler}
        />
      )}
    </React.Fragment>
  );
};

export default UserArticles;
