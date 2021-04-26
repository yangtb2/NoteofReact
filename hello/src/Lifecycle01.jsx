import React from "react";
import ReactDom from "react-dom";

class Lifecycle extends React.Component {
  state = { opacity: 1, opacityInc: 0.1 };

  death = () => {
    ReactDom.unmountComponentAtNode(document.getElementById("app"));
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      let { opacity, opacityInc } = this.state;
      opacity -= opacityInc;
      if (opacity <= 0 || opacity > 1) {
        // opacity = 1;
        opacityInc = -opacityInc;
      }
      this.setState({ opacity, opacityInc });
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>React学不会怎么办？</h2>
        <button onClick={this.death}>不活了</button>
      </div>
    );
  }
}

ReactDom.render(<Lifecycle />, document.getElementById("app"));
