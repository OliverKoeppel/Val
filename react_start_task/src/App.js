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
        this.state = { searchedList: new ProjectListFactory()};

        this.search_List = this.search_List.bind(this);
    }

    render () {
        return(
        <div className="App">

            <header id="App-header">
                <img id="valLogo" src={val_logo} alt="val_logo"/>
                <img id="userLogo" src={user_logo} alt="user_logo"/>
                <text id="userName"> Max Mustermann</text>
            </header>

            <body>
            <SearchComponent start_search={this.search_List}/>
            <ProjectViewComponent/>
            </body>

        </div>
     )};

    search_List(searchString){
    let outputList =[];
    this.originalList.forEach(project => {
        if (project.getTitle().contains(searchString)) {
            outputList.push(project);
        }
    });
    this.setState({ searchedList: outputList});
    }

}

export default App;
