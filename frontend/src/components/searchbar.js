import "../styles/searchbar.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" className="input"></input>
      <button type="submit" className="icon">
        <img src="https://img.icons8.com/ios/25/000000/search.png" />
      </button>
    </div>
  );
}

export default SearchBar;
