import { removeDuplicates, hasTrack, addTrack, listArtists } from './ozans-playlist/index.js';



const playlist = [
  'All Mine - Portishead',
  'Sight to Behold - Devendra Banhart',
  'Sour Times - Portishead',
];

log(
  listArtists(playlist)
)

function log(callback){
  console.log(callback);
}