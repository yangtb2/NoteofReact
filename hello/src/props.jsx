import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

class Person extends React.Component {
  render() {
    return (
      <ul>
        <li>姓名：{this.props.name}</li>
        <li>性别：{this.props.sex}</li>
        <li>年龄：{this.props.age}</li>
      </ul>
    );
  }
}
Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  age: PropTypes.number
};
Person.defaultProps = {
  sex: "male",
  age: 18
};
let jerry = { name: "jerry", sex: "male", age: 19 };
let unknown = { sex: "male", age: "sa19" };
ReactDom.render(
  <Person name="jack" sex="male" age={18} />,
  document.getElementById("app1")
);
ReactDom.render(<Person {...jerry} />, document.getElementById("app2"));
ReactDom.render(<Person {...unknown} />, document.getElementById("app3"));

export default {};
