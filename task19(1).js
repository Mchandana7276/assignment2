const form = document.querySelector('.search-btn');
const movieCon = document.querySelector('.movieContainer');
const input = form.querySelector('input');
const searchResults = document.querySelector('.search-result');
const searchResultContainer = document.querySelector('.searchResultContainer');


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value;
  const apiKey = '350b0fd2a429854b79388af650ef0285'; // replace with your actual API key
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const movies = data.results;

    searchResults.innerHTML = '';
    movieCon.innerHTML = '';


    movies.forEach((movie) => {
      const { poster_path, title, release_date, vote_average } = movie;

      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movieCard');

      const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+poster';

      movieContainer.innerHTML = `
        <img src="${posterUrl}" alt="${title}" class="moviePoster">
        <div class="movieTitle">${title}</div>
        <div class="rating">
          <span class="rate">${vote_average}</span>
          <span class="year">${release_date ? release_date.slice(0, 4) : ''}</span>
        </div>
      `;

      searchResults.appendChild(movieContainer);
    });

    const header = searchResultContainer.querySelector('header');
    if (!header) {
      const header = document.createElement('header');
      header.innerHTML = `<h1>Search Results: ${query}</h1>`;
      searchResultContainer.insertBefore(header, searchResults);
    } else {
      header.innerHTML = `<h1>Search Results: ${query}</h1>`;
    }
  } catch (error) {
    console.error(error);
  }
  
});

const apiKey = '350b0fd2a429854b79388af650ef0285';

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const movies = data.results;
    const movieContainer = document.querySelector('.movieContainer');

    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movieCard');

      const moviePoster = document.createElement('img');
      moviePoster.classList.add('moviePoster');
      moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      moviePoster.alt = movie.title;

      const movieTitle = document.createElement('div');
      movieTitle.classList.add('movieTitle');
      movieTitle.innerText = movie.title;

      const rating = document.createElement('div');
      rating.classList.add('rating');

      const rate = document.createElement('span');
      rate.classList.add('rate');
      rate.innerText = `${movie.vote_average}/10`;

      const year = document.createElement('span');
      year.classList.add('year');
      year.innerText = movie.release_date.split('-')[0];

      rating.appendChild(rate);
      rating.appendChild(year);

      movieCard.appendChild(moviePoster);
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(rating);

      movieContainer.appendChild(movieCard);
    });
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });