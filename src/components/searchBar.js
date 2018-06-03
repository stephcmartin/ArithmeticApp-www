import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            term: ""
        }
    }

    render (){
        return (
            <div className="search-bar">
                <p>Looking for something in particular? Search for a question: 🔍</p> <input className="col-md-12"/> 
            </div>
        )
    }



}

export default SearchBar;