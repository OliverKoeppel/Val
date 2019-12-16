import React from 'react';

export class InfoPopUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show: false, project: this.props.initializeProject};
        this.showInfo=this.showInfo.bind(this);
        this.hideInfo=this.hideInfo.bind(this);
        this.update_Project_Info=this.update_Project_Info.bind(this);
        this.get_show = this.get_show.bind(this);
    }

    showInfo(){
        this.setState({show: true});
    }
    hideInfo(){
        this.setState({show: false});
    }

    update_Project_Info(newProject){
        this.setState({project: newProject});
    }

    get_show(){
        return this.state.show;
    }

    render() {
        return(
            <table>
                <caption>{this.state.project.getTitle()} </caption>
                <span>Project Details:</span>

                <tbody>
                <tr>
                    <td>Title</td>
                    <td><span>{this.state.project.getTitle()}</span></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><span>{this.state.project.getStartDate()}</span></td>
                </tr>
                <tr>
                    <td>End Date</td>
                    <td><span>{this.state.project.getEndDate()}</span></td>
                </tr>
                <tr>
                    <td>Project Manager</td>
                    <td><span>{this.state.project.getProjectLead()}</span></td>
                </tr>
                <tr>
                    <td>Team Members</td>
                    <td><span>{this.state.project.getTeam().getFullTeamNames()}</span></td>
                </tr>
                </tbody>
            </table>

        )
    }
}