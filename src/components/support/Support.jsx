
import React, { Component } from "react";
import Footer from "../footer/Footer";
import Navigation from "../home/navigation/index";
import "./Support.css";
import connection from "../../connection";

export default class Support extends Component {
  state = {
    Name: "",
    email: "",
    message:""
  };
  handleName = event => {
    const { value } = event.target;
    if (value.match("^[a-zA-Z ]*$") != null) {
      this.setState({ Name: value.toUpperCase() });
    }
  };
  handleEmail = event => {
    const { value } = event.target;
    this.setState({ email: value });
  };
  handleMessage = event => {
    const { value } = event.target;
    if (value.match("^[a-zA-Z ]*$") != null) {
      this.setState({ message: value});
    }
  };
  handleSubmit = event => {
    event.preventDefault();
  
    // Creating newUser Object...
    const supportMessage = {
      userName: this.state.Name,
      email: this.state.email,
      message:this.state.message
    };

    // send data into database
    
      connection.post("/support.json", supportMessage)
      .then(response => {
        alert("Successfully sent. We will reach out to you soon!!")
        console.log(response.data);
        return response.data;
      })
      .catch(error => error.message);

    this.setState({
      Name: "",
      email: "",
      message:""
    });
  };

  render() {
    return (
      <div>
        {/* .................................Navigation for Privacy Page.................... */}

        <Navigation />

        {/* .................................Navigation End for Privacy Page.................... */}
        <section className="formsection">
        <div className="mainform">
          <form className="form" onSubmit={this.handleSubmit}>
            <h1><u>Contact Us</u> </h1>

            <lable>Name</lable>
            <input placeholder="name"  onChange={this.handleName} required/>

            <lable>Email</lable>
            <input placeholder="email" onChange={this.handleEmail} required/>

            <lable>Message</lable>
            <textarea placeholder="message" onChange={this.handleMessage}></textarea>

            <button type="submit">SUBMIT</button>
          </form>
        </div>
        </section>

        {/* .................................Footer for Privacy Page.................... */}

        <Footer />
        {/* .................................Footer for Privacy Page.................... */}
      </div>
    );
  }
}
