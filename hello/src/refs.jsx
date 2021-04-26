import React from "react";
import ReactDom from "react-dom";

class Demo extends React.Component {
  state = { s: false };
  showLog = () => {
    alert(this.input1.value);
  };
  stateChange = () => {
    const { s } = this.state;
    this.state.s = !s;
    console.log(s);
  };
  render() {
    return (
      <div>
        <input
          ref={curNode => {
            this.input1 = curNode;
            console.dir(curNode);
          }}
          type="text"
          placeholder="点击按钮提示数据"
        />
        <br />
        <button onClick={this.showLog}>点击提示上侧数据</button>
        <br />
        <input
          onBlur={event => alert(event.target.value)}
          type="text"
          placeholder="失去焦点提示数据"
        />
        <button onClick={this.stateChange}>
          点击改变状态{this.state.s + ""}
        </button>
      </div>
    );
  }
}

ReactDom.render(<Demo />, document.getElementById("app"));
export default {};
