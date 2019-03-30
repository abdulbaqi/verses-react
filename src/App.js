import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Verse from './components/Verse';
import QuranAPI from './components/QuranAPI';

// const verse = "Allah is one";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      verse: ["الْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ", "All praise is due to God alone, the Sustainer of all the worlds,"]
    };
    this.searchVerse = this.searchVerse.bind(this);
  }

  searchVerse(verse){
    QuranAPI.search(verse).then(verse=>{

    this.setState({
      verse:verse
    })});
  }

  render() {
    return (
      <div className="App">
       
        <h1>Aayaat</h1>
       
       <SearchBar searchVerse={this.searchVerse}/>
       <Verse verse={this.state.verse} />

      </div>
    );
  }
}

export default App;
