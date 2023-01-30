import "./search-box-style.css";

const SearchBox = ({ handleChange, className, placeholder }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
