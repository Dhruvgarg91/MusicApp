export default async function doNetworkCall() {
  const URL =
    "https://gist.githubusercontent.com/Dhruvgarg91/be210cc5f39cfbb51dfca5a6be59d998/raw/c01cdc7b09c431c00b683608e3bc470aaac2210d/music.json";
  try {
    const response = await fetch(URL);
    const object = await response.json();
    console.log("Object is ", object);
    return object;
  } catch (err) {
    throw err;
  }
}
