// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
// const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// export const getNaats = async (query: string = "Naat Sharif", maxResults: number = 20, channelId?: string) => {
//   try {
//     let url = `${BASE_URL}?part=snippet&type=video&q=${query}&maxResults=${maxResults}&key=${API_KEY}`;

//     if (channelId) {
//       url += `&channelId=${channelId}`; // ✅ اگر کسی خاص نعت خواں کا چینل ہو
//     }

//     const response = await fetch(url);
//     const data = await response.json();

//     console.log("Naat API Response:", data); // ✅ Debugging
//     return data.items;
//   } catch (error) {
//     console.error("YouTube API Error:", error);
//     return [];
//   }
// };
