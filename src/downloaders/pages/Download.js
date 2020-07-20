import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./Download.css";
import { BrowserRouter } from "react-router-dom";
import download from "downloadjs";
import { Document, Page } from "react-pdf";

import catImage from '../../images/sampleImages/sample.jpg';
import samplePdf from '../../pdf/Git-Cheatsheet.pdf';

const Download = (params) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // downloaded or not
  const [IsDownloaded, setIsDownloaded] = useState(false);
  const [IsPdfDownloaded, setIsPdfDownloaded] = useState(false);
  const [IsXlsxDownloaded, setIsXlsxDownloaded] = useState(false);
  const [IsImageDownloaded, setIsImageDownloaded] = useState(false);
  const [IsTxtDownloaded, setIsTxtDownloaded] = useState(false);
  const [IsZipDownloaded, setIsZipDownloaded] = useState(false);
  const [IsMp4Downloaded, setIsMp4Downloaded] = useState(false);

  // checkbox
  const [IsChecked, setIsChecked] = useState(false);
  const [IsPdfChecked, setIsPdfChecked] = useState(false);
  const [IsXlsxChecked, setIsXlsxChecked] = useState(false);
  const [IsImageChecked, setIsImageChecked] = useState(false);
  const [IsTxtChecked, setIsTxtChecked] = useState(false);
  const [IsZipChecked, setIsZipChecked] = useState(false);
  const [IsMp4Checked, setIsMp4Checked] = useState(false);

  // download Count: general
  const [DownloadedCount, setDownloadedCount] = useState(0);
  let downloadedCount;
  downloadedCount = 0;

  // disable download button
  const [disableDownload, setDisableDownload] = useState(false);

  // error message
  const [ErrorMessage, setErrorMessage] = useState("");
  let errorMessage;

  const pdfDownloadSubmitHandler = async (event) => {
    event.preventDefault();

    // Downloads.create("http://localhost:5000/api/download/pdf/sample.pdf");

    // try {
    //   await sendRequest("http://localhost:5000/api/download/pdf/sample.pdf", 'GET');
    // } catch (err) {

    // }

    try {
      const res = await fetch(
        "http://localhost:5000/api/download/pdf/sample.pdf"
      );
      const blob = await res.blob();
      download(blob, "samplePdf.pdf");
      console.log(
        "1 pdf file was downloaded. download proceedure was successful"
      );
    } catch (err) {}

    const checkIsPdfDownloaded = (params) => {
      setIsPdfChecked(true);
      setIsPdfDownloaded(true);
      setErrorMessage(
        "you have downloaded 1 PDF file. Dont forget to register our news letter too"
      );
    };
    checkIsPdfDownloaded();

    const downloadedCounter = (params) => {
      downloadedCount += 1;
      setDownloadedCount((prev) => (prev += 1));
    };
    downloadedCounter();

    const limitDownloadTimeHandler = (params) => {
      if (DownloadedCount >= 3) {
        setDisableDownload(true);
        setErrorMessage(
          "You reached daily download limit!! Please try again it later..."
        );
      }
    };
    limitDownloadTimeHandler();
  };

  const zipDownloadSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/download/zip/sampleFolder.zip"
      );
      const blob = await res.blob();
      download(blob, "sampleFolder.zip");
      console.log(
        "1 zip file was downloaded. download proceedure was successful"
      );
    } catch (err) {}

    const checkIsZipDownloaded = (params) => {
      setIsZipChecked(true);
      setIsZipDownloaded(true);
      setErrorMessage(
        "you have downloaded 1 Zip file. Dont forget to register our news letter too"
      );
    };
    checkIsZipDownloaded();

    const downloadedCounter = (params) => {
      downloadedCount += 1;
      setDownloadedCount((prev) => (prev += 1));
    };
    downloadedCounter();

    const limitDownloadTimeHandler = (params) => {
      if (DownloadedCount >= 3) {
        setDisableDownload(true);
        setErrorMessage(
          "You reached daily download limit!! Please try again it later..."
        );
      }
    };
    limitDownloadTimeHandler();
  };

  const xlsxDownloadSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/download/xlsx/sample.xlsx"
      );
      const blob = await res.blob();
      download(blob, "sampleXlsx.xlsx");
      console.log(
        "1 excel file was downloaded. download proceedure was successful"
      );
    } catch (err) {}

    const checkIsXlsxDownloaded = (params) => {
      setIsXlsxChecked(true);
      setIsXlsxDownloaded(true);
      setErrorMessage(
        "you have downloaded 1 Xlsx file. Dont forget to register our news letter too"
      );
    };
    checkIsXlsxDownloaded();

    const downloadedCounter = (params) => {
      downloadedCount += 1;
      setDownloadedCount((prev) => (prev += 1));
    };
    downloadedCounter();

    const limitDownloadTimeHandler = (params) => {
      if (DownloadedCount >= 3) {
        setDisableDownload(true);
        setErrorMessage(
          "You reached daily download limit!! Please try again it later..."
        );
      }
    };
    limitDownloadTimeHandler();
  };

  const imageDownloadSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/download/images/sample.jpg"
      );
      const blob = await res.blob();
      download(blob, "sampleImage.jpg");
      console.log(
        "1 jpeg file was downloaded. download proceedure was successful"
      );
    } catch (err) {}

    const checkIsImageDownloaded = (params) => {
      setIsImageChecked(true);
      setIsImageDownloaded(true);
      setErrorMessage(
        "you have downloaded 1 Image file. Dont forget to register our news letter too"
      );
    };
    checkIsImageDownloaded();

    const downloadedCounter = (params) => {
      downloadedCount += 1;
      setDownloadedCount((prev) => (prev += 1));
    };
    downloadedCounter();

    const limitDownloadTimeHandler = (params) => {
      if (DownloadedCount >= 3) {
        setDisableDownload(true);
        setErrorMessage(
          "You reached daily download limit!! Please try again it later..."
        );
      }
    };
    limitDownloadTimeHandler();
  };

  const txtDownloadSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/download/txt/sample.txt"
      );
      const blob = await res.blob();
      download(blob, "sampleTxt.txt");
      console.log(
        "1 txt file was downloaded. download proceedure was successful"
      );
    } catch (err) {}

    const checkIsTxtDownloaded = (params) => {
      setIsTxtChecked(true);
      setIsTxtDownloaded(true);
      setErrorMessage(
        "you have downloaded 1 Txt file. Dont forget to register our news letter too"
      );
    };
    checkIsTxtDownloaded();

    const downloadedCounter = (params) => {
      downloadedCount += 1;
      setDownloadedCount((prev) => (prev += 1));
    };
    downloadedCounter();

    const limitDownloadTimeHandler = (params) => {
      if (DownloadedCount >= 3) {
        setDisableDownload(true);
        setErrorMessage(
          "You reached daily download limit!! Please try again it later..."
        );
      }
    };
    limitDownloadTimeHandler();
  };

  const mp4DownloadSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/download/mp4/sample-mp4-file.mp4"
      );
      const blob = await res.blob();
      download(blob, "sampleMp4.mp4");
      console.log(
        "1 mp4 file was downloaded. download proceedure was successful"
      );
    } catch (err) {}

    const checkIsMp4Downloaded = (params) => {
      setIsMp4Checked(true);
      setIsMp4Downloaded(true);
      setErrorMessage(
        "you have downloaded 1 Mp4 file. Dont forget to register our news letter too"
      );
    };
    checkIsMp4Downloaded();

    const downloadedCounter = (params) => {
      downloadedCount += 1;
      setDownloadedCount((prev) => (prev += 1));
    };
    downloadedCounter();

    const limitDownloadTimeHandler = (params) => {
      if (DownloadedCount >= 3) {
        setDisableDownload(true);
        setErrorMessage(
          "You reached daily download limit!! Please try again it later...your can download again at xh:xm:xs later"
        );
      }
    };
    limitDownloadTimeHandler();
  };

  const showPleaseLoginModalHandler = (params) => {};

  // const setLockOutTimer = (params) => {
  //   const lockedOutTime = new Date().getSeconds();
  //   const unlockTime = lockedOutTime + 60 * 60 * 24;

  //   const getCurrentTime = (params) => {
  //     const currentTime = new Date();
  //     if (unlockTime === currentTime) {
  //       setDownloadedCount(0);
  //       setDisableDownload(false);
  //     }
  //   }

  // }

  // const limitDownloadTimeHandler = (params) => {
  //   if (DownloadedCount > 3) {
  //     setDisableDownload(true);
  //     errorMessage = 'Daily download limit is 10 times! Please try again another day...';
  //   }
  // };
  // limitDownloadTimeHandler();

  // const downloadedCounter = (params) => {
  //   downloadedCount += 1;
  //   setDownloadedCount(prev => prev+=1);
  // }

  // const checkIsDownloaded = (params) => {
  //   setIsChecked(true);
  //   setIsDownloaded(true);
  // }

  return (
    <div className="download-container">
      <div className="download-main-section">
        <div className="download-link-lists">
          <ul className="download-link-items">
            <li className="download-link-item">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  checked={IsPdfChecked}
                ></input>
                PDF File
                <form>
                  <Button
                    onClick={pdfDownloadSubmitHandler}
                    disabled={disableDownload}
                  >
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
                {/* <Document file="https://storage.googleapis.com/sample_test_image_bucket/2020-06-10%20147.jpg">
                  <Page />
                </Document> */}
              </div>
            </li>
            <li className="download-link-item">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  checked={IsImageChecked}
                ></input>
                Image File
                <form>
                  <Button
                    onClick={imageDownloadSubmitHandler}
                    disabled={disableDownload}
                  >
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
                <img
                  src="https://storage.googleapis.com/sample_test_image_bucket/2020-06-10%20147.jpg"
                  className="image-preview"
                />
              </div>
            </li>
            <li className="download-link-item">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  checked={IsXlsxChecked}
                ></input>
                Excel File
                <form>
                  <Button
                    onClick={xlsxDownloadSubmitHandler}
                    disabled={disableDownload}
                  >
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
              </div>
            </li>
            <li className="download-link-item">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  checked={IsTxtChecked}
                ></input>
                Txt File
                <form>
                  <Button
                    onClick={txtDownloadSubmitHandler}
                    disabled={disableDownload}
                  >
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
                <a
                  href="https://storage.googleapis.com/sample_test_image_bucket/sampleTxt%20(10).txt"
                  target="_blank"
                >
                  Preview Txt file
                </a>
              </div>
            </li>
            <li className="download-link-item">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  checked={IsZipChecked}
                ></input>
                Zip File
                <form>
                  <Button
                    onClick={zipDownloadSubmitHandler}
                    disabled={disableDownload}
                  >
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
              </div>
            </li>
            <li className="download-link-item">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  checked={IsMp4Checked}
                ></input>
                Mp4 File
                <form>
                  <Button
                    onClick={mp4DownloadSubmitHandler}
                    disabled={disableDownload}
                  >
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
                <iframe
                  src="https://player.vimeo.com/video/439287536"
                  width="600"
                  height="400"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="download-side-section">
        {IsPdfDownloaded ? (
          <div>download check color graph: add green color; Donwloaded</div>
        ) : (
          <div>download check color graph : white; Not downloaded</div>
        )}

        <h3>you have downloaded this file : {DownloadedCount} times</h3>
        <h1>{ErrorMessage}</h1>
        <img src="https://storage.googleapis.com/sample_test_image_bucket/download-2.jpg" />
      </div>
    </div>
  );
};

export default Download;
