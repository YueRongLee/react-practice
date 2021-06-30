import { Component } from "react"
import Header from "../components/Header"
import MemeGenerator from "../components/MemeGenerator"

class AppLayout extends Component {
  render() {
    return (
      <div>
        <Header favcol="yellow" />
        <MemeGenerator />
      </div>
    )
  }
}
export default AppLayout
