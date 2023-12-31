# phase-1-wk-3-code-challenge-flatdango
This is code challenge for week-3 phase- 1- FlatDango movie company


This is a movie ticket application that allows users to view movie details, select a movie, and purchase tickets at the theater if available. 

The application retrieves movie data from API server and modifies and updates the user interface page to reflect the available movies and ticket counts.

Core Features
•	The user should be able to see the details of the movie, including its poster, title, runtime, Showtime, and available tickets when the page loads.
•	They should also be able to view a menu of all movies on the left side of the page.
•	They should be able to buy a ticket for a movie, with the number of available tickets decreasing on the frontend.

Technologies Used
•	HTML
•	CSS
•	JavaScript
•	Fetch API (for making GET/HTTP requests)




Let's break down the steps further in clearer terms:

Environment Setup:

Install a web server software: You can use a lightweight server like Live Server, which is easy to set up. Install Live Server by following the instructions for your code editor or IDE.
Set up a code editor or IDE: Download and install Visual Studio Code, a popular code editor, from the official website.


When you have been given bd.json file for your project, you can follow these steps to set up your local server

To set up a local server using the db.json file, you can follow these general steps:

Install Node.js: Make sure you have Node.js installed on your computer. You can download it from the official website (https://nodejs.org) and follow the installation instructions for your operating system.

Create a project directory: Create a new directory for your project and navigate to it using the command line or terminal.

Initialize a new Node.js project: Run the following command in the project directory to create a package.json file that will manage your project dependencies:

csharp
Copy code
npm init -y

Install JSON server: JSON Server is a simple Node.js package that allows you to set up a RESTful API with a JSON file. Install it globally by running the following command:
Copy code
npm install -g json-server

Copy the db.json file: Place the db.json file you downloaded into your project directory.

Start the server: In the command line or terminal, navigate to your project directory and run the following command:
css
Copy code
json-server --watch db.json

This command will start the JSON server and watch the db.json file for changes.

Access the server: The JSON server will run on http://localhost:3000 by default. You can access your data by making HTTP requests to this URL.

For example, if you have a users resource defined in your db.json file, you can access it by sending a GET request to http://localhost:3000/users.



OR: Setting up the local JSON DB server:

Download the db.json file from the source provided or create your own JSON file with the desired data structure.

Install a local JSON server to serve the data. One popular option is JSON Server (https://github.com/typicode/json-server).

Install JSON Server globally using npm (Node Package Manager) by running the following command in your project's root directory:
Copy code
npm install -g json-server

Once installed, start the JSON server by running the following command:
css
Copy code
json-server --watch db.json

The JSON server will start and serve the data from the db.json file at http://localhost:3000.

Fetching data from the local JSON DB server:

In your project code, you can use various methods to fetch data from the local JSON server. The method you choose will depend on the programming language or framework you are using.

Here is an example using JavaScript and the Fetch API to fetch data from the local JSON server:
javascript
Copy code


fetch('http://localhost:3000/your-endpoint')
  .then(response => response.json())
  .then(data => {
    // Handle the data returned from the server
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error(error);
  });


Replace your-endpoint with the specific endpoint you want to fetch data from. For example, if you have a users endpoint, you can use http://localhost:3000/users to fetch the user data.

Use the fetched data:

Once you have retrieved the data from the JSON server, you can use it in your application as needed. Parse the JSON response and manipulate or display the data according to your project requirements.





Project Setup:

Create a new directory on your computer where you want to work on the project.

Open Visual Studio Code and click on "File" > "Open Folder". Navigate to the directory you just created and select it.

In Visual Studio Code, create a new HTML file called index.html and a new JavaScript file called script.js.

Copy and paste the following basic HTML structure into index.html:
html
Copy code



<!DOCTYPE html>
<html>
<head>
  <title>Movie Ticket Booking</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Welcome to Movie Ticket Booking</h1>
  <div id="movie-details">
    <!-- Movie details will be populated here -->
  </div>
  <ul id="movie-list">
    <!-- Movie list will be populated here -->
  </ul>
  <script src="script.js"></script>
</body>
</html>


Save the changes to index.html.




API Integration:

Open script.js in Visual Studio Code.

Write the code to retrieve movie details from the API and update the movie details section in index.html. You can use the Fetch API for this. Here's an example code snippet to get you started:

javascript
Copy code




// Make a GET request to retrieve movie details
fetch('/films/1')
  .then(response => response.json())
  .then(data => {
    // Update the movie details section with the received data
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = `
      <img src="${data.poster}" alt="Movie Poster">
      <h2>${data.title}</h2>
      <p>Runtime: ${data.runtime} minutes</p>
      <p>Showtime: ${data.showtime}</p>
      <p>Available Tickets: ${data.capacity - data.tickets_sold}</p>
    `;
  })
  .catch(error => console.log(error));


Save the changes to script.js.





Styling:

Create a new CSS file called style.css in the same directory.

Add CSS rules in style.css to style the movie details, movie list, and ticket purchase section according to your preference. Here's an example code snippet to get you started:

css
Copy code





#movie-details {
  margin-bottom: 20px;
}

#movie-details img {
  width: 200px;
}

