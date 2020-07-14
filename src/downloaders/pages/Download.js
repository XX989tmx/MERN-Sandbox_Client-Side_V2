import React from "react";
import Button from "../../shared/components/FormElements/Button";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./Download.css";
import { BrowserRouter } from "react-router-dom";
import download from 'downloadjs';



const Download = (params) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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
      download(blob, 'samplePdf.pdf');
      console.log("1 pdf file was downloaded. download proceedure was successful");
    } catch (err) {
      
    }

    
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
  };

  const xlsxDownloadSubmitHandler = async(event) => {
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

  return (
    <div className="download-container">
      <div className="download-main-section">
        <div className="download-link-lists">
          <ul className="download-link-items">
            <li className="download-link-item">
              <div>
                PDF File
                <form>
                  <Button onClick={pdfDownloadSubmitHandler}>
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
              </div>
            </li>
            <li className="download-link-item">
              <div>
                Image File
                <form>
                  <Button onClick={imageDownloadSubmitHandler}>
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
              </div>
            </li>
            <li className="download-link-item">
              <div>
                Excel File
                <form>
                  <Button onClick={xlsxDownloadSubmitHandler}>
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
              </div>
            </li>
            <li className="download-link-item">
              <div>
                Txt File
                <form>
                  <Button onClick={txtDownloadSubmitHandler}>
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
              </div>
            </li>
            <li className="download-link-item">
              <div>
                Zip File
                <form>
                  <Button onClick={zipDownloadSubmitHandler}>
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
              </div>
            </li>
            <li className="download-link-item">
              <div>
                Mp4 File
                <form>
                  <Button onClick={mp4DownloadSubmitHandler}>
                    DOWNLOAD RESOURCE
                  </Button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="download-side-section"></div>
    </div>
  );
};

export default Download;
