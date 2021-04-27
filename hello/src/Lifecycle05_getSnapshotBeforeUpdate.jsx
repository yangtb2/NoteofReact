import React from "react";
import ReactDom from "react-dom";

class NewsList extends React.Component {
  state = { newsArr: [] };

  componentDidMount() {
    setInterval(() => {
      const { newsArr } = this.state;
      const news = "新闻" + (newsArr.length + 1);
      this.setState({ newsArr: [news, ...newsArr] });
    }, 1000);
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    return this.listbox.scrollHeight;
  }

  componentDidUpdate(preProps, preState, snapShot) {
    this.listbox.scrollTop += this.listbox.scrollHeight - snapShot;
  }

  render() {
    return (
      <div className="newslist" ref={cur => (this.listbox = cur)}>
        {this.state.newsArr.map((item, index) => {
          return (
            <div key={index} className="news">
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}

ReactDom.render(<NewsList />, document.getElementById("app_newslist"));