#movie-details h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

#movie-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

#movie-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

#movie-list li img {
  width: 50px;
  margin-right: 10px;
}



Save the changes to style.css.





Testing the Application:

Open the project directory in Visual Studio Code.
Right-click on index.html and select "Open with Live Server" (if you have Live Server installed).
Your default web browser should open automatically, and you should see the basic structure of your movie ticket booking web application.
Test the application by checking if the movie details are displayed correctly and if the movie list is populated. You can inspect the page using your browser's developer tools (right-click > Inspect) to ensure there are no errors in the console.





Implementing Ticket Purchase:

Add a "Buy Ticket" button within the movie details section in index.html. Give it an id attribute like buy-ticket-button.

In script.js, write the code to handle the click event of the "Buy Ticket" button and update the number of available tickets. Here's an example code snippet to get you started:

javascript
Copy code



const buyTicketButton = document.getElementById('buy-ticket-button');
buyTicketButton.addEventListener('click', () => {
  // Retrieve the current number of available tickets
  const availableTicketsElement = document.querySelector('#movie-details p:last-child');
  const availableTickets = parseInt(availableTicketsElement.textContent);

  // Check if there are available tickets
  if (availableTickets > 0) {
    // Decrease the number of available tickets by 1
    availableTicketsElement.textContent = availableTickets - 1;
  }
});





Save the changes to script.js and refresh the browser. Test the "Buy Ticket" button to ensure the number of available tickets decreases when clicked.

That's it! You have set up the development environment, integrated the API, styled the application, and implemented the ticket purchase feature. 

Now you can continue building on this foundation, adding more features and enhancing the user experience.











Simplified Step by step for beginners

now, kindly write for me all the steps one by one and they should be detailed so that a beginner can follow easily and do the above project



Step 1: Set up the project

Create a new directory for your project.
Inside the project directory, create three files: index.html, styles.css, and index.js.
Open the index.html file and set up the basic HTML structure. Link the CSS and JavaScript files by adding the following code inside the <head> tag:
html
Copy code
<link rel="stylesheet" href="styles.css">
<script src="index.js" defer></script>
Create the necessary HTML elements for the movie details and film menu. Add the following code inside the <body> tag of the index.html file:
html
Copy code
<h1>Movie Ticket Booking</h1>
<div class="container">
  <div class="films-menu">
    <ul id="films"></ul>
  </div>
  <div class="film-details">
    <img id="poster" src="" alt="Movie Poster">
    <h2 id="title"></h2>
    <p id="runtime"></p>
    <p id="showtime"></p>
    <p id="available-tickets"></p>
    <button id="buy-ticket">Buy Ticket</button>
  </div>
