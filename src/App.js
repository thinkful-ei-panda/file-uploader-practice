// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>File Uploader</h1>  
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
        searchTerm={this.state.searchTerm}
        filterOption={this.state.filterOption}
        handleUpdate={term=>this.updateSearchTerm(term)}
        handleFilterChange={option => this.updateFilterOption(option)}
        />

        <FilterableList 
        files={this.props.files}
        searchTerm={this.state.searchTerm}
        filterOption={this.state.filterOption} 
        />
      </div>
    );
  }
}

export default App;