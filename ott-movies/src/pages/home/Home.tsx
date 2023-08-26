
import { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../movies/MovieList';
import MovieListHeading from '../movies/MoviesListHeading';
import SearchBox from '../movies/SearchBox';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue: string) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2801880c`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if(responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    },[searchValue])

    return (
        <div className="home__container">
            <div className="home__categories">
                <div className="row d-flex align-item-center mt-4 mb-4">
                    <MovieListHeading heading={"Movies"} />
                    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className="row">
                    <MovieList movies={movies}  />
                </div>
            </div>
        </div>
    )
}

export default Home