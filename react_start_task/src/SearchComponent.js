import React from 'react';
import './CSS/SearchComponent.css';
import './CSS/all.css'

export class SearchComponent extends React.Component{


    render(){
        return(
            <form>
            <input type="Text" id="searchComponent" placeholder="Search" onSubmit={this.search_projectList()}/>
            <a href={this.search_projectList} id="searchIcon" className="Icon"><i className="fas fa-search"></i></a>
            </form>
        );
    }

    search_projectList(e) {
        const searchTerm = e.target.value;
        this.props.onChange(searchTerm);
    }

}