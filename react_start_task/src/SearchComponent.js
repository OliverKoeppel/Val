import React from 'react';
import './CSS/SearchComponent.css';
import './CSS/all.css'

export class SearchComponent extends React.Component{

constructor(props){
    super(props);
    this.state = {searchTerm: ""};
    this.updateSearchTerm  = this.updateSearchTerm.bind(this);
    this.startSearch  = this.startSearch.bind(this);
}
    render(){
        return(
            <form>
            <input type="Text" id="searchComponent" placeholder="Search" onSubmit={this.props.onSubmit}  value={this.props.value} />
            <button onClick={this.startSearch}><i className="fas fa-search" id="searchIcon"/></button>
            </form>
        );
    }

    updateSearchTerm(e) {
        this.setState({searchTerm : e.target.value});
        console.log(this.state.searchTerm);
        this.props.onSubmit();

    }

    startSearch(){
    this.props.onSubmit();
    }

}