import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			verse: '2:255'
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleVerse = this.handleVerse.bind(this);
	}

	handleVerse(e){
		this.setState({
			verse: e.target.value
		});
	}

	handleSearch(e){
    	this.props.searchVerse(this.state.verse);
    	e.preventDefault();
  	}


	render(){
		return(
			<div className="SearchBar">
			 <div className="SearchBar-fields">
			 <input onChange={this.handleVerse} placeholder="enter verse, e.g., 1:2" />
			 </div>
			 <div className="SearchBar-submit">
			 <a onClick={this.handleSearch}>Search</a>
			 </div>
			</div>
			)
	}
};

export default SearchBar;