import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import UserNavigationBar from "../userNavigationBar";
import connection from "../../connection";
import { useState } from "react";

export default class BookTrain extends Component {
  state = {
    trainName: "",
    trainNumber: "",
    from: "",
    to: "",
    totalSeat: "",
    fair: "",
    addPassenger: false,
    passengerName: "",
    passengerAge: "",
    passengerGender: "",
    isBookingConfirm: false,
    currentTrain:{},
    trainId:"",
    userId:""
  };

  componentDidMount = () => { 
    console.log(this.props.match.params.trainNumber)
    connection
      .get(
        "/createTrain.json/"
      )
      .then(response =>{
        console.log(this.props.match.params.trainNumber);
        Object.entries(response.data).forEach(item => {
          console.log(item[1].trainNumber);
          console.log(item[1]);

          if(item[1].trainNumber == this.props.match.params.trainNumber){
            this.setState({
              currentTrain:item[1],
              trainId:item[0]})
            console.log(this.state.currentTrain);
            console.log(item[1]);
          }
        })  
        this.setState({
          trainName: this.state.currentTrain.trainName,
          trainNumber:this.state.currentTrain.trainNumber,
          from: this.state.currentTrain.from,
          to: this.state.currentTrain.to,
          totalSeat: this.state.currentTrain.totalSeat,
          fair:this.state.currentTrain.fair
        })
      }
      )
      .catch(error => console.log(error.message));
  };

  handleAddPassengerForm = () => {
    this.setState({ addPassenger: true });
  };

  handlePassengerName = event => {
    const { value } = event.target;
    if (value.match("^[a-zA-Z ]*$") != null) {
      this.setState({ passengerName: value.toUpperCase() });
    }
  };

  handlePassengerAge = event => {
    const { value } = event.target;
    this.setState({ passengerAge: value });
  };

  handlePassengerGender = event => {
    const { value } = event.target;
    this.setState({ passengerGender: value });
  };

  handleBookingConfirm = () => {
    this.setState({ isBookingConfirm: true });
  }
  handleSubmit = event => {
    event.preventDefault();
    
    const newTicket = {
      trainName: this.state.trainName,
      trainNumber: this.state.trainNumber,
      from: this.state.from,
      to: this.state.to,
      fair: this.state.fair,
      passengerName: this.state.passengerName,
      passengerAge: this.state.passengerAge,
      passengerGender: this.state.passengerGender,
      userId:this.props.userId
    };
    connection
      .post(
        "/confirmTickets.json",newTicket
      )
      .then(response =>
        { 
          console.log(response.data)})
      .catch(error => console.log(error.message));

      // const note = {
      //   totalSeat:this.state.totalSeat-1
      // }
      // connection
      // .put(
      //   "/createTrain.json/"+this.state.trainId ,note
      // )
      // .then(response => {
      //   console.log(response.data)
      // })
      // .catch(error => console.log(error.message));

    window.alert("Booking Confirm :) ");

    this.setState({
      isBookingConfirm: true
    });
  };

  render() {
    if (this.state.totalSeat === 0) {
      return <Redirect to="/searchTrain" />;
    }
    if (this.state.isBookingConfirm) {
      return <Redirect to="/myTicket" />;
    }
    // if (this.props.userId === "") {
    //   return <Redirect to="/signIn" />;
    // }
    const trainInfoForm = (
      <div className="d-flex justify-content-center">
        <div className="card bg-light mb-3">
          <div className="card-header">
            <h3 className="d-flex justify-content-center">Book Your Journey</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <form>
                <div className="form-row">
                  <div className="col ">
                    <h4 className="d-flex justify-content-center">
                      <label htmlFor="trainNumber">Train Number</label>
                    </h4>
                    <h3 className="d-flex justify-content-center">
                      <b> {this.state.trainNumber}</b>
                    </h3>
                  </div>

                  <hr />
                  <div className="col">
                    <h4 className="d-flex justify-content-center">
                      <label htmlFor="trainName">Train Name</label>
                    </h4>
                    <h3 className="d-flex justify-content-center">
                      <b> {this.state.trainName}</b>
                    </h3>
                  </div>
                </div>

                <hr />
                <div className="form-row">
                  <div className="col">
                    <h4 className="d-flex justify-content-center">
                      <label htmlFor="inputState">Departure Station</label>
                    </h4>
                    <h3 className="d-flex justify-content-center">
                      <b> {this.state.from}</b>
                    </h3>
                  </div>

                  <hr />
                  <div className="col">
                    <h4 className="d-flex justify-content-center">
                      <label htmlFor="inputState">Destination Station</label>
                    </h4>
                    <h3 className="d-flex justify-content-center">
                      <b> {this.state.to}</b>
                    </h3>
                  </div>
                </div>

                <hr />
                <div className="form-row">
                  <div className="col">
                    <h4 className="d-flex justify-content-center">
                      <label htmlFor="inputState">Available Seat</label>
                    </h4>
                    <h3 className="d-flex justify-content-center">
                      <b> {this.state.totalSeat}</b>
                    </h3>
                  </div>

                  <hr />
                  <div className="col">
                    <h4 className="d-flex justify-content-center">
                      <label htmlFor="inputState">Total Fair</label>
                    </h4>
                    <h3 className="d-flex justify-content-center">
                      <b> {this.state.fair}</b>
                    </h3>
                  </div>
                </div>

                <hr />
                <div>
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block"
                    onClick={this.handleAddPassengerForm}
                  >
                    Fill Passenger Information
                  </button>
                </div>
              </form>
            </h5>
          </div>
        </div>
      </div>
    );

    const addPassengerForm = (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">
                Add Passenger Information
              </h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="passengerName">Passenger Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="passengerName"
                        onChange={this.handlePassengerName}
                        value={this.state.passengerName}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="gender">Passenger Age</label>
                      <input
                        type="number"
                        className="form-control"
                        id="passengerAge"
                        onChange={this.handlePassengerAge}
                        value={this.state.passengerAge}
                      />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="male"
                          id="male"
                          onChange={this.handlePassengerGender}
                          value="Male"
                          checked={this.state.passengerGender === "Male"}
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                    </div>

                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="female"
                          id="female"
                          onChange={this.handlePassengerGender}
                          value="Female"
                          checked={this.state.passengerGender === "Female"}
                        />
                        <label className="form-check-label" htmlFor="gender">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div>
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg btn-block"
                      onChange={this.handleBookingConfirm}
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );

    const isBookingConfirm = (
      <div className="d-flex justify-content-center">
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Congratulations! </h4>
          <h1>{this.state.alertMessage}</h1>
          <hr />
          <h3 className="mb-0">
            <Link to="/searchTrain">Back To Main Menu</Link>
          </h3>
        </div>
      </div>
    );

    return (
      <div>
        <UserNavigationBar />
        <div className="d-flex justify-content-center">
          <div>
            {this.state.addPassenger ? addPassengerForm : trainInfoForm}
          </div>
        </div>
      </div>
    );
  }
}
