import React, { useEffect, useState } from 'react';

const SpotifyRecentlyPlayed = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      const apiUrl =
        'https://v1.nocodeapi.com/praveen123456789/spotify/JoUvwWWzTTXwMcrA/recentlyPlayed?limit=15&after=5&before=7';

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyPlayed();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Spotify Recently Played</h1>
      {data && data.items ? (
        <ul>
          {data.items.map((track, index) => (
            <li key={index}>
              <strong>{track.track.name}</strong> by {track.track.artists.map(artist => artist.name).join(', ')}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recently played tracks available.</p>
      )}
    </div>
  );
};

export default SpotifyRecentlyPlayed;

