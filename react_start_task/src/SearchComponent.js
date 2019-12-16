import React from 'react';
import './CSS/SearchComponent.css';
import './CSS/all.css'

export class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchTerm: ""};
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.updateOutputList = this.updateOutputList.bind(this);
    }

    render() {
        return (
            <form>
                <input type="Text" id="searchComponent" placeholder="Search"
                       value={this.state.searchTerm} onChange={(e) => this.updateSearchTerm(e, e.target.value, false)}
                       onSubmit={(e) => this.updateSearchTerm(e, e.target.value, true)}/>
                <button onClick={(e) => this.updateOutputList(e)}><i className="fas fa-search" id="searchIcon"/>
                </button>
                <button onClick={(e) => this.updateSearchTerm(e, "", true)}><i className="fas fa-times-circle"
                                                                               id="clearSearchIcon"/>
                </button>
            </form>
        );
    }

    updateSearchTerm(e, newValue, updateOutputListBoolean) {
        this.setState({searchTerm: newValue},
            () => {
                if (updateOutputListBoolean === true) {
                    this.props.updateOutputList(this.state.searchTerm);
                }
                e.preventDefault();
            })
    }

    updateOutputList(e) {
        this.props.updateOutputList(this.state.searchTerm);
        e.preventDefault();
    }
}