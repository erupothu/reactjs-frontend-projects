
import './MovieList.css';

const SearchBox = (props: any) => {
    return (
        <div className="serachBox__container">
            <input 
            type="text" 
            className="form-control" 
            value={props.value} 
            onChange={(e) => props.setSearchValue(e.target.value)} 
            placeholder='Type to search' />
        </div>
    )
}

export default SearchBox