import { AllMOVIES, MovieApi } from '../types/moviesType'
import axios from 'axios'
export const getAllMovie = () => {
    return async (dispatch) => {
        const res = await axios.get(MovieApi)
        dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}

export const getMovieSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=190e39986dab0938986d1ec4cc5a6c93&language=ar&query=${word}`)
        dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}

export const getPage = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=190e39986dab0938986d1ec4cc5a6c93&language=ar&page=${page}`)
        dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}




// import { AllMOVIES, MovieApi } from '../types/moviesType'
// import axios from 'axios'
// const apiEndpoint = 'https://api.themoviedb.org/3';
// const apiKey = '190e39986dab0938986d1ec4cc5a6c93';
// const language = 'ar';


//   const fetchMovies = async (url) => {
//     const res = await axios.get(`${apiEndpoint}${url}?api_key=${apiKey}&language=${language}`);
//     return { data: res.data.results, pages: res.data.total_pages };
//   };
// export const getAllMovie = () => {
//   return async (dispatch) => {
//     const data = await fetchMovies('/movie/popular');
//     dispatch({ type: AllMOVIES, ...data });
//   };
// };

// export const getMovieSearch = (word) => {
//   return async (dispatch) => {
//     const data = await fetchMovies(`/search/movie?query=${word}&include_adult=false`);
//     dispatch({ type: AllMOVIES, ...data });
//   };
// };

// export const getPage = (page) => {
//   return async (dispatch) => {
//     const data = await fetchMovies(`/movie/popular?page=${page}`);
//     dispatch({ type: AllMOVIES, ...data });
//   };
// };
