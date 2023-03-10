import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  const onSearchChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((member) =>
      member.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Warrior</h1>
      <SearchBox
        handleChange={onSearchChange}
        className={"monster-search-box"}
        placeholder={"Search Monsters"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     const searchString = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField: searchString };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((member) =>
//       member.name.toLocaleLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Warrior</h1>
//         <SearchBox
//           handleChange={onSearchChange}
//           className={"monster-search-box"}
//           placeholder={"Search Monsters"}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
