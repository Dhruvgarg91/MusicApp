import MusicTrack from "../models/model.js/";
import doNetworkCall from "./api-client.js";

export default async function readAllProducts() {
  try {
    const obj = await doNetworkCall();
    const music = obj["results"];
    const musicArray = music.map((musicData) => {
      const musicTrack = new MusicTrack({
        wrapperType: musicData.wrapperType,
        kind: musicData.kind,
        artistId: musicData.artistId,
        collectionId: musicData.collectionId,
        trackId: musicData.trackId,
        artistName: musicData.artistName,
        collectionName: musicData.collectionName,
        trackName: musicData.trackName,
        collectionCensoredName: musicData.collectionCensoredName,
        trackCensoredName: musicData.trackCensoredName,
        artistViewUrl: musicData.artistViewUrl,
        collectionViewUrl: musicData.collectionViewUrl,
        trackViewUrl: musicData.trackViewUrl,
        previewUrl: musicData.previewUrl,
        artworkUrl30: musicData.artworkUrl30,
        artworkUrl60: musicData.artworkUrl60,
        artworkUrl100: musicData.artworkUrl100,
        collectionPrice: musicData.collectionPrice,
        trackPrice: musicData.trackPrice,
        releaseDate: musicData.releaseDate,
        collectionExplicitness: musicData.collectionExplicitness,
        trackExplicitness: musicData.trackExplicitness,
        discCount: musicData.discCount,
        discNumber: musicData.discNumber,
        trackCount: musicData.trackCount,
        trackNumber: musicData.trackNumber,
        trackTimeMillis: musicData.trackTimeMillis,
        country: musicData.country,
        currency: musicData.currency,
        primaryGenreName: musicData.primaryGenreName,
        isStreamable: musicData.isStreamable,
      });
      return musicTrack;
    });
    return musicArray;
  } catch (err) {
    throw err;
  }
}
