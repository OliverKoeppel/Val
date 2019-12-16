import React from 'react';

export class InfoPopUp extends React.Component {

    constructor(props) {
        super(props);
        this.closeInfoPopUp = this.closeInfoPopUp.bind(this);
    }

    render() {
        return(

            <div class="modal" id="ModalWindow">

                <div className="modal-header">
                    <h5 className="modal-title">Project Details</h5>
                </div>

                <div className="modal-body">
                    <table>
                    <caption>{this.props.project.getTitle()} </caption>

                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td><span>{this.props.project.getTitle()}</span></td>
                    </tr>
                    <tr>
                        <td>Start Date</td>
                        <td><span>{this.props.project.getStartDate().toString()}</span></td>
                    </tr>
                    <tr>
                        <td>End Date</td>
                        <td><span>{this.props.project.getEndDate().toString()}</span></td>
                    </tr>
                    <tr>
                        <td>Project Manager</td>
                        <td><span>{this.props.project.getProjectLead().getFullName()}</span></td>
                    </tr>
                    <tr>
                        <td>Team Members</td>
                        <td><span>{this.props.project.getTeam().getFullTeamNames()}</span></td>
                    </tr>
                    </tbody>
                </table>
                </div>


                <div className="modal-footer">>
                    <button type="button" data-dismiss="modal">
                        close
                    </button>
                </div>
            </div>
        )
    }

    closeInfoPopUp(e){
        this.props.closePop();
        e.preventDefault();
    }
}