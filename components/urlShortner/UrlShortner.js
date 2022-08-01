import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  ShortenerContainer,
  ShortnerButton,
  FormContainer,
  UrlInput,
  OrignalUrl,
  ShortedUrl,
  ShortnerCard,
  ShortedUrlContainer,
  CopyButton,
} from "./ShortnerElement";

const UrlShortner = () => {
  const [loading, setLoading] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrlData, setShortUrlData] = useState([]);
  function urlValidator(url) {
    return /^(http|https):\/\/[^ "]+$/.test(url);
  }

  const handleCopy = ({ target }, full_short_link) => {
    navigator.clipboard.writeText(full_short_link);
    if (target.innerText == "Copy") {
      target.style.backgroundColor = "#3a3053";
      target.innerText = "Copied!";
    }
  };
  const ShortenHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!urlValidator(longUrl)) {
        alert("Please enter a valid url.");
        return false;
      }
      const response = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${longUrl}`
      );
      if (response.status === 201) {
        let result = response?.data?.result;
        setShortUrlData((prev) => {
          return [result, ...prev];
        });
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
    setLongUrl("");
    setLoading(false);
  };

  return (
    <>
      <ShortenerContainer>
        <FormContainer onSubmit={ShortenHandler}>
          <UrlInput
            type="text"
            placeholder="Shorten a link here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <ShortnerButton type="submit">
            {loading ? "Shortening...." : "Shorten It!"}
          </ShortnerButton>
        </FormContainer>

        {shortUrlData &&
          shortUrlData?.map(({ original_link, full_short_link }) => (
            <ShortnerCard key={uuidv4()}>
              <OrignalUrl>{original_link}</OrignalUrl>
              <ShortedUrlContainer>
                <ShortedUrl>{full_short_link}</ShortedUrl>
                <CopyButton
                  onClick={(e) => {
                    handleCopy(e, full_short_link);
                  }}
                >
                  Copy
                </CopyButton>
              </ShortedUrlContainer>
            </ShortnerCard>
          ))}
      </ShortenerContainer>
    </>
  );
};

export default UrlShortner;
