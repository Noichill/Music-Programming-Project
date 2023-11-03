// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCeZ8gWEsqF8hkMZbpdowp9gCLPGPHc40AXQYa0YT9KSUHJ1x9qGnBUpTggbBTe7FRxH7lV2tFlpfG1I6N59cjzIW_se5vWJkU8MHVKFGyGN780FXUIUL-UWQLUNwBFhgkJT9pK4Z8U0M1QfK6RuZYBRlp2TaAk6h5UoCAch_09dIDr7sKNYJboTdlp4j3vZz8nImskhFNfUS_nHCq5EmJfebs4ZEgVQBZWtFedTOnGeGe222XS2FYGAeVN54KmGpYrhGB6UgjROQ1Bdr_r';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);



const playlistId = '1hzlMlX4TozfdvwOn254bf';

<iframe
  title="Spotify Embed: Recommendation Playlist "
  src={`https://open.spotify.com/embed/playlist/1hzlMlX4TozfdvwOn254bf?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '360px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>