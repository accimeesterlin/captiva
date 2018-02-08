import React from "react"; // required

import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Login from "./components/Login";

import "./App.css";

// 3 types of Components


// 2 Class component
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      username: "accimeesterlin",
      age: 5,
      address: "8890 Terrace"
    };
  }

  sendData = () => {
    console.log("Hello World!!");
  };

  getValues = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  };


  onSubmit = (event) => {
    event.preventDefault();
    console.log("Hello world");

    // TODO
    // Send them to the back end
  };

  // JSX
  // JavaScript binding

  render() {

    console.log(this.state);

    // JSX

    return (
      <section className = "app">
          <Navbar getValues = {this.getValues}/>

          <Logo />

          <Login getValues = {this.getValues}   onSubmit = {this.onSubmit}   />

      </section>
    );
  }
}

// sharing 
// passing data from one to another component
// props


export default App;

  // 3 Higher order component

    // const Connect = () => {};


    // Connect(App) //
