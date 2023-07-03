//Make a GET request to retrieve movie details
fetch("http://localhost:3000/films/1")
  .then(response => response.json())
  .then(data => {
    //Update the movie details section with the retrieved data
    const movieDetails = document.getElementById("movie-details");
    movieDetails.innerHTML = `
      <img src="${data.poster}" alt="Movie Poster">
      <h2>${data.title}</h2>
      <p>Runtime: ${data.runtime} minutes</p>
      <p>Showtime: ${data.showtime}</p>
      <p>Available Tickets: ${data.capacity - data.tickets_sold}</p>`;
  })
  .catch(error => console.error(error));
