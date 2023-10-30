import axios from "axios";

export const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com/video";

const options = {
  method: "GET",
  url: "https://youtube-v3-alternative.p.rapidapi.com/video",
  params: { id: "dQw4w9WgXcQ" },
  headers: {
    "X-RapidAPI-Key": "8c7e3bf862mshd519ac7b93a3919p1da51cjsn0c11d19fea9f",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
