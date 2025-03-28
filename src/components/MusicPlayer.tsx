// import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
// import { searchYouTube, getTrendingSongs } from "../api/Songyoutube";

// const MusicPlayer = () => {
//   const [songs, setSongs] = useState<any[]>([]);
//   const [query, setQuery] = useState("");
//   const [currentVideo, setCurrentVideo] = useState<string | null>(null);

//   // Fetch trending songs when component loads
//   useEffect(() => {
//     const fetchTrending = async () => {
//       const trendingSongs = await getTrendingSongs();
//       setSongs(trendingSongs);
//     };
//     fetchTrending();
//   }, []);

//   const handleSearch = async () => {
//     const results = await searchYouTube(query, 30); // Fetch 30 songs
//     setSongs(results);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-3xl font-bold text-center mb-4">🎵 Music Player 🎵</h2>
      
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search for a song..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="border border-gray-300 rounded-l-lg p-2 w-1/2"
//         />
//         <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
//           Search
//         </button>
//       </div>

//       <h3 className="text-2xl font-semibold mb-4">
//         {query ? "Search Results" : "Trending Songs"}
//       </h3>

//       {/* Songs Grid */}
//       <div className="grid grid-cols-4 gap-4">
//         {songs.map((song) => (
//           <div
//             key={song.id.videoId}
//             className="border border-gray-300 rounded-lg p-3 text-center cursor-pointer hover:shadow-lg transition duration-300"
//             onClick={() => setCurrentVideo(song.id.videoId)}
//           >
//             <img
//               src={song.snippet.thumbnails.medium.url}
//               alt={song.snippet.title}
//               className="w-full rounded-md mb-2"
//             />
//             <p className="text-sm font-semibold">{song.snippet.title}</p>
//             <button className="bg-green-500 text-white px-3 py-1 mt-2 rounded-md">
//               Play
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* React Player for YouTube */}
//       {currentVideo && (
//         <div className="mt-6">
//           <h3 className="text-xl font-semibold">Now Playing:</h3>
//           <ReactPlayer
//             url={`https://www.youtube.com/watch?v=${currentVideo}`}
//             controls
//             playing
//             width="100%"
//             height="400px"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MusicPlayer;
