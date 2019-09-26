import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

class Getdata extends Component {
  constructor() {
    super();

    this.state = {
      emps: []
    };
  }

  getEmployee() {
    axios.get("http://dummy.restapiexample.com/api/v1/employees").then(res => {
      const emps = res.data;
      this.setState({ emps });
      console.log(res.data);
    });
  }

  componentDidMount() {
    this.getEmployee();
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.emps.map(function(data, key) {
            return (
              <li>
                {data.id} - {data.employee_name} - {data.employee_salary}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Getdata;
