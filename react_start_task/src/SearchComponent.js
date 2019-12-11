import React from 'react';
import './CSS/SearchComponent.css';
import './CSS/all.css'

export class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchTerm: ""};
        this.update_search_term = this.update_search_term.bind(this);
        this.update_output_list = this.update_output_list.bind(this);
    }

    render() {
        return (
            <form>
                <input type="Text" id="searchComponent" placeholder="Search"
                       value={this.state.searchTerm} onChange={(e) => this.update_search_term(e)}/>
                <button onClick={(e) => this.update_output_list(e)}><i className="fas fa-search" id="searchIcon"/>
                </button>
            </form>
        );
    }

    update_search_term(e) {
        this.setState({searchTerm: e.target.value});
        e.preventDefault();
    }

    update_output_list(e) {
        this.props.update_output_List(this.state.searchTerm);
        e.preventDefault();
    }
}