import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid: null,
      emps: [],
      password: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      //  value : e.target.value
    });
    console.log(this.state.password);
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "https://reactcrudapp-17704.firebaseio.com/users.json?auth=JfNM89XR8o9vVRbEWT2OFrJpdvz91SFl5CmKbtWP",
        { name: "Hello", id: 101 }
      )
      .then(res => {
        console.log(res);
        alert(res.data);
        console.log(res.data.name);
      });
  };
  componentDidCatch() {}
  render() {
    return (
      <div>
        <h3> Login </h3>

        <div class="container">
          <div class="jumbotron">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input
                type="email"
                class="form-control"
                name="emailid"
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input
                type="password"
                class="form-control"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-default"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
