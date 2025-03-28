import React, { useState } from "react";
import ReactPlayer from "react-player";
import { searchYouTube } from "../api/youtube";

const MusicPlayer = () => {
  const [songs, setSongs] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const handleSearch = async () => {
    const results = await searchYouTube(query);
    setSongs(results);
  };

  return (
    <div>
      <h2>🎵 Music Player 🎵</h2>
      <input
        type="text"
        placeholder="Search for a song..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {songs.map((song) => (
          <li key={song.id.videoId}>
            <span>{song.snippet.title}</span>
            <button onClick={() => setCurrentVideo(song.id.videoId)}>Play</button>
          </li>
        ))}
      </ul>

      {/* React Player for YouTube */}
      {currentVideo && (
        <div>
          <h3>Now Playing:</h3>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${currentVideo}`}
            controls
            playing
            width="100%"
            height="400px"
          />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
