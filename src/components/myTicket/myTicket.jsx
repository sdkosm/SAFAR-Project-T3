import React, { Component } from "react";
import connection from "../../connection";
import UserNavigationBar from "../userNavigationBar";
import { Redirect } from "react-router-dom";

const Ticket = props => (
  <tr className="table-info">
    <td>{props.ticket.trainNumber}</td>
    <td>{props.ticket.trainName}</td>
    <td>{props.ticket.from}</td>
    <td>{props.ticket.to}</td>
    <td>{props.ticket.fair}</td>
    <td>{props.ticket.passengerName}</td>
    <td>{props.ticket.passengerAge}</td>
    <td>{props.ticket.passengerGender}</td>
  </tr>
);

export default class MyTicket extends Component {
  state = {
    myTicket: []
  };

  componentDidMount() {
    connection
      .get(
        "/confirmTickets.json" 
      )
      .then(response => {
        Object.entries(response.data).forEach(item => {

          if(item[1].userId == this.props.userId){
            this.setState({ myTicket: [...this.state.myTicket,item[1] ]})
          }
        })
        
        console.log(response.data);
      })
      .catch(error => error.message);
  }

  listTrain = () => {
    return this.state.myTicket.map((currentTrain, index) => {
      return <Ticket ticket={currentTrain} key={index} />;
    });
  };

  render() {
    console.log(this.props.userId);
    if (this.props.userId === "") {
      return <Redirect to="/signIn" />;
    }
    return (
      <div>
        <UserNavigationBar />
        <h1> My Ticket </h1>
        <p>Refresh for Recent Updates </p>
        <table className="table table-hover table-striped table-info">
          <thead>
            <tr className="table-danger">
              <th>Train Number</th>
              <th>Train Name</th>
              <th>From</th>
              <th>To</th>
              <th>Fair</th>
              <th>Passenger Name</th>
              <th>Passenger Age</th>
              <th>Passenger Gender</th>
            </tr>
          </thead>
          <tbody>{this.listTrain()}</tbody>
        </table>
      </div>
    );
  }
}
