
// STEP 1: Declare and initialize variables
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

// STEP 3: Create the variable that contains string
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// STEP 4: Create three arrays, insertX, insertY, and insertZ
var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// FUNCTIONS

// STEP 2: Function to return a random value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// STEP 6: Function to generate the result
function result() {
    // STEP 7: Create a new variable called newStory
    var newStory = storyText;

    // STEP 8: Generate random values for xItem, yItem, and zItem
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // STEP 9: Replace placeholders in the newStory string with the values from xItem, yItem, and zItem
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    // STEP 10: Replace the name 'Bob' in the story with the customName entered by the user
    newStory = newStory.replace("Bob", customName.value);

    // STEP 11: If the metric radio button is checked, convert temperature and weight units
    if (document.getElementById("metric").checked) {
        var weight = Math.round(300 * 0.453592); 
        newStory = newStory.replace("300 pounds", weight + " kilograms");

        var temp = Math.round((94 - 32) * 5 / 9); 
        newStory = newStory.replace("94 farenheit", temp + " celsius");
    }

    // STEP 13: Update the text content of the story variable to display the new story
    story.textContent = newStory;

    // Make the paragraph visible
    story.style.visibility = "visible";
}

// EVENT LISTENERS
// STEP 5: Add a click event listener to the randomize variable
randomize.addEventListener("click", result);
