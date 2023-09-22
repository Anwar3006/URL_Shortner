import React, { useState } from "react";
import axiosInstance from "../myAxios";

const Home = () => {
  const [link, updateLink] = useState("");
  const [shortURL, updateShortURL] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const handleChange = (event) => {
    updateLink({
      link,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance.post("create", { url: link.url }).then((response) => {
      updateShortURL(response.data.url);
    });
  };

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied To clipBoard");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <>
      <section className="home-wrapper py-4">
        <div className="container-xxl">
          <div className="row d-flex justify-content-center">
            <div className="main-card">
              <div className="card-title">
                <h2>URL Shortner</h2>
              </div>
              <div className="card-form">
                <div className="url-form mt-5">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="url"
                      placeholder="Paste URL"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="button mt-2 mb-2"
                      onClick={handleSubmit}
                    >
                      Shorten
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-response">
                {shortURL && <hr />}
                {shortURL && (
                  <div className="url-response text-center fs-3 mt-3 mb-2">
                    {shortURL}
                  </div>
                )}
                <div className="text-center">
                  {shortURL && (
                    <button
                      type="submit"
                      className="button mb-2"
                      onClick={() => copyToClipBoard(shortURL)}
                    >
                      Copy URL
                    </button>
                  )}
                  {copySuccess && (
                    <div className="alert alert-success mt-4" role="alert">
                      {copySuccess}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
