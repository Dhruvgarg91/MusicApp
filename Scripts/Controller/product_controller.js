async function showProducts() {
  const musicTracks = await readAllProducts();
  console.log("Controller received music tracks:", musicTracks);
  musicTracks.map((track) => createCard(track));
}

function createCard(track) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card m-1";
  cardContainer.style.width = "13rem";

  const cardImage = document.createElement("img");
  cardImage.className = "card-img-top";
  cardImage.src = track.artworkUrl100;
  cardImage.alt = track.trackName;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = track.trackName;

  const cardArtist = document.createElement("p");
  cardArtist.className = "card-text";
  cardArtist.textContent = track.artistName;

  const link = document.createElement("a");
  link.className = "btn btn-primary";
  link.textContent = `Listen`;
  link.href = track.previewUrl; // Use the appropriate property from your MusicTrack model
  link.target = "_blank";

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardArtist);
  cardBody.appendChild(link);

  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardBody);

  const cardContainerElement = document.getElementById("card-container");
  cardContainerElement.appendChild(cardContainer);
}

showProducts();
