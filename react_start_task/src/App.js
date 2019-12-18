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
        this.state = {
            outputList: new ProjectListFactory()
        };
        this.updateOutputList = this.updateOutputList.bind(this);
}

    render() {
        return (

            <div>
                <header id="App-header">
                    <img id="valLogo" src={val_logo} alt="val_logo"/>
                    <img id="userLogo" src={user_logo} alt="user_logo"/>
                    <span id="userName"> Max Mustermann</span>
                </header>
                <body>
                <SearchComponent updateOutputList={this.updateOutputList}/>
                <ProjectViewComponent outputList={this.state.outputList} initProject={this.originalList[0]}/>
                </body>
            </div>
        )
    };

    updateOutputList(searchTerm) {
        if (searchTerm === "") {
            this.setState({outputList: this.originalList});

        } else {
            const outputListTmp = [];
            this.originalList.forEach(project => {
                if (project.getTitle().includes(searchTerm)) {
                    outputListTmp.push(project);
                }
            });
            this.setState({outputList: outputListTmp});
        }
    }

}

export default App;
