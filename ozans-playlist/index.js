export function removeDuplicates(playlist) {
  const newPlaylist = new Set(playlist);
  return Array.from(newPlaylist);
}

export function hasTrack(playlist, track) {
  const newPlaylist = new Set(playlist);
  return newPlaylist.has(track);
}

export function addTrack(playlist, track) {
  const newPlaylist = new Set(playlist);
  newPlaylist.add(track);
  return Array.from(newPlaylist);
}

export function deleteTrack(playlist, track) {
  const newPlaylist = new Set(playlist);
  newPlaylist.delete(track);
  return Array.from(newPlaylist);
}

export function listArtists(playlist) {
  const artists = new Set();
  playlist.forEach((track)=> {
    const artist = track.split(" - ")[1];
    artists.add(artist);
  });
  return Array.from(artists);
}