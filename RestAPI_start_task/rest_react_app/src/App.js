import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './CSS/all.css';

const axios = require('axios');
const api_URL = 'http://localhost:9000/testAPI';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            firstName: "insert first name",
            lastName: "insert last name",
            age: "insert age"
        };
    }

    getPersonsAll() {
        axios.get(api_URL + '/myPersons')
            .then(res => {
                console.log(res);
                this.setState({persons: res.data});
            })
            .catch(err => console.log("req failed"));
    }

    postNewData() {
        console.log("postDataToAPI");
        let postObj = {first_name:  this.state.firstName,
            last_name:  this.state.lastName,
            age: this.state.age };

        axios.post(api_URL + '/myPersons', postObj)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    removeData() {
        console.log("Deleting Data from API");
        let deleteObj = {first_name:  this.state.firstName, last_name:  this.state.lastName};

        axios.delete(api_URL + '/myPersons', {
            params: {deleteObj},
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    updateAge() {
    // TODO
    }


    render() {
        return (
            <div>
                <form>

                    first: <input type='text' id="first_id" value={this.state.firstName}
                                  onChange={(e) => this.updateFirstNameState(e, e.target.value)}/><br/>

                    last: <input type='text' id="last_id" value={this.state.lastName}
                                 onChange={(e) => this.updateLastNameState(e, e.target.value)}/> <br/>

                    age: <input type='text' id="age_id" value={this.state.age}
                                onChange={(e) => this.updateAgeState(e, e.target.value)}/> <br/>

                    <button id='postButton' onClick={() => this.postNewData()}> Add</button>

                    <button id='removeButton' onClick={() => this.removeData()}> Remove </button>

                    <button id='updateButton' onClick={() => this.updateAge()}> Update age </button>

                </form>

                <div>
                    <button id='getButton' onClick={() => this.getPersonsAll()}> Get </button>
                    <ul>
                        {this.state.persons.map(person =>
                            <li>{'First Name: ' + person.first_name + ', Last Name: ' + person.last_name}</li>)}
                    </ul>

                </div>



            </div>
        )
    };

    updateFirstNameState(e, newValue) {
        this.setState({firstName: newValue},
            () => {
                e.preventDefault();
            })
    }

    updateLastNameState(e, newValue) {
        this.setState({lastName: newValue},
            () => {
                e.preventDefault();
            })
    }

    updateAgeState(e, newValue) {
        this.setState({age: newValue},
            () => {
                e.preventDefault();
            })
    }

}

export default App;
