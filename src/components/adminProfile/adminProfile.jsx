import React, { Component } from "react";
import connection from "../../connection"; 
import { Redirect } from "react-router-dom";
import adminimage from '../../assets/admin-settings-male.png';

export default class UserProfile extends Component {
  componentDidMount() {
    connection.get(
      "/adminSignUp.json"
    )
      .then(response => {
        console.log(this.props.adminName);
        console.log(this.props.adminId);
        console.log(response.data)
      })
        
      .catch(err => console.log(err.message));
  }

  render() {
    if (this.props.adminId === "") {
      return <Redirect to="/signIn" />;
    }
    return (
      <div className="d-flex justify-content-center">
        <div className="card bg-light mb-3">
          <div className="card-header">
          <img
                src={adminimage}
                width="63"
                height="62"
                className="d-inline-block align-center"
                alt="user-logo"
              />
            <h3 className="d-flex justify-content-center">My Profile</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <form>
                <div className="form-row">
                  <div className="col ">
                    <h3 className="d-flex justify-content-center">
                      <b> Name: {this.props.adminName}</b>
                    </h3>
                  </div>

                  <hr />
                  <br />
                  <div className="col">
                    <h3 className="d-flex justify-content-center">
                      <b>Gender: {this.props.adminGender}</b>
                    </h3>
                  </div>
                </div>

                <hr />
                <div className="form-row">
                  <div className="col">
                    <h3 className="d-flex justify-content-center">
                      <b>Email: {this.props.adminEmail}</b>
                    </h3>
                  </div>

                  <hr />
                  <br />
                  <div className="col">
                    <h3 className="d-flex justify-content-center">
                      <b>Id: {this.props.adminId}</b>
                    </h3>
                  </div>
                </div>

                <hr />
                <br />
                <div>
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block"
                    onClick={this.handleAddPassengerForm}
                  >
                    Edit My Profile
                  </button>
                </div>
              </form>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
