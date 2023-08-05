import MusicTrack from "../Models/model.js";
import doNetworkCall from "./api-client.js";

export default async function readAllProducts() {
  try {
    const obj = await doNetworkCall();
    const music = obj["results"];
    const musicArray = music.map((musicData) => {
      const musicTrack = new MusicTrack({
        artistName: musicData.artistName,
        trackName: musicData.trackName,
        previewUrl: musicData.previewUrl,
        artworkUrl100: musicData.artworkUrl100,
      });
      return musicTrack;
    });
    return musicArray;
  } catch (err) {
    throw err;
  }
}
