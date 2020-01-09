import React from 'react';
import './CSS/ProjectViewComponent.css';
import {InfoPopUp} from "./InfoPopUp";
import Container from "react-bootstrap/Container";


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
            <Container>
                <InfoPopUp project={this.state.projectInPopUp} show={this.state.showPopUp} closePop = {this.closePopUp}/>
            <div id="projectView">
                <ul>
                    {this.renderList()}
                </ul>
            </div>
            </Container>
        );
    }
    renderList() {
        return (
            <div>

                {this.props.outputList.map((item) => (
                    <li key={item.getTitle()} >
                        <a href="#PopUp" data-toggle="modal" onClick={(e) => {this.openPopUp(e, item)}}>
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