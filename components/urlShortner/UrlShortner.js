import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ShortenerContainer,
  ShortnerButton,
  FormContainer,
  UrlInput,
  UrlShortnerInputUrl,
  UrlShortnerIUrl,
  UrlShortnerOUrl,
  ShortnerCard,
  UrlShortnerOutputUrl,
  CopyButton,
} from "./ShortnerElement";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = useState("");

  const [shortUrlData, setShortUrlData] = useState([]);

  const [links, setLinks] = useState(false);
  function urlValidator(url) {
    return /^(http|https):\/\/[^ "]+$/.test(url);
  }

  const ShortenHandler = async (e) => {
    e.preventDefault();
    try {
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
          <ShortnerButton type="submit">Shorten It!</ShortnerButton>
        </FormContainer>
        {shortUrlData && (
          <>
            {shortUrlData?.map((item, id) => (
              <>
                <ShortnerCard key={id}>
                  <UrlShortnerInputUrl>
                    <UrlShortnerIUrl>{item.original_link}</UrlShortnerIUrl>
                  </UrlShortnerInputUrl>
                  <UrlShortnerOutputUrl>
                    <UrlShortnerOUrl id="copyShort">
                      {item.full_short_link}
                    </UrlShortnerOUrl>
                    <CopyButton
                      links={links}
                      onClick={() =>
                        navigator.clipboard.writeText(item.full_short_link) &&
                        setLinks(!links)
                      }
                    >
                      {links ? "Copied!" : "Copy"}
                    </CopyButton>
                  </UrlShortnerOutputUrl>
                </ShortnerCard>
              </>
            ))}
          </>
        )}
      </ShortenerContainer>
    </>
  );
};

export default UrlShortner;
