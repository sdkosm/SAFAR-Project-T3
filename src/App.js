import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import Visit from './components/visit/index';
import SignIn from './components/signIn/index';
import SignUp from './components/signUp/index';
// import Admin from './components/adminNavigationBar/index';
import CreateTrain from './components/createTrain/index';
import ListTrain from './components/listTrain/index';
import EditTrain from './components/editTrain/index';
import DeleteTrain from './components/deleteTrain/index';
import SearchTrain from './components/searchTrain/index';
import ResultTrain from './components/resultTrain/index';
import BookTrain from './components/bookTrain/index';
import MyTicket from './components/myTicket/index';
import UserProfile from './components/userProfile/index';
import AdminSignUp from './components/adminSignUp/index';
import AdminSignIn from './components/adminSignIn/index';
import Home from './components/home';
import Privacy from './components/footer/privacy/Privacy';
import Terms from './components/footer/terms/Terms';
import Support from './components/support/Support';
import Aboutus from './components/aboutus/Aboutus';

export default class App extends Component {
  state = {
    userId: '',
    userName: '',
    userEmail: '',
    userGender: '',
    userPassword: '',
    adminId: '',
    adminName: '',
    adminEmail: '',
    adminPassword: ''
  }

  isSignIn = (data) => {
    const { userId, userName, email, gender, confirmPassword } = data;
    console.log()
    this.setState({
      userId: userId,
      userName: userName,
      userEmail: email,
      userGender: gender,
      userPassword: confirmPassword,

    });
  };

  isAdminSignIn = (data) => {
    const { _id, userName, email, password } = data;
    this.setState({
      adminId: _id,
      adminName: userName,
      adminEmail: email,
      adminPassword: password
    });
  };

  render() {
    return (
      <>
        <div className="">
          <BrowserRouter>

            {/* Public Routes */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/signUp" component={(prop) => <SignUp {...prop} />} />

            <Route path="/signIn" component={(prop) => <SignIn isSignIn={this.isSignIn} {...prop} />} />

            <Route path="/userProfile" component={(prop) => <UserProfile
              userId={this.state.userId}
              userName={this.state.userName}
              userGender={this.state.userGender}
              userEmail={this.state.userEmail}
              userPassword={this.state.userPassword}
              {...prop} />} />

            <Route path="/searchTrain" component={(prop) => <SearchTrain {...prop} />} />

            <Route path="/resultTrain/:from/:to" component={(prop) => <ResultTrain {...prop} />} />

            <Route path="/bookTrain/:trainNumber" component={(prop) => <BookTrain {...prop}/>} />

            <Route path="/myTicket" component={(prop) => <MyTicket userId={this.state.userId} {...prop} />} />

            {/* Private Routes  */}

            <Route path="/adminSignUp" component={(prop) => <AdminSignUp {...prop} />} />

            <Route path="/adminSignIn" component={(prop) => <AdminSignIn isAdminSignIn={this.isAdminSignIn} {...prop} />} />

            <Route path="/createTrain" component={(prop) => <CreateTrain adminId={this.state.adminId} {...prop} />} />

            <Route path="/listTrain" component={(prop) => <ListTrain {...prop} />} />

            <Route path="/editTrain/:trainNumber" component={(prop) => <EditTrain adminId={this.state.adminId} {...prop} />} />

            <Route path="/deleteTrain/:trainNumber" component={(prop) => <DeleteTrain {...prop} />} />

            <Route path="/Privacy" component={(prop) => <Privacy {...prop} />} />

            <Route path="/Terms" component={(prop) => <Terms {...prop} />} />

            <Route path="/Support" component={(prop) => <Support {...prop} />} />

            <Route path="/Aboutus" component={(prop) => <Aboutus {...prop} />} />
            
          </BrowserRouter>
        </div>
      </>
    )
  }
}
