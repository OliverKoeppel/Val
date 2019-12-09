import React from 'react';
import './CSS/ProjectViewComponent.css';

export class ProjectViewComponent extends React.Component{



   render() {
        return (

                <div id="projectView">
                    <h1>
                        Here will be the output List
                    </h1>
                    <ul>
                    {this.renderList()}
                    </ul>
                </div>

           );
    }

 renderList() {
    return (
        <div>
            {this.props.display_list.map((item) => (
                 <li key={item.getTitle()}> {item.getTitle()} </li>
            ))}
        </div>
    );

}}