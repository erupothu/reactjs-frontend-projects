
import './MovieList.css';

const MovieList = (props: any) => {
    return (
        <div className="movieList__container">
            {
                props.movies.map((movie: any, index: number) => (
                    <div>
                        <div className="image-container d-flex justify-content-start m3">
                            <img src={movie.Poster} alt='movie' />
                        </div>
                        <div className="image__footer">
                            {movie.Title} ({movie.Year})
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList