/*
  JavaScript (JS) controls the BEHAVIOR and INTERACTIVITY of your webpage.
  
  While HTML defines structure and CSS defines appearance,
  JavaScript makes your page DO things when users interact with it.
  
  Examples of what JavaScript can do:
  - Change text when a button is clicked
  - Show or hide content
  - Count clicks
  - Validate form input
  - Fetch data from the internet
  - Animate elements
  
  JavaScript runs in the browser, and you can see errors and messages
  in the browser's Console (Developer Tools).
*/

// ============================================
// CONSOLE LOG - YOUR FIRST JAVASCRIPT
// ============================================

/*
  console.log() prints messages to the browser's Console.
  This is useful for debugging and seeing what your code is doing.
  
  To see the Console:
  - Right-click on your webpage -> Inspect (or Inspect Element)
  - Click the "Console" tab
  - Or press F12 and click "Console"
  
  You should see "Hello from JavaScript!" in the Console when you load the page.
*/
console.log("Hello from JavaScript!");
console.log("If you can see this message, JavaScript is working!");

// ============================================
// TODO #1: SELECT AN ELEMENT FROM THE PAGE
// ============================================

/*
  TODO #1: Use document.querySelector() to select an element from your HTML.
  
  document.querySelector() finds the first element that matches a selector.
  
  Examples:
  - document.querySelector("h1") finds the first <h1> tag
  - document.querySelector("#myButton") finds an element with id="myButton"
  - document.querySelector(".card") finds the first element with class="card"
  
  Try selecting your button (if you gave it an id):
  const myButton = document.querySelector("#myButton");
  
  Then log it to see if it worked:
  console.log("Button found:", myButton);
*/

// TODO #1: Select an element and store it in a variable
// Example: const myButton = document.querySelector("#myButton");

// ============================================
// TODO #2: CHANGE TEXT ON THE PAGE
// ============================================

/*
  TODO #2: Change the text content of an element.
  
  Once you've selected an element, you can change its text using .textContent
  
  Example:
  const heading = document.querySelector("h1");
  heading.textContent = "My New Heading Text!";
  
  Or change HTML content (including tags) using .innerHTML:
  heading.innerHTML = "My <strong>Bold</strong> Heading!";
  
  Try selecting a paragraph and changing its text.
*/

// TODO #2: Select an element and change its text
// Example:
// const myParagraph = document.querySelector("p");
// myParagraph.textContent = "This text was changed by JavaScript!";

// ============================================
// TODO #3: ADD A CLICK EVENT TO YOUR BUTTON
// ============================================

/*
  TODO #3: Make something happen when a button is clicked.
  
  Event listeners "listen" for user actions (clicks, key presses, etc.)
  and run code when those actions happen.
  
  Steps:
  1. Select your button
  2. Add an event listener for "click"
  3. Write a function that runs when clicked
  
  Example:
  const myButton = document.querySelector("#myButton");
  
  myButton.addEventListener("click", function() {
    console.log("Button was clicked!");
    alert("Hello! You clicked the button!");
  });
  
  Try this with your button. When you click it, check the Console for the message.
*/

// TODO #3: Add a click event listener to your button
// Example:
// const myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", function() {
//   console.log("Button clicked!");
// });

// ============================================
// TODO #4: CREATE A CLICK COUNTER
// ============================================

/*
  TODO #4: Count how many times a button has been clicked.
  
  This combines what you've learned:
  - Selecting elements
  - Event listeners
  - Changing text content
  
  Steps:
  1. Create a variable to store the count (start at 0)
  2. Select your button
  3. Select an element to display the count (maybe a paragraph or heading)
  4. Add a click listener that:
     - Increases the count by 1
     - Updates the display element with the new count
  
  Example:
  let clickCount = 0;
  const myButton = document.querySelector("#myButton");
  const counterDisplay = document.querySelector("#counter");
  
  myButton.addEventListener("click", function() {
    clickCount = clickCount + 1;
    counterDisplay.textContent = "Button clicked " + clickCount + " times!";
    console.log("Current count:", clickCount);
  });
  
  Don't forget to add an element in your HTML to display the counter!
  Example: <p id="counter">Button clicked 0 times!</p>
*/

// TODO #4: Create a click counter
// Example:
// let clickCount = 0;
// const myButton = document.querySelector("#myButton");
// const counterDisplay = document.querySelector("#counter");
// 
// myButton.addEventListener("click", function() {
//   clickCount = clickCount + 1;
//   counterDisplay.textContent = "Clicks: " + clickCount;
// });

// ============================================
// DEBUGGING TIPS
// ============================================

/*
  COMMON ERRORS AND HOW TO FIX THEM:
  
  1. "Cannot read property 'addEventListener' of null"
     - This means document.querySelector() didn't find your element.
     - Check that the element exists in your HTML
     - Check that the id or class name matches exactly (case-sensitive!)
     - Make sure your <script> tag has "defer" so HTML loads first
     
  2. "Unexpected token" or syntax errors
     - Check for missing semicolons (;)
     - Check for missing or extra curly braces ({})
     - Check that quotes match ("..." or '...')
     
  3. Code runs but nothing happens
     - Open the Console (F12) to see error messages
     - Add console.log() statements to see if your code is running
     - Check that your HTML elements have the correct ids/classes
     
  4. Changes don't appear
     - Refresh your browser (Ctrl+R or Cmd+R)
     - Hard refresh to clear cache (Ctrl+Shift+R or Cmd+Shift+R)
     - Check that you saved your JavaScript file
  
  REMEMBER: The Console is your friend!
  - Right-click -> Inspect -> Console tab
  - Or press F12 -> Console tab
  - Errors will appear in red
  - Your console.log() messages will appear in black/blue
*/

// ============================================
// BONUS: MORE JAVASCRIPT IDEAS
// ============================================

/*
  Once you've completed the TODOs above, try these challenges:
  
  1. Change the background color when the button is clicked
     Example: document.body.style.backgroundColor = "lightblue";
  
  2. Show/hide an element when clicked
     Example: element.style.display = "none"; (hide)
              element.style.display = "block"; (show)
  
  3. Add multiple buttons that do different things
  
  4. Create a simple quiz with questions and answers
  
  5. Make an image change when clicked
  
  Remember: Always check the Console for errors, and use console.log()
  to see what's happening in your code!
*/
