export default async function doNetworkCall() {
  const URL =
    "https://gist.githubusercontent.com/Dhruvgarg91/be210cc5f39cfbb51dfca5a6be59d998/raw/0945b7f8182e6a143dd13753442786855c3addec/music.json";
  try {
    const response = await fetch(URL);
    const object = await response.json();
    console.log("Object is ", object);
    return object;
  } catch (err) {
    throw err;
  }
}
