window.addEventListener("load", bindEvent);

function bindEvent() {
  const pizzaArr = [
    {
      wrapperType: "track",
      kind: "song",
      artistId: 41742672,
      collectionId: 263301268,
      trackId: 263301273,
      artistName: "This Bike Is a Pipe Bomb",
      collectionName: "Three Way Tie for a Fifth",
      trackName: "Jack Johnson",
      collectionCensoredName: "Three Way Tie for a Fifth",
      trackCensoredName: "Jack Johnson",
      artistViewUrl:
        "https://music.apple.com/us/artist/this-bike-is-a-pipe-bomb/41742672?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/jack-johnson/263301268?i=263301273&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/jack-johnson/263301268?i=263301273&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fd/bb/38/fdbb38d2-073d-4bc7-68c4-348a0be6d560/mzaf_4150435585996894188.plus.aac.p.m4a",
      artworkUrl30:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/f3/ee/b3/f3eeb3ff-ca32-273a-15aa-709bdfa64367/mzi.izwiyqez.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: "2004-06-15T12:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 11,
      trackNumber: 1,
      trackTimeMillis: 117573,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Alternative",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1502346977,
      trackId: 1063466898,
      artistName: "J.J. Abrams",
      collectionName: "Star Wars: The Skywalker Saga 9-Movie Collection",
      trackName: "Star Wars: The Force Awakens",
      collectionCensoredName:
        "Star Wars: The Skywalker Saga 9-Movie Collection",
      trackCensoredName: "Star Wars: The Force Awakens",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/star-wars-the-force-awakens/id1063466898?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/star-wars-the-force-awakens/id1063466898?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video82/v4/a3/ef/25/a3ef253a-208e-3cbc-cbf0-bc444dae2f8d/mzvf_6313901593442783545.640x354.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is4-ssl.mzstatic.com/image/thumb/Video123/v4/1f/2b/ae/1f2bae7f-62a1-1055-8471-401291b6dcdd/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Video123/v4/1f/2b/ae/1f2bae7f-62a1-1055-8471-401291b6dcdd/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Video123/v4/1f/2b/ae/1f2bae7f-62a1-1055-8471-401291b6dcdd/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 99.99,
      trackPrice: 19.99,
      releaseDate: "2015-12-18T08:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 9,
      trackNumber: 7,
      trackTimeMillis: 8302127,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1502173677,
      trackId: 1315255745,
      artistName: "Jake Kasdan",
      collectionName: "Jumanji Bienvenue Dans La Jungle + Jumanji Next Level",
      trackName: "Jumanji: Welcome to the Jungle",
      collectionCensoredName: "Jumanji: 2 Film Bundle",
      trackCensoredName: "Jumanji: Welcome to the Jungle",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/jumanji-welcome-to-the-jungle/id1315255745?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/jumanji-welcome-to-the-jungle/id1315255745?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/42/b9/a0/42b9a0b1-60e4-86c0-36b3-915522d45765/mzvf_172183937853883111.640x354.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is4-ssl.mzstatic.com/image/thumb/Video125/v4/21/0b/4a/210b4a1c-0de6-3a03-27a5-408948f7f173/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Video125/v4/21/0b/4a/210b4a1c-0de6-3a03-27a5-408948f7f173/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Video125/v4/21/0b/4a/210b4a1c-0de6-3a03-27a5-408948f7f173/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 6.99,
      trackPrice: 6.99,
      releaseDate: "2017-12-20T08:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 2,
      trackNumber: 1,
      trackTimeMillis: 7154612,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1694351847,
      trackId: 1688506685,
      artistName: "Joaquim Dos Santos, Kemp Powers & Justin K. Thompson",
      collectionName:
        "Spider-Man: Across The Spider-Verse + Spider-Man: Into The Spider-Verse 2-Movie Collection",
      trackName: "Spider-Man: Across the Spider-Verse",
      collectionCensoredName:
        "Spider-Man: Across The Spider-Verse/Spider-Man: Into The Spider-Verse: 2 Movie Collection",
      trackCensoredName: "Spider-Man: Across the Spider-Verse",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/spider-man-across-the-spider-verse/id1688506685?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/spider-man-across-the-spider-verse/id1688506685?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video126/v4/24/ca/41/24ca41ac-d116-30da-b0d4-6c02477b6094/mzvf_3996586131801090583.640x354.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/3c/02/1c/3c021c34-851d-bb7f-b426-d62683a4ac42/SPE_SPIDERMAN_ATS_TH_FINAL_ITUNES_WW_ARTWORK_EN_2000x3000_3TUF3R000066S7.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/3c/02/1c/3c021c34-851d-bb7f-b426-d62683a4ac42/SPE_SPIDERMAN_ATS_TH_FINAL_ITUNES_WW_ARTWORK_EN_2000x3000_3TUF3R000066S7.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/3c/02/1c/3c021c34-851d-bb7f-b426-d62683a4ac42/SPE_SPIDERMAN_ATS_TH_FINAL_ITUNES_WW_ARTWORK_EN_2000x3000_3TUF3R000066S7.lsr/100x100bb.jpg",
      releaseDate: "2023-06-02T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      trackCount: 2,
      trackNumber: 2,
      trackTimeMillis: 8486558,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 715937323,
      collectionId: 912454948,
      trackId: 912455046,
      artistName: "Sydney Rhame",
      collectionName: "Keep Dancing",
      trackName: "Jack Johnson",
      collectionCensoredName: "Keep Dancing",
      trackCensoredName: "Jack Johnson",
      artistViewUrl:
        "https://music.apple.com/us/artist/sydney-rhame/715937323?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/jack-johnson/912454948?i=912455046&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/jack-johnson/912454948?i=912455046&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/Music1/v4/53/5a/c9/535ac941-f60e-c959-9dd7-d868f6e06fd1/mzaf_333195531905150300.plus.aac.p.m4a",
      artworkUrl30:
        "https://is4-ssl.mzstatic.com/image/thumb/Music3/v4/13/60/53/1360536d-30c1-b71b-fac6-0b649b76b31c/859713193161_cover.tif/30x30bb.jpg",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Music3/v4/13/60/53/1360536d-30c1-b71b-fac6-0b649b76b31c/859713193161_cover.tif/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Music3/v4/13/60/53/1360536d-30c1-b71b-fac6-0b649b76b31c/859713193161_cover.tif/100x100bb.jpg",
      collectionPrice: 6.93,
      trackPrice: 0.99,
      releaseDate: "2014-09-07T12:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 7,
      trackNumber: 2,
      trackTimeMillis: 176250,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: false,
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1502173677,
      trackId: 1488964698,
      artistName: "Jake Kasdan",
      collectionName: "Jumanji Bienvenue Dans La Jungle + Jumanji Next Level",
      trackName: "Jumanji: The Next Level",
      collectionCensoredName:
        "Jumanji Bienvenue Dans La Jungle + Jumanji Next Level",
      trackCensoredName: "Jumanji: The Next Level",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/jumanji-the-next-level/id1488964698?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/jumanji-the-next-level/id1488964698?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video113/v4/10/c1/51/10c15162-a881-fdf5-149f-850147f526d0/mzvf_10451023053396014921.640x352.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Video114/v4/1d/50/26/1d502647-3349-738d-af07-f8714b9ffa8a/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Video114/v4/1d/50/26/1d502647-3349-738d-af07-f8714b9ffa8a/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Video114/v4/1d/50/26/1d502647-3349-738d-af07-f8714b9ffa8a/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 14.99,
      trackPrice: 14.99,
      releaseDate: "2019-12-13T08:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 2,
      trackNumber: 2,
      trackTimeMillis: 7399223,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      artistId: 276690802,
      collectionId: 1415264007,
      trackId: 280025690,
      artistName: "Dwayne Johnson",
      collectionName: "The Mummy Trilogy",
      trackName: "The Mummy Returns",
      collectionCensoredName: "The Mummy Trilogy",
      trackCensoredName: "The Mummy Returns",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/dwayne-johnson/276690802?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/the-mummy-returns/id280025690?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/the-mummy-returns/id280025690?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/7e/90/9b/7e909b85-fea4-6b49-3370-94a1d36eccd5/mzvf_4632590802118904539.640x480.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Video127/v4/6d/16/f6/6d16f613-6e62-fe75-5cd0-5bb21cb160ea/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Video127/v4/6d/16/f6/6d16f613-6e62-fe75-5cd0-5bb21cb160ea/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Video127/v4/6d/16/f6/6d16f613-6e62-fe75-5cd0-5bb21cb160ea/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 24.99,
      trackPrice: 14.99,
      releaseDate: "2001-05-04T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 3,
      trackNumber: 2,
      trackTimeMillis: 7773055,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 1156154288,
      collectionId: 1540774491,
      trackId: 1540774502,
      artistName: "Jaymie Silk",
      collectionName: "The Legend of Jack Johnson - EP",
      trackName: "Jack Johnson",
      collectionCensoredName: "The Legend of Jack Johnson - EP",
      trackCensoredName: "Jack Johnson (Byron The Aquarius Remix)",
      artistViewUrl:
        "https://music.apple.com/us/artist/jaymie-silk/1156154288?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/jack-johnson-byron-the-aquarius-remix/1540774491?i=1540774502&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/jack-johnson-byron-the-aquarius-remix/1540774491?i=1540774502&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/18/f6/7b/18f67b32-1886-f473-5d45-69685b438de5/mzaf_12181490365658246194.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/c3/2b/45/c32b4561-b944-1fce-ed06-713a60111993/5056467303876_cover.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/c3/2b/45/c32b4561-b944-1fce-ed06-713a60111993/5056467303876_cover.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/c3/2b/45/c32b4561-b944-1fce-ed06-713a60111993/5056467303876_cover.jpg/100x100bb.jpg",
      collectionPrice: 4.99,
      trackPrice: 1.29,
      releaseDate: "2020-12-04T12:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 5,
      trackNumber: 3,
      trackTimeMillis: 326667,
      country: "USA",
      currency: "USD",
      primaryGenreName: "House",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1638818403,
      trackId: 522395870,
      artistName: "Stanley Kubrick",
      collectionName: "Best of Horror 9-Film Collection",
      trackName: "The Shining",
      collectionCensoredName: "Stanley Kubrick 7-Film Collection",
      trackCensoredName: "The Shining",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/the-shining/id522395870?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/the-shining/id522395870?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video113/v4/b5/ba/9b/b5ba9b22-a729-6922-a5d7-5048995c714e/mzvf_16016633912569956430.640x480.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Video116/v4/a4/62/56/a462567b-ea67-5c70-e927-304085c2591b/e1d8850a-ae19-4a51-b36f-564a021036ea_SHINING_TravelLL_V_DD_KA_TT_2000x3000_EN.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Video116/v4/a4/62/56/a462567b-ea67-5c70-e927-304085c2591b/e1d8850a-ae19-4a51-b36f-564a021036ea_SHINING_TravelLL_V_DD_KA_TT_2000x3000_EN.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Video116/v4/a4/62/56/a462567b-ea67-5c70-e927-304085c2591b/e1d8850a-ae19-4a51-b36f-564a021036ea_SHINING_TravelLL_V_DD_KA_TT_2000x3000_EN.jpg/100x100bb.jpg",
      collectionPrice: 14.99,
      trackPrice: 14.99,
      releaseDate: "1980-05-23T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      trackCount: 9,
      trackNumber: 3,
      trackTimeMillis: 8626623,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Horror",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      artistId: 276690802,
      collectionId: 1405910311,
      trackId: 279758640,
      artistName: "Dwayne Johnson",
      collectionName: "Dwayne Johnson Action 3-Pack",
      trackName: "The Scorpion King",
      collectionCensoredName: "Dwayne Johnson Action 3-Pack",
      trackCensoredName: "The Scorpion King",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/dwayne-johnson/276690802?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/the-scorpion-king/id279758640?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/the-scorpion-king/id279758640?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/5d/1c/d1/5d1cd1e5-874b-b363-064c-a3ec42cd4bdd/mzvf_4602384430042742984.640x452.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is4-ssl.mzstatic.com/image/thumb/Video113/v4/26/d2/8b/26d28b48-25b1-952b-3d36-9ee5222e72c2/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Video113/v4/26/d2/8b/26d28b48-25b1-952b-3d36-9ee5222e72c2/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Video113/v4/26/d2/8b/26d28b48-25b1-952b-3d36-9ee5222e72c2/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 19.99,
      trackPrice: 14.99,
      releaseDate: "2002-04-19T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 3,
      trackNumber: 3,
      trackTimeMillis: 5484352,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      trackId: 1515512877,
      artistName: "Rod Lurie",
      trackName: "The Outpost",
      trackCensoredName: "The Outpost",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/the-outpost/id1515512877?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video114/v4/69/ca/73/69ca73d7-3609-2b13-473f-bb6fe26fa828/mzvf_10824856657231643563.640x460.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Video113/v4/35/c4/ca/35c4ca11-e7a4-6154-45b5-a9f3a53a1d08/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Video113/v4/35/c4/ca/35c4ca11-e7a4-6154-45b5-a9f3a53a1d08/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Video113/v4/35/c4/ca/35c4ca11-e7a4-6154-45b5-a9f3a53a1d08/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 14.99,
      trackPrice: 14.99,
      releaseDate: "2020-07-03T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      trackTimeMillis: 7393632,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1483657612,
      trackId: 1266109512,
      artistName: "Steven Soderbergh",
      collectionName: "Smart Comedies",
      trackName: "Logan Lucky",
      collectionCensoredName: "Smart Comedies",
      trackCensoredName: "Logan Lucky",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/logan-lucky/id1266109512?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/logan-lucky/id1266109512?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/80/8c/a2/808ca215-7268-e6b0-9480-b1def415154e/mzvf_8707233484467779285.640x354.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is4-ssl.mzstatic.com/image/thumb/Video118/v4/83/4d/33/834d33cb-d59b-6e64-672c-39df7cc160cd/contsched.flbahsrw.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Video118/v4/83/4d/33/834d33cb-d59b-6e64-672c-39df7cc160cd/contsched.flbahsrw.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Video118/v4/83/4d/33/834d33cb-d59b-6e64-672c-39df7cc160cd/contsched.flbahsrw.lsr/100x100bb.jpg",
      collectionPrice: 29.99,
      trackPrice: 14.99,
      releaseDate: "2017-08-18T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 5,
      trackNumber: 5,
      trackTimeMillis: 7143840,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1455689014,
      trackId: 872652035,
      artistName: "Wally Pfister",
      collectionName: "Transcendence / Her",
      trackName: "Transcendence (2014)",
      collectionCensoredName: "Transcendence / Her",
      trackCensoredName: "Transcendence (2014)",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/transcendence-2014/id872652035?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/transcendence-2014/id872652035?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/ed/c4/42/edc44224-6626-47ba-055c-04132a9e647a/mzvf_1713063716496264176.640x354.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Video60/v4/89/7b/8e/897b8e0f-8650-bee9-2e09-3aca65f0415e/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Video60/v4/89/7b/8e/897b8e0f-8650-bee9-2e09-3aca65f0415e/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Video60/v4/89/7b/8e/897b8e0f-8650-bee9-2e09-3aca65f0415e/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 17.98,
      trackPrice: 9.99,
      releaseDate: "2014-04-18T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 2,
      trackNumber: 1,
      trackTimeMillis: 7154655,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Sci-Fi & Fantasy",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1382477323,
      trackId: 1212655586,
      artistName: "Unknown",
      collectionName: "The Smurfs 3 Movie Collection",
      trackName: "Smurfs: The Lost Village",
      collectionCensoredName: "The Smurfs 3 Movie Collection",
      trackCensoredName: "Smurfs: The Lost Village",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/smurfs-the-lost-village/id1212655586?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/smurfs-the-lost-village/id1212655586?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/d4/b7/e4/d4b7e424-57c2-1673-e3a3-727b7bd338a8/mzvf_894817716214925515.640x456.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Video124/v4/ea/d3/8f/ead38f11-80ba-681c-13be-b5ff5e1df92a/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Video124/v4/ea/d3/8f/ead38f11-80ba-681c-13be-b5ff5e1df92a/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Video124/v4/ea/d3/8f/ead38f11-80ba-681c-13be-b5ff5e1df92a/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 12.99,
      trackPrice: 12.99,
      releaseDate: "2017-04-07T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 3,
      trackNumber: 3,
      trackTimeMillis: 5405357,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Sci-Fi & Fantasy",
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 2557445,
      collectionId: 1452716603,
      trackId: 1452716948,
      artistName: "The Tom Russell Band",
      collectionName: "Hurricane Season",
      trackName: "Jack Johnson",
      collectionCensoredName: "Hurricane Season",
      trackCensoredName: "Jack Johnson",
      artistViewUrl:
        "https://music.apple.com/us/artist/the-tom-russell-band/2557445?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/jack-johnson/1452716603?i=1452716948&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/jack-johnson/1452716603?i=1452716948&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4e/40/e5/4e40e52f-970e-dce5-2863-851669efeb3e/mzaf_12139356476211609615.plus.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/70/b6/bb/70b6bb65-bc03-ca79-15fd-11e9f70dfa2b/00888072081666.rgb.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/70/b6/bb/70b6bb65-bc03-ca79-15fd-11e9f70dfa2b/00888072081666.rgb.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/70/b6/bb/70b6bb65-bc03-ca79-15fd-11e9f70dfa2b/00888072081666.rgb.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "1991-01-01T12:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 10,
      trackNumber: 4,
      trackTimeMillis: 180707,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Alternative Folk",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      trackId: 1450546361,
      artistName: "Stephen Merchant",
      trackName: "Fighting With My Family",
      trackCensoredName: "Fighting With My Family",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/fighting-with-my-family/id1450546361?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video124/v4/34/2a/01/342a01b8-994d-cde8-215a-5a2b32da5448/mzvf_6573278904134096288.640x352.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Video123/v4/d3/b7/b0/d3b7b0d6-95f7-4fb1-9455-b23d4da4c5cf/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Video123/v4/d3/b7/b0/d3b7b0d6-95f7-4fb1-9455-b23d4da4c5cf/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Video123/v4/d3/b7/b0/d3b7b0d6-95f7-4fb1-9455-b23d4da4c5cf/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 14.99,
      trackPrice: 14.99,
      releaseDate: "2019-02-22T08:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      trackTimeMillis: 6483775,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Comedy",
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 909253,
      collectionId: 1469577723,
      trackId: 1469577741,
      artistName: "Jack Johnson",
      collectionName:
        "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
      trackName: "Upside Down",
      collectionCensoredName:
        "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
      trackCensoredName: "Upside Down",
      artistViewUrl:
        "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/upside-down/1469577723?i=1469577741&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/upside-down/1469577723?i=1469577741&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5e/5b/3d/5e5b3df4-deb5-da78-5d64-fe51d8404d5c/mzaf_13341178261601361485.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "2005-01-01T12:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 1,
      trackTimeMillis: 208643,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 161491485,
      collectionId: 1220166022,
      trackId: 1220166372,
      artistName: "Tom Russell & Barrence Whitfield",
      collectionName: "Hillbilly Voodoo",
      trackName: "Jack Johnson",
      collectionCensoredName: "Hillbilly Voodoo",
      trackCensoredName: "Jack Johnson",
      artistViewUrl:
        "https://music.apple.com/us/artist/tom-russell/161491485?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/jack-johnson/1220166022?i=1220166372&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/jack-johnson/1220166022?i=1220166372&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/97/46/73/97467334-6605-3062-fc58-1a904db5b4c0/mzaf_352894015234709180.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/fc/a0/5a/fca05ac3-29f2-5764-79c0-6f0aef3539c0/089353332921.png/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/fc/a0/5a/fca05ac3-29f2-5764-79c0-6f0aef3539c0/089353332921.png/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/fc/a0/5a/fca05ac3-29f2-5764-79c0-6f0aef3539c0/089353332921.png/100x100bb.jpg",
      collectionPrice: 19.99,
      trackPrice: 1.29,
      releaseDate: "2015-12-04T12:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 13,
      trackNumber: 3,
      trackTimeMillis: 215933,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Singer/Songwriter",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1451260465,
      trackId: 303821283,
      artistName: "Barry Levinson",
      collectionName: "Award Winners: Best Actor",
      trackName: "Rain Man",
      collectionCensoredName: "Award Winners: Best Actor",
      trackCensoredName: "Rain Man",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/rain-man/id303821283?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/rain-man/id303821283?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/8f/0c/3d/8f0c3ddb-8b5d-ca51-709d-a4c5445f3a86/mzvf_3658363766175086127.640x458.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Video116/v4/10/8e/f0/108ef033-873e-2fb4-42fe-7ef5afc6ea6a/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Video116/v4/10/8e/f0/108ef033-873e-2fb4-42fe-7ef5afc6ea6a/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Video116/v4/10/8e/f0/108ef033-873e-2fb4-42fe-7ef5afc6ea6a/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 34.99,
      trackPrice: 7.99,
      releaseDate: "1988-12-16T08:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 4,
      trackNumber: 3,
      trackTimeMillis: 8035693,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Drama",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      trackId: 1579524747,
      artistName: "Jaume Collet-Serra",
      trackName: "Jungle Cruise",
      trackCensoredName: "Jungle Cruise",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/jungle-cruise/id1579524747?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video125/v4/1f/9c/fc/1f9cfc42-0818-debe-1388-830135aa5a5e/mzvf_15751710839907030816.640x354.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/04/2f/3e/042f3e53-9d0b-060d-6eb5-e99d90496d2b/DIS_JUNGLE_ENV_WW_ARTWORK_EN_2000x3000_2VYBQU00000DM2-R1.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/04/2f/3e/042f3e53-9d0b-060d-6eb5-e99d90496d2b/DIS_JUNGLE_ENV_WW_ARTWORK_EN_2000x3000_2VYBQU00000DM2-R1.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/04/2f/3e/042f3e53-9d0b-060d-6eb5-e99d90496d2b/DIS_JUNGLE_ENV_WW_ARTWORK_EN_2000x3000_2VYBQU00000DM2-R1.lsr/100x100bb.jpg",
      collectionPrice: 19.99,
      trackPrice: 19.99,
      releaseDate: "2021-07-30T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      trackTimeMillis: 7652768,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1488666269,
      trackId: 645196574,
      artistName: "Albert Hughes & Allen Hughes",
      collectionName: "New Jack City / Menace II Society 2 Film Collection",
      trackName: "Menace II Society (Director's Cut)",
      collectionCensoredName:
        "New Jack City / Menace II Society 2 Film Collection",
      trackCensoredName: "Menace II Society (Director's Cut)",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/menace-ii-society-directors-cut/id645196574?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/menace-ii-society-directors-cut/id645196574?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video117/v4/c5/ce/93/c5ce9361-8bc5-af6d-0e71-77ca33e8a56a/mzvf_2234728596276047838.640x452.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Video2/v4/24/a1/48/24a14801-9b94-296d-6c17-da287fffe0da/MenaceIISociety_DC_1400x2100.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Video2/v4/24/a1/48/24a14801-9b94-296d-6c17-da287fffe0da/MenaceIISociety_DC_1400x2100.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Video2/v4/24/a1/48/24a14801-9b94-296d-6c17-da287fffe0da/MenaceIISociety_DC_1400x2100.jpg/100x100bb.jpg",
      collectionPrice: 14.99,
      trackPrice: 12.99,
      releaseDate: "2019-09-25T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 2,
      trackNumber: 2,
      trackTimeMillis: 5855695,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      collectionId: 1512618438,
      trackId: 271860957,
      artistName: "James L. Brooks",
      collectionName: "Must-Watch Award-Winning 5-Film Collection",
      trackName: "As Good As It Gets",
      collectionCensoredName: "Must-Watch Award-Winning 5-Film Collection",
      trackCensoredName: "As Good As It Gets",
      collectionViewUrl:
        "https://itunes.apple.com/us/movie/as-good-as-it-gets/id271860957?uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/as-good-as-it-gets/id271860957?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/fe/5c/e1/fe5ce190-5e3b-4d95-636a-1e241ddb6383/mzvf_2464839205232181025.640x376.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is4-ssl.mzstatic.com/image/thumb/Music/50/ab/5a/mzi.bwtvsejh.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Music/50/ab/5a/mzi.bwtvsejh.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Music/50/ab/5a/mzi.bwtvsejh.jpg/100x100bb.jpg",
      collectionPrice: 39.99,
      trackPrice: 12.99,
      releaseDate: "1997-12-23T08:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 5,
      trackNumber: 5,
      trackTimeMillis: 8318935,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Comedy",
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 909253,
      collectionId: 1440752312,
      trackId: 1440752676,
      artistName: "Jack Johnson, Dave Matthews & Tim Reynolds",
      collectionName:
        "Jack Johnson & Friends - Best of Kokua Festival (A Benefit for the Kokua Hawaii Foundation)",
      trackName: "A Pirate Looks At Forty",
      collectionCensoredName:
        "Jack Johnson & Friends - Best of Kokua Festival (A Benefit for the Kokua Hawaii Foundation)",
      trackCensoredName: "A Pirate Looks At Forty (Live)",
      artistViewUrl:
        "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/a-pirate-looks-at-forty-live/1440752312?i=1440752676&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/a-pirate-looks-at-forty-live/1440752312?i=1440752676&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b5/02/87/b5028765-61d5-6c3a-e0fe-c7ea0250b24d/mzaf_4955186130094718324.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/43/d0/ba/43d0ba6b-6470-ad2d-0c84-171c1daea838/12UMGIM10699.rgb.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/43/d0/ba/43d0ba6b-6470-ad2d-0c84-171c1daea838/12UMGIM10699.rgb.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/43/d0/ba/43d0ba6b-6470-ad2d-0c84-171c1daea838/12UMGIM10699.rgb.jpg/100x100bb.jpg",
      collectionPrice: 8.99,
      trackPrice: 1.29,
      releaseDate: "2012-01-01T12:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 3,
      trackTimeMillis: 232067,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true,
    },
    {
      wrapperType: "track",
      kind: "feature-movie",
      trackId: 1288858258,
      artistName: "S. Craig Zahler",
      trackName: "Brawl In Cell Block 99",
      trackCensoredName: "Brawl In Cell Block 99",
      trackViewUrl:
        "https://itunes.apple.com/us/movie/brawl-in-cell-block-99/id1288858258?uo=4",
      previewUrl:
        "https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/ff/b1/ce/ffb1cef0-f242-e67e-8728-2bb499721369/mzvf_6152102678793919243.640x460.h264lc.U.p.m4v",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/64/73/82/64738224-145a-e59f-8bbe-edf20f3c2b2e/pr_source.lsr/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/64/73/82/64738224-145a-e59f-8bbe-edf20f3c2b2e/pr_source.lsr/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/64/73/82/64738224-145a-e59f-8bbe-edf20f3c2b2e/pr_source.lsr/100x100bb.jpg",
      collectionPrice: 13.99,
      trackPrice: 13.99,
      releaseDate: "2017-10-06T07:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      trackTimeMillis: 7952415,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Action & Adventure",
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: 405728790,
      collectionId: 1383852254,
      trackId: 1383852262,
      artistName: "Jonas Blue",
      collectionName: "Rise (feat. Jack & Jack) - Single",
      trackName: "Rise (feat. Jack & Jack)",
      collectionCensoredName: "Rise (feat. Jack & Jack) - Single",
      trackCensoredName: "Rise (feat. Jack & Jack)",
      artistViewUrl:
        "https://music.apple.com/us/artist/jonas-blue/405728790?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/rise-feat-jack-jack/1383852254?i=1383852262&uo=4",
      trackViewUrl:
        "https://music.apple.com/us/album/rise-feat-jack-jack/1383852254?i=1383852262&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8c/3e/20/8c3e205e-e0ff-8a38-b4dc-9fc725dc8ebf/mzaf_18363487978021434770.plus.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/7f/98/67/7f986712-ff6a-6644-e77e-bc9b0bc14ee0/18UMGIM28012.rgb.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/7f/98/67/7f986712-ff6a-6644-e77e-bc9b0bc14ee0/18UMGIM28012.rgb.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/7f/98/67/7f986712-ff6a-6644-e77e-bc9b0bc14ee0/18UMGIM28012.rgb.jpg/100x100bb.jpg",
      collectionPrice: 1.29,
      trackPrice: 1.29,
      releaseDate: "2018-05-25T12:00:00.000Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 1,
      trackNumber: 1,
      trackTimeMillis: 194408,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Dance",
      isStreamable: true,
    },
  ];
  pizzaArr.map((track) => createCard(track));
}

