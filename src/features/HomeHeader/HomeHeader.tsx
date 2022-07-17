import { useState } from "react";
import './HomeHeader.css';
import '../common/DropDown.css'
import { DropDown } from "../common/DropDown";

interface HomeHeaderProps {
  filterMovies: (genre: string) => void;
  sortMovies?: () => void;
  searchMovies: (userInput: string) => void;
}

const HomeHeader:React.FC<HomeHeaderProps> = ({filterMovies, searchMovies}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectGenre, setSelectGenre] = useState<string>("");
  
  const genres = () => {
    return [
      "All",
      "Action",
      "Thriller",
      "Crime drama",
      "Children",
      "Comedy",
      "Adventure",
      "Western",
      "Historical drama",
      "Drama",
      "Horror",
      "Fantasy",
      "Dark comedy"
    ];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };
  const genreSelection = (genre: string): void => {
    setSelectGenre(genre);
    filterMovies(genre)
  };
  return (<section className="home-header-container">
    <div style={{color: "white", height: "100%",
    display: "flex", alignItems: "center", marginRight: "1em"}}><p>MOVIES LIBRARY</p></div>
    <div className="actions-group">
      <div className="action-group">
        <p style={{color: "white", marginRight: "1em"}}>Genre</p>
        <button
          className={"action-field " + `${showDropDown ? "active" : undefined}`}
          onClick={(): void => toggleDropDown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <div>{selectGenre ? selectGenre : "All"} </div>
          {showDropDown && (
            <DropDown
              genres={genres()}
              showDropDown={false}
              toggleDropDown={(): void => toggleDropDown()}
              genreSelection={genreSelection}
            />
          )}
        </button>
      </div>
      <div className="action-group">
        <p style={{color: "white", marginRight: "1em"}}>Search</p>
        <label data-testid="search-label"
          className="label-title"
          htmlFor="search"></label>
        <input className="action-field search-input"
          id="search"
          type="search"
          name="search"
          placeholder="search a title..."
          onChange={(e) => searchMovies(e.target.value)}
          autoComplete="off"
          aria-label="Search through site content"></input>
      </div>
      <div>Sort</div>
    </div>

  </section>);
}

export default HomeHeader;