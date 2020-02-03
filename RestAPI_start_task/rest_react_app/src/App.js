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
        console.log('getPersons()...');
        axios.get(api_URL + '/myPersons')
            .then(res => {
                console.log(res);
                this.setState({persons: res.data});
            })
            .catch(err => console.log("req failed"));
    }

    // insertPersonToAPI() {
    //     console.log("postDataToAPI");
    //     let postObj = [];
    //     postObj.push({first_name: this.state.firstName});
    //     postObj.push({last_name: this.state.lastName});
    //     postObj.push({age: this.state.age});
    //
    //     let postJSON = JSON.stringify(postObj);
    //
    //     axios.post(api_URL + '/postPerson',postJSON)
    //         .then(res => alert("adding successful"))
    //         .catch (err => alert("adding failed"));
    // }


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

                    <button id='postButton' onClick={() => this.postDataToAPI()}>'insert'</button>

                </form>

                <div>
                    <button id='getButton' onClick={() => this.getPersonsAll()}> 'get'</button>
                    <ul>
                        {this.state.persons.map(person => <li>{person.first_name + " " + person.last_name}</li>)}
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
