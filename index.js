document.addEventListener('DOMContentLoaded', () => {
  const filmsMenu = document.getElementById('films');
  const filmPoster = document.getElementById('poster');
  const filmTitle = document.getElementById('title');
  const filmRuntime = document.getElementById('runtime');
  const filmShowtime = document.getElementById('showtime');
  const filmAvailableTickets = document.getElementById('available-tickets');
  const buyTicketButton = document.getElementById('buy-ticket');

  // Function to fetch movies data from the API
  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:3000/films');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Function to fetch a specific movie's data from the API
  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/films/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching movie ${id} details:`, error);
    }
  };

  // Function to update the film details on the page
  const updateFilmDetails = (movie) => {
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

  // Function to handle movie click event
  const handleMovieClick = async (event) => {
    const movieId = event.target.dataset.movieId;
    if (movieId) {
      const movie = await fetchMovieDetails(movieId);
      updateFilmDetails(movie);
    }
  };

  // Function to create film menu item
  const createFilmMenuItem = (movie) => {
    const listItem = document.createElement('li');
    listItem.classList.add('film', 'item');
    listItem.textContent = movie.title;
    listItem.dataset.movieId = movie.id;
    return listItem;
  };

  // Function to initialize the app
  const init = async () => {
    const movies = await fetchMovies();
    movies.forEach((movie) => {
      const listItem = createFilmMenuItem(movie);
      filmsMenu.appendChild(listItem);
    });

    // Add event listener for movie click
    filmsMenu.addEventListener('click', handleMovieClick);

    // Load the first movie's details
    if (movies.length > 0) {
      updateFilmDetails(movies[0]);
    }
  };

  // Initialize the app
  init();
});
