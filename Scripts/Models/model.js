class MusicTrack {
  constructor(data) {
      this.wrapperType = data.wrapperType;
      this.kind = data.kind;
      this.artistId = data.artistId;
      this.collectionId = data.collectionId;
      this.trackId = data.trackId;
      this.artistName = data.artistName;
      this.collectionName = data.collectionName;
      this.trackName = data.trackName;
      this.collectionCensoredName = data.collectionCensoredName;
      this.trackCensoredName = data.trackCensoredName;
      this.artistViewUrl = data.artistViewUrl;
      this.collectionViewUrl = data.collectionViewUrl;
      this.trackViewUrl = data.trackViewUrl;
      this.previewUrl = data.previewUrl;
      this.artworkUrl30 = data.artworkUrl30;
      this.artworkUrl60 = data.artworkUrl60;
      this.artworkUrl100 = data.artworkUrl100;
      this.collectionPrice = data.collectionPrice;
      this.trackPrice = data.trackPrice;
      this.releaseDate = new Date(data.releaseDate);
      this.collectionExplicitness = data.collectionExplicitness;
      this.trackExplicitness = data.trackExplicitness;
      this.discCount = data.discCount;
      this.discNumber = data.discNumber;
      this.trackCount = data.trackCount;
      this.trackNumber = data.trackNumber;
      this.trackTimeMillis = data.trackTimeMillis;
      this.country = data.country;
      this.currency = data.currency;
      this.primaryGenreName = data.primaryGenreName;
      this.isStreamable = data.isStreamable;
  }
}
