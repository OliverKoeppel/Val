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
            output_List: new ProjectListFactory(),
        };
        this.update_output_List = this.update_output_List.bind(this);
    }

    render() {
        return (

            <div>
                <header id="App-header">
                    <img id="valLogo" src={val_logo} alt="val_logo"/>
                    <img id="userLogo" src={user_logo} alt="user_logo"/>
                    <span id="userName"> Max Mustermann</span>
                </header>
                <SearchComponent update_output_List={this.update_output_List}/>
                <ProjectViewComponent output_list={this.state.output_List}/>
            </div>
        )
    };

    componentDidMount() {
    }

    update_output_List(searchTerm) {
        if (searchTerm === "") {
            this.setState({output_List: this.originalList});

        } else {
            const output_List_tmp = [];
            this.originalList.forEach(project => {
                if (project.getTitle().includes(searchTerm)) {
                    output_List_tmp.push(project);
                }
            });
            this.setState({output_List: output_List_tmp});
        }
    }

}

export default App;