</div>
Open the styles.css file and add the necessary CSS styles to format the movie details and film menu. For example:
css
Copy code
.container {
  display: flex;
}

.films-menu {
  flex: 1;
  padding-right: 20px;
}

.film-details {
  flex: 2;
}

/* Add more CSS styles as desired */
Save the HTML and CSS files.
Step 2: Fetch movie data from the API

In the index.js file, add the following code to fetch movies from the API endpoint:
javascript
Copy code
const fetchMovies = async () => {
  try {
    const response = await fetch('http://localhost:3000/films');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
Create a function fetchMovieDetails to fetch the details of a specific movie using its ID. Use the following code:
javascript
Copy code
const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/films/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching movie ${id} details:`, error);
  }
};
Step 3: Update movie details on the page

Create a function updateFilmDetails to update the movie details on the page. Use the following code:
javascript
Copy code
const updateFilmDetails = (movie) => {
  const filmPoster = document.getElementById('poster');
  const filmTitle = document.getElementById('title');
  const filmRuntime = document.getElementById('runtime');
  const filmShowtime = document.getElementById('showtime');
  const filmAvailableTickets = document.getElementById('available-tickets');
  const buyTicketButton = document.getElementById('buy-ticket');

  filmPoster.src = movie.poster;
  filmTitle.textContent = movie.title;
  filmRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
  filmShowtime.textContent = `Showtime: ${movie.showtime}`;
  const availableTickets = movie.capacity - movie.tickets_sold;
  filmAvailableTickets.textContent = `Available Tickets: ${availableTickets}`;
  if (availableTickets === 0) {
    buyTicketButton.disabled = true;
    buyTicketButton.textContent = 'Sold Out';
  } else {
    buyTicketButton.disabled = false;
    buyTicketButton.textContent = 'Buy Ticket';
  }
};
Step 4: Handle movie click event

Create a function handleMovieClick to handle the movie click event. Use the following code:
javascript
Copy code
const handleMovieClick = async (event) => {
  const movieId = event.target.dataset.movieId;
  if (movieId) {
    const movie = await fetchMovieDetails(movieId);
    updateFilmDetails(movie);
  }
};
Step 5: Create film menu items

Create a function createFilmMenuItem to create film menu items dynamically. Use the following code:
javascript
Copy code
const createFilmMenuItem = (movie) => {
  const listItem = document.createElement('li');
  listItem.classList.add('film', 'item');
  listItem.textContent = movie.title;
  listItem.dataset.movieId = movie.id;
  return listItem;
};
Step 6: Initialize the app

Create an init function to initialize the app. Use the following code:
javascript
Copy code
const init = async () => {
  const filmsMenu = document.getElementById('films');
  const movies = await fetchMovies();
  movies.forEach((movie) => {
    const listItem = createFilmMenuItem(movie);
    filmsMenu.appendChild(listItem);
  });

  filmsMenu.addEventListener('click', handleMovieClick);

  // Load the first movie's details
  if (movies.length > 0) {
    const firstMovie = movies[0];
    const movieDetails = await fetchMovieDetails(firstMovie.id);
    updateFilmDetails(movieDetails);
  }
};

// Call the init function to start the app
init();
Step 7: Handle "Buy Ticket" button click

Create a function handleBuyTicketClick to handle the "Buy Ticket" button click event. Use the following code:
javascript
Copy code
const handleBuyTicketClick = () => {
  const filmAvailableTickets = document.getElementById('available-tickets');
  const availableTicketsText = filmAvailableTickets.textContent;
  const availableTickets = parseInt(availableTicketsText.split(': ')[1]);
  if (availableTickets > 0) {
    filmAvailableTickets.textContent = `Available Tickets: ${availableTickets - 1}`;
  }
};

// Add event listener for buy ticket button click
const buyTicketButton = document.getElementById('buy-ticket');
buyTicketButton.addEventListener('click', handleBuyTicketClick);
That's it! 