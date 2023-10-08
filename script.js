// Select the <span> element inside the <h1> element
const spanEl = document.querySelector("h1 span");

// Define an array of career names to display, ending with the string "I am Michal Nalevanko"
const careers = [
  "a developer",
  "an analyst",
  "a freelancer",
  "a writer",
  "Michal Nalevanko",
];

// Initialize the inner text of the <span> element to an empty string
spanEl.innerText = "";

// Define two counters:
// 'index' to manage the individual characters of a word and
// 'careerIndex' to manage which word in the 'careers' array is currently being processed
let index = 0;
let careerIndex = 0;

// Function to hide the word character by character
const hideWord = () => {
  // Fetch the current word from the <span> element
  const currentWord = spanEl.innerText;

  // Check if there are characters left to hide
  if (index > 0) {
    index--; // Decrement the index
    // Update the <span> to display the word without its last character
    spanEl.innerText = currentWord.substring(0, index);
    // Schedule the next character to be removed after 200ms
    setTimeout(hideWord, 200);
  } else {
    // If all characters of the current word are hidden,
    // Check if there are more words left to display from the 'careers' array
    if (careerIndex < careers.length) {
      // Display the next word
      showWord(careers[careerIndex]);
      careerIndex++; // Move to the next word in the 'careers' array
    }
  }
};

// Function to display the word character by character
const showWord = (word) => {
  // Check if the full word is displayed
  if (index <= word.length) {
    // Update the <span> to show the word up to the current index
    spanEl.innerText = word.substring(0, index);
    index++; // Move to the next character
    // Schedule the next character to be displayed after 200ms
    setTimeout(() => {
      showWord(word);
    }, 200);
  } else {
    // If the displayed word is "Michal Nalevanko", don't hide it and end the animation
    if (word === "Michal Nalevanko") {
      return;
    }
    // Otherwise, once the full word is displayed, wait for 1 second and start hiding it
    setTimeout(hideWord, 1000);
  }
};

// Start the animation by displaying the first word in the 'careers' array
showWord(careers[careerIndex]);
careerIndex++; // Move to the next word in preparation for the next cycle
