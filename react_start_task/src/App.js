import React from 'react';
import val_logo from './Images/valtech_logo.png';
import user_logo from './Images/user_logo.png';
import {SearchComponent} from "./SearchComponent";
import {ProjectViewComponent} from "./ProjectViewComponent";
import {ProjectListFactory} from "./ProjectListFactory";
import './CSS/App.css';


class App extends React.Component {
    originalList = new ProjectListFactory();



    constructor(props) {
        super(props);
        this.state = { searchedList: new ProjectListFactory(),
        searchTerm: ""};

        this.search_List = this.search_List.bind(this);
    }

    render () {
        return(

            <div>
            <header id="App-header">
                <img id="valLogo" src={val_logo} alt="val_logo"/>
                <img id="userLogo" src={user_logo} alt="user_logo"/>
                <span id="userName"> Max Mustermann</span>
            </header>
            <SearchComponent onSubmit={this.search_List} value={this.state.searchTerm}/>
            <ProjectViewComponent display_list={this.state.searchedList}/>
           </div>
     )};

    search_List(){

        if (this.state.searchTerm === ""){
            this.setState( {searchedList: this.originalList});
        }
    let outputList =[];
    this.originalList.forEach(project => {
        if (project.getTitle().includes(this.state.searchTerm)) {
            outputList.push(project);
        }
    });
    this.setState({ searchedList: outputList});
    }

}

export default App;
