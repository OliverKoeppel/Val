import React from 'react';
import './CSS/ProjectViewComponent.css';
import {InfoPopUp} from "./InfoPopUp";


export class ProjectViewComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {projectInPopUp: this.props.initProject, showPopUp: false};
        this.renderList = this.renderList.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.openPopUp = this.openPopUp.bind(this);

    }

    render() {
        return (
            <div id="projectView">
                <ul>
                    {this.renderList()}
                </ul>
                {this.state.showPopUp ?
                    <div>
                    <h2>show popUp</h2>
                    <InfoPopUp displayPopUp={this.state.showPopUp} project={this.state.projectInPopUp} closePop={this.closePopUp} id="popUp"></InfoPopUp>
                    </div>
                :<h2>don't show popUp</h2>}
            </div>
        );
    }

    renderList() {
        return (
            <div>
                {this.props.outputList.map((item) => (
                    <li key={item.getTitle()} onClick={(e) => {this.openPopUp(e, item)}}>
                        <a href="#bannerformmodal" data-toggle="modal" data-target="ModalWindow">
                        {item.getTitle()}
                        </a>
                        <i className="fas fa-edit basicText" id="editButton"></i>
                    </li>
                ))}
            </div>
        );

    }


    openPopUp(e, item) {
        this.setState({projectInPopUp: item}, () => { this.setState({showPopUp: true})});
        e.preventDefault();
    }

    closePopUp(e) {
        this.setState({showPopUp: false});
        e.preventDefault();
    }
}