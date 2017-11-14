import React, {Component}   from 'react';
import ReactDOM             from 'react-dom';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id        : null,
      firstName : "",
      lastName  : "",
      logginRedirection : false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFullName = this.getFullName.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  getFullName() {
    return this.state.firstName + " " + this.state.lastName;
  }

  resetForm(event) {
    this.setState({
      logginRedirection: false,
      firstName: "",
      lastName: ""
    });
    console.log("reset form");
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
    // Setstate est asynchrone, attention !
    console.log(this.getFullName())
  }


  handleSubmit(event) {
    if (this.state.firstName.length > 2 && this.state.lastName.length > 2) {
      this.setState({
        logginRedirection: true
     });
      console.log("Form accepted => redirection enable");
    }

    event.preventDefault();
  }

  render() {
    if (this.state.logginRedirection) {
      return (
        <div className="welcome">
          <h2> Salut {this.getFullName()} </h2>
          <button onClick={this.resetForm}> reset </button>
        </div>
      )
    }
    else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Firstname:
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
            Lastname:
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
}

export default Form;