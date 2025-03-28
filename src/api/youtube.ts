const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export const searchYouTube = async (query: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}?part=snippet&type=video&q=${query}&maxResults=5&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("YouTube API Error:", error);
    return [];
  }
};
