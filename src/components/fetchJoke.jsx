export async function fetchJoke(jokeKeyWord) {
  // here we await the result of the async operation of feching data from an api and when that data is available it's stored in the result variable
  const result = await fetch(
    `https://v2.jokeapi.dev/joke/Programming?safe-mode&contains=${jokeKeyWord}`
  )
    // https://v2.jokeapi.dev/joke/Misc,Programming?safe-mode&contains=hacky
    // Programming?type=single&contains=

    .then((response) => {
      // fetch only returns a rejected promise if there is a network error not if the data was not available from the api
      if (!response.ok) throw new Error("failed fething");

      return response.json();
    })
    .then((data) => {
      console.log("Raw JSON Response:", data);
      console.log("Processed JSON Data:", {
        joke: data.joke,
      });

      if (data.error) return "No jokes found. Please try another key word.";

      return data.joke;
    })
    .catch((error) => {
      console.error("Error fetching joke data:", error);
      return "Error fetching joke data. Please try another key word.";
      // throw error
    });

  //
  return result;
}
