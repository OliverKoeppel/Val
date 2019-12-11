import React from 'react';
import './CSS/ProjectViewComponent.css';

export class ProjectViewComponent extends React.Component {


    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    render() {
        return (

            <div id="projectView">
                <ul>
                    {this.renderList()}
                </ul>
            </div>

        );
    }

    renderList() {
        return (
            <div>
                {this.props.output_list.map((item) => (
                    <li key={item.getTitle()} onclick={this.open_project_info(item.getTitle())}>
                        <i className="fas fa-edit basicText" id="editButton"></i>
                    </li>
                ))}
            </div>
        );

    }


open_project_info(projectTitle){
    // To be done
}
}