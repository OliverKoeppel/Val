import React from 'react';
import './CSS/SearchComponent.css';
import './CSS/all.css'

export class SearchComponent extends React.Component{


    render(){
        return(
            <form>
            <input type="Text" id="searchComponent" placeholder="Search" onSubmit={this.search_projectList}/>
            <button onClick={this.search_projectList}><i className="fas fa-search" id="searchIcon"/></button>
            </form>
        );
    }

    search_projectList(e) {
        const searchTerm = e.target.value;
        this.props.start_search(searchTerm);
    }

}