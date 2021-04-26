import React from "react";
import ReactDom from "react-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    alert(`${username}, ${password}`);
  };
  saveUserName = event => {
    this.setState({ username: event.target.value });
  };
  savePassword = event => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
        用户名：
        <input type="text" onChange={this.saveUserName} name="usename" />
        &nbsp;&nbsp; 密码：
        <input type="password" onChange={this.savePassword} name="password" />
        &nbsp;&nbsp;
        <button>登录</button>
      </form>
    );
  }
}

ReactDom.render(<Login />, document.getElementById("app"));
