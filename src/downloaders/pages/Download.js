import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./Download.css";
import { BrowserRouter } from "react-router-dom";
import download from "downloadjs";

const Download = (params) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // downloaded or not
  const [IsDownloaded, setIsDownloaded] = useState(false);
  const [IsPdfDownloaded, setIsPdfDownloaded] = useState(false);
  const [IsImageDownloaded, setIsImageDownloaded] = useState(false);
  const [IsTxtDownloaded, setIsTxtDownloaded] = useState(false);
  const [IsZipDownloaded, setIsZipDownloaded] = useState(false);
  const [IsMp4Downloaded, setIsMp4Downloaded] = useState(false);

  // checkbox
  const [IsChecked, setIsChecked] = useState(false);
  const [IsPdfChecked, setIsPdfChecked] = useState(false);
  const [IsImageChecked, setIsImageChecked] = useState(false);
  const [IsTxtChecked, setIsTxtChecked] = useState(false);
  const [IsZipChecked, setIsZipChecked] = useState(false);
  const [IsMp4Checked, setMp4IsChecked] = useState(false);

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
  };

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
              </div>
            </li>
            <li className="download-link-item">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  checked={IsChecked}
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
              </div>
            </li>
            <li className="download-link-item">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  checked={IsChecked}
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
                  checked={IsChecked}
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
                  checked={IsChecked}
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
      </div>
    </div>
  );
};

export default Download;
