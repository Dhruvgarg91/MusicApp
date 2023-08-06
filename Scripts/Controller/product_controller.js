import readAllProducts from "../Services/product_operations.js";

async function showProducts(searchQuery = "") {
  const products = await readAllProducts();

  if (searchQuery) {
    const filteredProducts = products.filter(
      (product) =>
        product.artistName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.trackName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    clearCards();
    if (filteredProducts.length === 0) {
      document.getElementById("no-results").style.display = "block";
    } else {
      document.getElementById("no-results").style.display = "none";
      filteredProducts.map((track) => createCard(track));
    }
  } else {
    clearCards();
    if (products.length === 0) {
      document.getElementById("no-results").style.display = "block";
    } else {
      document.getElementById("no-results").style.display = "none";
      products.map((track) => createCard(track));
    }
  }
}

function clearCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
}

function createFullscreenCard(track) {
  const fullscreenCard = document.createElement("div");
  fullscreenCard.className =
    "fullscreen-card d-flex flex-column justify-content-center align-items-center";
  fullscreenCard.style.position = "fixed";
  fullscreenCard.style.top = "0";
  fullscreenCard.style.left = "0";
  fullscreenCard.style.width = "100%";
  fullscreenCard.style.height = "100%";
  fullscreenCard.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  fullscreenCard.style.zIndex = "1000";

  const card = document.createElement("div");
  card.className = "card text-light";
  card.style.width = "300px";

  const cardImage = document.createElement("img");
  cardImage.className = "card-img-top";
  cardImage.src = track.artworkUrl100;
  cardImage.alt = track.trackName;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex flex-column justify-content-between";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title text-dark";
  cardTitle.textContent = track.trackName;

  const cardArtist = document.createElement("p");
  cardArtist.className = "card-text text-dark";
  cardArtist.textContent = track.artistName;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardArtist);

  const audioPlayer = document.createElement("audio");
  audioPlayer.controls = true;
  audioPlayer.style.width = "100%";
  const audioSource = document.createElement("source");
  audioSource.src = track.previewUrl;
  audioSource.type = "audio/mpeg";
  audioPlayer.appendChild(audioSource);

  card.appendChild(cardImage);
  card.appendChild(cardBody);
  card.appendChild(audioPlayer);

  fullscreenCard.appendChild(card);

  const closeButton = document.createElement("button");
  closeButton.className = "btn btn-secondary mt-3";
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    document.body.removeChild(fullscreenCard);
    if (!audioPlayer.paused) {
      audioPlayer.pause();
    }
  });

  card.appendChild(closeButton);

  document.body.appendChild(fullscreenCard);
}

function createCard(track) {
  const card = document.createElement("div");
  card.className = "card text-bg-dark m-1";
  card.style.width = "13rem";

  const cardImage = document.createElement("img");
  cardImage.className = "card-img";
  cardImage.src = track.artworkUrl100;
  cardImage.alt = track.trackName;

  const cardOverlay = document.createElement("div");
  cardOverlay.className =
    "card-img-overlay d-flex flex-column justify-content-end";

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = track.trackName;

  const cardArtist = document.createElement("p");
  cardArtist.className = "card-text";
  cardArtist.textContent = track.artistName;

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardArtist);

  cardOverlay.appendChild(cardContent);
  card.appendChild(cardImage);

  const listenButton = document.createElement("button");
  listenButton.className = "btn btn-primary btn-sm";
  listenButton.textContent = "Listen Now";

  listenButton.addEventListener("click", () => {
    createFullscreenCard(track);
  });

  cardOverlay.appendChild(listenButton);
  card.appendChild(cardOverlay);

  const cardContainerElement = document.getElementById("card-container");
  cardContainerElement.appendChild(card);
}
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input").value;
    showProducts(searchInput);
  });

  showProducts();
});
