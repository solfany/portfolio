import React, { Component } from "react";
import "./css/index.css";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class TypeAsyncComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isAnimating: true, // 추가된 상태
    };
    this.typeInterval = 100;
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    while (this.state.isAnimating) {
      await this.type("JavaScript");
      await sleep(2000);
      await this.delete("JavaScript!");
      await this.type("React");
      await sleep(2000);
      await this.delete("React");
      await this.type("Java");
      await sleep(2000);
      await this.delete("Java");
      await this.type("Spring");
      await sleep(2000);
      await this.delete("Spring");
      await this.type("꿈꾸는 개발자");
      await sleep(2000);
      await this.delete("꿈꾸는 개발자");
    }
  }

  async type(text) {
    for (let character of text) {
      await sleep(this.typeInterval);
      this.setState((prevState) => ({
        text: prevState.text + character,
      }));
    }
  }

  async delete(text) {
    for (let i = 0; i < text.length; i++) {
      await sleep(this.typeInterval);
      this.setState((prevState) => ({
        text: prevState.text.slice(0, -1),
      }));
    }
  }

  render() {
    const { text } = this.state;

    return (
      <div className="type-async">
        <span>{text}</span>
        <span className="blinking-cursor">_</span>
      </div>
    );
  }
}

export default TypeAsyncComponent;
