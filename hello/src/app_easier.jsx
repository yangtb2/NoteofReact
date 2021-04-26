import React from "react";
import ReactDom from "react-dom";

class Weather extends React.Component {
  state = { isHot: true, wind: "微风" };
  weatherChange = () => {
    const isHot = !this.state.isHot;
    this.setState({ isHot: isHot });
  };
  render() {
    const { isHot, wind } = this.state;
    return (
      <h3 onClick={this.weatherChange}>
        今天天气很{isHot ? "炎热" : "凉爽"},{wind}
      </h3>
    );
  }
}
ReactDom.render(<Weather />, document.getElementById("app"));

export default {};
