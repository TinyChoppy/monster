import { Component } from "react";
import './search-box-style.css'

class SearchBox extends Component {
  render() {
    const {handleChange} = this.props
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
