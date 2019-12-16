import React from 'react';
import './CSS/ProjectViewComponent.css';
import {InfoPopUp} from "./InfoPopUp";

export class ProjectViewComponent extends React.Component {


    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
        this.open_project_info = this.open_project_info.bind(this);
        this.state = {project: new InfoPopUp()};
    }

    render() {
        return (

            <div id="projectView">
                <ul>
                    {this.renderList()}
                </ul>
                <InfoPopUp initializeProject = {this.props.initializeProject}/>
            </div>
        );
    }

    renderList() {
        return (
            <div>
                {this.props.output_list.map((item) => (
                    <li key={item.getTitle()} onClick={this.open_project_info(item)}>
                        {item.getTitle()}
                        <i className="fas fa-edit basicText" id="editButton"></i>
                    </li>
                ))}
            </div>
        );

    }


    open_project_info(project) {
        this.state.projectInfo_PopUp.update_Project_Info(project);
        this.state.projectInfo_PopUp.showInfo();
    }
}