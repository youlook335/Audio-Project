// import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player";
// import { getNaats } from "../api/Natyoutube";

// const NaatPlayer = () => {
//   const [naats, setNaats] = useState<any[]>([]);
//   const [query, setQuery] = useState(""); // 🔍 Search Query
//   const [currentVideo, setCurrentVideo] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchNaats = async () => {
//       const naatData = await getNaats();
//       setNaats(naatData);
//     };
//     fetchNaats();
//   }, []);

//   // 🔍 Search Function
//   const handleSearch = async () => {
//     if (!query.trim()) return; // اگر Query Empty ہو تو کچھ نہ کرو
//     const searchResults = await getNaats(query, 20);
//     setNaats(searchResults);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-3xl font-bold text-center mb-4">📿 Naat Sharif Player 📿</h2>

//       {/* 🔍 Search Bar */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search for a Naat..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="border border-gray-300 rounded-l-lg p-2 w-1/2 text-black"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
//         >
//           Search
//         </button>
//       </div>

//       <h3 className="text-2xl font-semibold mb-4">
//         {query ? "Search Results" : "Trending Naats"}
//       </h3>

//       {/* 🎵 Naats Grid */}
//       <div className="grid grid-cols-4 gap-4">
//         {naats.map((naat) => (
//           <div
//             key={naat.id.videoId}
//             className="border border-gray-300 rounded-lg p-3 text-center cursor-pointer hover:shadow-lg transition duration-300"
//             onClick={() => setCurrentVideo(naat.id.videoId)}
//           >
//             <img
//               src={naat.snippet.thumbnails.medium.url}
//               alt={naat.snippet.title}
//               className="w-full rounded-md mb-2"
//             />
//             <p className="text-sm font-semibold">{naat.snippet.title}</p>
//             <button className="bg-green-500 text-white px-3 py-1 mt-2 rounded-md">
//               Play
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* 🎬 React Player for YouTube */}
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

// export default NaatPlayer;
