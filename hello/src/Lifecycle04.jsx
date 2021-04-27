import React from "react";
import ReactDom from "react-dom";

class Count extends React.Component {
  constructor(props) {
    console.log("Count-constructor");
    super(props);
    this.state = { total: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Count-getDerivedStateFromProps", props, state);
    return {};
  }

  componentDidMount() {
    console.log("Count-componentDidMount");
  }

  componentWillUnmount() {
    console.log("Count-componentWillUnMount");
  }

  shouldComponentUpdate() {
    console.log("Count-shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("getSnapshotBeforeUpdate", preProps, preState);
    return "snapshot";
  }

  componentDidUpdate(preProps, preState, snapShotValue) {
    console.log("Count-componentDidUpdate", preProps, preState, snapShotValue);
  }

  add = () => {
    const { total } = this.state;
    this.setState({ total: total + 1 });
  };

  death = () => {
    ReactDom.unmountComponentAtNode(document.getElementById("app"));
  };

  force = () => {
    console.log("强制更新");
    this.forceUpdate();
  };

  render() {
    console.log("Count-render");
    const { total } = this.state;
    return (
      <div>
        <h2>当前求和为：{total}</h2>
        <button onClick={this.add}>点击+1</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>强制更新组件</button>
      </div>
    );
  }
}

ReactDom.render(<Count total={199} />, document.getElementById("app"));
