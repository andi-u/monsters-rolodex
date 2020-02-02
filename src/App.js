import React, {Component} from 'react';
//import logo from './logo.svg';

import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this); // This bind should be done if handleChange function is made without =>
  }

  //life cycle methods (componentDidMount(), render()) imported from Component
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  };

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render(){
    const { monsters, searchField } = this.state;
    // above syntax is equivalent to the next two rows:
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox onSearchChange={this.onSearchChange} />

        <CardList monsters={filteredMonsters} />

      </div>   
    );
  }
}

export default App;
