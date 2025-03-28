const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// Default trending songs
export const getTrendingSongs = async () => {
  return searchYouTube("Music 2015", 10); // Get 30 results
};

// Custom search songs
export const searchYouTube = async (query: string, maxResults: number = 30) => {
  try {
    const response = await fetch(
      `${BASE_URL}?part=snippet&type=video&q=${query}&maxResults=${maxResults}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("YouTube API Error:", error);
    return [];
  }
};
