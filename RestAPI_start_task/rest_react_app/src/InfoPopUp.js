import React from 'react';
import {Modal} from 'react-bootstrap'

export class InfoPopUp extends React.Component {

    render() {
        return (
            <Modal show={this.props.show} id="ModalWindow" aria-labelledby="basicModal" aria-hidden="true"
                   centered={true}>

                <Modal.Header className="modal-header">
                    <Modal.Title className="modal-title">Project Details</Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">

                    <table>
                        <tbody>
                        <tr>
                            <td>First Name</td>
                            <td><span>{this.props.project.getTitle()}</span></td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td><span>{this.props.project.getStartDate().toLocaleDateString("de",{year:"2-digit",month:"2-digit", day:"2-digit"})}</span></td>
                        </tr>
                        <tr>
                            <td>age</td>
                            <td><span>{this.props.project.getEndDate().toLocaleDateString()}</span></td>
                        </tr>

                        </tbody>
                    </table>
                </Modal.Body>


                <Modal.Footer className="modal-footer">
                    <button type="button" data-dismiss="modal" onClick={(e) => this.props.closePop(e)}>
                        close
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }

}