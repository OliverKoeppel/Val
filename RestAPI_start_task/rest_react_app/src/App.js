import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './CSS/all.css';

const axios = require('axios');
const api_URL = 'http://localhost:9000/testAPI';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            firstName: "insert first name",
            lastName: "insert last name",
            age: "insert age"
        };
    }

    // getDataFromAPI() {
    //     fetch(api_URL)
    //         .then(res => res.json())
    //         .then(res => this.setState({apiResponse: res.data}));
    // }

    postDataToAPI() {
        console.log("postDataToAPI");
        let postObj = [];
        postObj.push({first_name: this.state.firstName});
        postObj.push({last_name: this.state.lastName});
        postObj.push({age: this.state.age});

        let postJSON = JSON.stringify(postObj);

        axios.post(api_URL + '/postPerson',postJSON)
            .then(res => alert("adding successful"))
            .catch (err => alert("adding failed"));
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

                    <button onClick={() => this.postDataToAPI()}> 'insert'</button>

                </form>


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