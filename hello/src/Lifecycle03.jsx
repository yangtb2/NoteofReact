import React from "react";
import ReactDom from "react-dom";

class A extends React.Component {
  constructor(props) {
    console.log("@@");
    super(props);
  }

  componentWillReceiveProps() {
    console.log("A--componentWillReceiveProps");
  }

  render() {
    return <div>A:{this.props.Count}</div>;
  }
}

class B extends React.Component {
  state = { total: 0 };

  add = () => {
    const { total } = this.state;
    this.setState({ total: total + 1 });
  };

  render() {
    return (
      <div>
        <div>B</div>
        <button onClick={this.add}>点击+1</button>
        <A Count={this.state.total} />
      </div>
    );
  }
}

ReactDom.render(<B />, document.getElementById("app"));
