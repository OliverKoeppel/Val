import React from 'react';
import './CSS/ProjectViewComponent.css';

export class ProjectViewComponent extends React.Component{


    constructor(props) {
        super(props);
        this.renderList=this.renderList.bind(this);
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
                 <li key={item.getTitle()}> {item.getTitle()} </li>
            ))}
        </div>
    );

}}