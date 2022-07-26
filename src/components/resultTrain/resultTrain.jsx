import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserNavigationBar from "../userNavigationBar";
import connection from "../../connection";
const Train = props => (
  <tr className="table-info">
    <td>
      {console.log(props.train.trainNumber)}
      <b>{props.train.trainNumber}</b>
    </td>
    <td>
      <b>{props.train.trainName}</b>
    </td>
    <td>
      <b>{props.train.from}</b>
    </td>
    <td>
      <b>{props.train.to}</b>
    </td>
    <td>
      <b>{props.train.totalSeat}</b>
    </td>
    <td>
      <b>{props.train.fair}</b>
    </td>
    <td>
      {props.train.totalSeat === 0 ? (
        <button className="btn btn-sm btn-outline-info">Not Available</button>
      ) : (
        <Link
          className="btn btn-sm btn-outline-info"
          role="button"
          to={"/bookTrain/" + props.train.trainNumber}
        >
          Book Now
        </Link>
      )}
    </td>
  </tr>
);

export default class ResultTrain extends Component {
  state = {
    train: []
  };

  componentDidMount() {
    connection
      .get(
        "/createTrain.json" 
      )
      .then(response => {
        if (response.data === null) {
          window.alert("No Train Found");
        } else {
          Object.entries(response.data).forEach(item => {
            console.log(item);
            this.setState({ train: [...this.state.train,item[1] ]})
          })
        }
      })
      .catch(error => error.message);
  }

  listTrain = () => {
    return this.state.train.map((currentTrain, index) => {
      console.log(currentTrain , index);
      return <Train train={currentTrain} key={index} />;
    });
  };

  render() {
    return (
      <div>
        <UserNavigationBar />
        <h1> Available Trains </h1>
        <p>Refresh for Recent Updates </p>
        <table className="table table-hover table-striped table-info">
          <thead>
            <tr className="table-primary">
              <th>Train Number</th>
              <th>Train Name</th>
              <th>From</th>
              <th>To</th>
              <th>Available Seat</th>
              <th>Fair</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.listTrain()}</tbody>
        </table>
      </div>
    );
  }
}