let currentAudioPlayer = null; // To keep track of the currently playing audio player

function createCard(track) {
  const card = document.createElement("div");
  card.className = "card text-bg-dark m-1";
  card.style.width = "13rem";

  const cardImage = document.createElement("img");
  cardImage.className = "card-img";
  cardImage.src = track.artworkUrl100;
  cardImage.alt = track.trackName;

  const cardOverlay = document.createElement("div");
  cardOverlay.className = "card-img-overlay d-flex flex-column justify-content-end"; // Position at the bottom

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

  // Create an <audio> element for the song preview
  const audioPlayer = document.createElement("audio");
  audioPlayer.controls = true;
  audioPlayer.style.width = "100%"; // Set audio player width to 100% of card width
  const audioSource = document.createElement("source");
  audioSource.src = track.previewUrl;
  audioSource.type = "audio/mpeg";
  audioPlayer.appendChild(audioSource);

  // Create "Listen Now" button
  const listenButton = document.createElement("button");
  listenButton.className = "btn btn-primary btn-sm";
  listenButton.textContent = "Listen Now";

  // Event listener for the "Listen Now" button click
  listenButton.addEventListener("click", () => {
    if (currentAudioPlayer) {
      currentAudioPlayer.pause(); // Pause the currently playing audio player
    }
    
    // Replace the button with the audio player
    cardOverlay.removeChild(listenButton);
    card.appendChild(audioPlayer);
    currentAudioPlayer = audioPlayer; // Set the current audio player
    audioPlayer.play(); // Start playing the clicked song
  });

  cardOverlay.appendChild(listenButton); // Add the "Listen Now" button
  card.appendChild(cardOverlay);

  const cardContainerElement = document.getElementById("card-container");
  cardContainerElement.appendChild(card);
}

createCard();
