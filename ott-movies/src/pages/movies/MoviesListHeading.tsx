

import './MovieList.css';

const MovieListHeading = (props: any) => {
    return (
        <div className="movieListHeading__contianer">
            {props.heading}
        </div>
    )
}

export default MovieListHeading