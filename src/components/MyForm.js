import React from "react"
import styles from "../css/Form.module.css"

class MyForm1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: "" }
  }
  mySubmitHandler = (event) => {
    event.preventDefault()
    console.log("mySubmitHandler")
    alert("You are submitting " + this.state.username)
  }
  myChangeHandler = (event) => {
    console.log("myChangeHandler")
    this.setState({ username: event.target.value })
  }
  render() {
    return (
      <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name, and submit:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <input type="submit" onClick={this.mySubmitHandler} />
      </form>
    )
  }
}
class MyForm2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      age: null,
      errormessage: "",
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name
    let val = event.target.value
    let err = ""
    if (nam === "age") {
      if (val !== "" && !Number(val)) {
        // const styleObject = {
        //   color: "white",
        //   backgroundColor: "DodgerBlue",
        //   padding: "6px",
        //   fontFamily: "Arial",
        // }
        err = (
          <strong className={styles.errorMessage}>
            Your age must be a number
          </strong>
        )
      }
    }
    this.setState({ errormessage: err })
    this.setState({ [nam]: val })
  }
  render() {
    return (
      <form>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
        {this.state.errormessage}
      </form>
    )
  }
}

export { MyForm1, MyForm2 }
