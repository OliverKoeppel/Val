import React from 'react';
import './CSS/ProjectViewComponent.css';

export class ProjectViewComponent extends React.Component{



   render() {
        return (

                <div id="projectView">
                    <h1>
                        Here will be the output List
                    </h1>
                    {renderList}
                </div>

           );
    }


}

function renderList() {
    return (
        <ul>
            {this.props.display_list.map((item, index) => (
                <li key={index} item={item.getTitle()} />
            ),this)}
        </ul>
    );
}