import axios from "axios"
export const baseUrl = "https://beer-live.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "beer-live.p.rapidapi.com",
      "x-rapidapi-key": "<API_KEY>",
    },
  })
  return data
}
