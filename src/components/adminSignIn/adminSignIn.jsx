import React, { Component, Fragment } from "react";
import connection from "../../connection";
import style from "../../style.module.css/signIn.style.css";
import { Redirect, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default class AdminSignIn extends Component {
  state = {
    adminEmail:'',
    email: [],
    confirmPassword: [],
    checkEmail: "",
    checkPassword: "",
    isSignIn: false
  };

  componentDidMount() {
    connection
      .get("/adminSignUp.json")
      .then(response => {
        Object.entries(response.data).forEach(item => {
          return this.setState({
                email: [...this.state.email, item[1].email],
                confirmPassword: [
                  ...this.state.confirmPassword,
                  item[1].confirmPassword
                ]
    
              }
              );
        });
      })
      .catch(error => error.message);
  }

  // check valid Email-ID
  checkEmail = () => {
    let email = this.state.email;
    let checkEmail = this.state.checkEmail;

    for (let i =0;i<email.length;i++) {
      if (email[i] === checkEmail ){
        this.setState({adminEmail:email[i]})
        console.log(this.state.adminEmail);

        return true;
      }
      else{
        continue;
      }
    }
  };
  // check valid PasswordS
  checkPassword = () => {
    let confirmPassword = this.state.confirmPassword;
    let checkPassword = this.state.checkPassword;

    for (let j of confirmPassword) {
      if (j === checkPassword ? true : false) {
        return true;
      }
    }
  };

  handleEmail = event => {
    let { value } = event.target;
    if (value !== "") {
      this.setState({
        checkEmail: value
      });
    }
  };

  handlePassword = event => {
    let { value } = event.target;
    if (value !== "") {
      this.setState({
        checkPassword: value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.checkEmail() && this.checkPassword()) {
      connection
        .get(
          "/adminSignUp.json" 
        ).then(response =>{
          Object.entries(response.data).forEach(item => {   
            if(item[1].email === this.state.adminEmail ){
              item[1].adminId = item[0];
              this.props.isAdminSignIn(item[1]);
            }
         } )
        } )
        .catch(error => console.log(error.message));

      //reSet State properties
      this.setState({
        checkEmail: "",
        checkPassword: "",
        isSignIn: true
      });
    } else {
      Swal.fire(" please!!!  Enter Valid Email-ID & Password");
    }
  };

  render() {
    if (this.state.isSignIn) {
      return <Redirect to={"/listTrain"} />;
    }

    return (
      <Fragment>
        <div className={style.bgImageSignIN}>
          <br />
          <div className="d-flex justify-content-center">
            <div
              className={`card text-white bg-dark text-center ${style.card}`}
            >
              <div className="card-header">
                <h3>Admin Sign In </h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <br />
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      aria-describedby="emailHelp"
                      placeholder=" email ID"
                      required
                      onChange={this.handleEmail}
                      value={this.state.checkEmail}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="password"
                      required
                      onChange={this.handlePassword}
                      value={this.state.checkPassword}
                    />
                  </div>

                  <button
                    type="submit"
                    value="sign in"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    SIGN IN
                  </button>
                  <p>
                    You are Not Register Please {""}
                    <Link to="/adminSignUp">SIGN-UP</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
