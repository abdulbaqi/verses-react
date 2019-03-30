import React from 'react';
import './Verse.css';


class Verse extends React.Component {

	countWords(v){
		return v.split(' ').length
	}

	handleError(verse){
		if(verse[0]==="wrong"){
			return (
				<div className="error">Error: Wrong range of verse, Try Again</div>
				)
		} else {
			return (
			<div className="verse">
			<p className="arabic">{verse[0]}</p>
			<p className="wordCount">{this.countWords(verse[0])} Words</p>
			<p className="english">{verse[1]}</p>
			<p className="wordCount">{this.countWords(verse[1])} Words</p>
			</div>

				)

		}
	}

	render(){
		return this.handleError(this.props.verse)	
	}
};

export default Verse;