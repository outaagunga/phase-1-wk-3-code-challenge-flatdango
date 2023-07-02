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