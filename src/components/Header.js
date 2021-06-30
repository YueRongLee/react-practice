import React from "react"

class Header extends React.Component {
  constructor(props) {
    super(props)
    console.log("===constructor===")
    this.state = {}
    // this.changeColor = this.changeColor.bind(this)
  }
  static getDerivedStateFromProps(props, state) {
    console.log("===getDerivedStateFromProps===")
    const array = ["red", "pink", "blue", "yellow", "green", "light-blue"]
    // return { favoritecolor: props.favcol }
    return { favoritecolor: array[Math.floor(Math.random() * 6)] }
  }
  changeColor = (p1, p2) => {
    console.log("===changeColor function===")
    console.log(p1, p2)
    const array = ["red", "pink", "blue", "yellow", "green", "light-blue"]
    console.log(array[Math.floor(Math.random() * 6)])

    this.setState({ favoritecolor: p1 })
  }
  shouldComponentUpdate() {
    console.log("===shouldComponentUpdate===")
    return true
  }
  render() {
    console.log("===render===")
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        {/* <button type="button" onClick={this.changeColor.bind(this, "Hello")}> */}
        <button type="button" onClick={(ev) => this.changeColor("black", ev)}>
          Change color
        </button>
      </div>
    )
  }
  componentDidMount() {
    console.log("===componentDidMount===")
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
    document.getElementById(
      "root"
    ).innerHTML += `Before props is ${prevProps.favcol}, and before state is ${prevState.favoritecolor}`
    console.log("===getSnapshotBeforeUpdate===")

    return null
  }
  componentDidUpdate() {
    console.log("===componentDidUpdate===")
  }
  componentWillUnmount() {
    console.log("===componentWillUnmount===")
  }
  componentDidUnMount() {
    console.log("===componentDidUnMount===")
  }
}

export default Header
