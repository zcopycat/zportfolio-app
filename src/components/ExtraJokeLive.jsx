import * as React from "react";
import { fetchJoke } from "./fetchJoke";
import { useDebounce } from "use-debounce";

const ExtraJokeLive = () => {
  // here we are storing the user input as React State but this state changes rapidly with every user's keystroke
  const [userInput, setUserInput] = React.useState("");

  // here we are storing the joke that comes back from the api and is set via the useEffect hook
  const [joke, setJoke] = React.useState("");

  // here we are debouncing the result so we don't send loads of API
  // requests every time the user presses a key and we only send a request
  // when the user has finished typing and 600 milliseconds have passed

  const [debouncedUserInput] = useDebounce(userInput, 600);

  console.log("state", userInput);
  console.log("debounced", debouncedUserInput);

  React.useEffect(() => {
    // This is an IIFE or Immediately invoked function expression which lets you use an async function inside a React useEffect hook
    // https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    (async () => {
      // here we first check if there is a user input, if there isn't we return a basic joke
      if (!userInput || userInput === "") {
        const joke = await fetchJoke("hacky");
        setJoke(joke);
        // if that's the case we return the function and the useEffect ends here
        return;
      }
      //  if there is a user input, then we use the debounced version of it so
      // we don't call the api hundreds of times, and we set the state of joke to what the api returned
      if (userInput) {
        const joke = await fetchJoke(debouncedUserInput);
        setJoke(joke);
      }
    })();
  }, [debouncedUserInput]);
  // we have to put debouncedUserInput into the useEffect dependency array so that useEffect knows it needs to
  //   run again every time that value changes
  // WARNING:
  // React Hook React.useEffect has a missing dependency: 'userInput'.
  // Either include it or remove the dependency array  react-hooks/exhaustive-deps

  return (
    <div>
      <input
        type="text"
        //add controlled component (a React controlled component pattern, tied to the useInput state)
        value={userInput}
        onChange={(event) => {
          // the stadard event object given as an argument to the onchange callback function
          // gives us a target property (which is equivalent to the input element)
          // and that target property has a value, which is the value currently sitting in the input box
          // we use that value to set the state we called userInput
          setUserInput(event.target.value);
        }}
        placeholder="Type your keyword for a joke"
        className="joke-input"
      />
      <p>{joke}</p>
    </div>
  );
};

export default ExtraJokeLive;
