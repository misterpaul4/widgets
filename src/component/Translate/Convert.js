import React, {useEffect} from "react";
import axios from "axios";

const Convert = ({
  searchTerm,
  language,
  updateTranslation
}) => {
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.post('https://translation.googleapis.com/language/translate/v2',
      {},
      {params: {
        q: searchTerm,
        target: language,
        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
      }});

      updateTranslation(response.data.data.translations[0].translatedText);
    };

    const delayID = setTimeout(() => fetchAPI(), 800);

    return () => clearTimeout(delayID);

  }, [searchTerm, updateTranslation, language]);

  return (
    <></>
  );
};

export default Convert;
