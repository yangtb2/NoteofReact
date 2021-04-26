import React from "react";
import ReactDom from "react-dom";

// const VDOM = (
//   <div style={{ border: "#00ff00 solid 2px" }}>
//     <h1 style={{ color: "#ff0000" }}>Hello React!!</h1>
//   </div>
// );
// ReactDom.render(VDOM, document.getElementById("app"));

// const Demo = () => {
//   return <h2>我是函数式组件，适用于*简单组件*的定义</h2>;
// };
// ReactDom.render(<Demo />, document.getElementById("app"));

// class ClassComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { weather: "凉爽" };
//   }
//   render() {
//     return (
//       <div>
//         <h2>我是类式组件，适用于*复杂组件*的定义</h2>
//         <h3>今天天气很{this.state.weather}</h3>
//       </div>
//     );
//   }
// }
// ReactDom.render(<ClassComponent />, document.getElementById("app"));

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHot: true, wind: "微风" };
  }
  weatherChange() {
    const isHot = !this.state.isHot;
    this.setState({ isHot: isHot });
  }
  render() {
    const { isHot, wind } = this.state;
    return (
      <h3
        onClick={() => {
          this.weatherChange.apply(this);
          console.log(this.state.isHot);
        }}
      >
        今天天气很{isHot ? "炎热" : "凉爽"},{wind}
      </h3>
    );
  }
}
ReactDom.render(<Weather />, document.getElementById("app"));

export default {};
