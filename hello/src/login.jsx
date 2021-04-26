import React from "react";
import ReactDom from "react-dom";

class Login extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this;
    alert(`${username.value}, ${password.value}`);
  };
  render() {
    return (
      <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
        用户名：
        <input type="text" ref={c => (this.username = c)} name="usename" />
        &nbsp;&nbsp; 密码：
        <input type="password" ref={c => (this.password = c)} name="password" />
        &nbsp;&nbsp;
        <button>登录</button>
      </form>
    );
  }
}

ReactDom.render(<Login />, document.getElementById("app"));
