const key = "a4fcf62298ed60e98a910918d770d25b";

// const request = {
//   fetchTrending: `/trending/all/week?api_key=${key}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${key}$with_networks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${key}&with_genre=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${key}&with_genre=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${key}&with_genre=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${key}&with_genre=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${key}&with_genre=99`,
// };

const request = {
  requestPopular: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `
  
https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `
https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestNowPlaying: `
  https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,

  requestTrending: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1`,

  // requestUpcoming: `http://api.themoviedb.org/3/movie/upcoming?api_key=${key}b&language=en-US&page=1`,
  // requestNowPlaying: `http://api.themoviedb.org/3/movie/now_playing?api_key=${key}b&language=en-US&page=1`,
  // requestHorror: `http://api.themoviedb.org/3/movie/horror?api_key=${key}b&language=en-US&page=1`,
  // requestAction: `http://api.themoviedb.org/3/movie/action?api_key=${key}b&language=en-US&page=1`,
  // requestComedy: `http://api.themoviedb.org/3/movie/comedy?api_key=${key}b&language=en-US&page=1`,
};

// https://developer.themoviedb.org/reference/intro/getting-started
// this website to generate api
export default request;
