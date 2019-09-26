/* import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

class Insertdata extends Component {
  constructor() {
    super();
    this.setState({
      names: null,
      age: null,
      salary: null
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const employee = {
      name: this.state.names,
      age: this.state.age,
      salary: this.state.salary
    };
    axios
      .post("http://dummy.restapiexample.com/api/v1/employees", employee)
      .then(res => console.log("resdata" + res.data));

    console.log(employee.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="names" onChange={this.handleChange} />
          </label>

          <label>
            Age:
            <input type="text" name="age" onChange={this.handleChange} />
          </label>

          <label>
            Salary:
            <input type="text" name="salary" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Insertdata;
 */
