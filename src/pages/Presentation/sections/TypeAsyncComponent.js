import React, { Component } from "react";
import "./TypeAsyncComponent.css";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class TypeAsyncComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "", // 초기 텍스트를 빈 문자열로 설정
    };
    this.typeInterval = 100; // 타이핑 속도를 조절 (원하는대로 수정)
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    let isAnimating = true;
    while (isAnimating) {
      await this.type("CodePen!");
      await sleep(2000);
      await this.delete("CodePen!");
      await this.type("World!");
      await sleep(2000);
      await this.delete("World!");

      // Set isAnimating to false to exit the loop if needed
      // Example: if (someCondition) isAnimating = false;
    }
  }

  async type(text) {
    for (let character of text) {
      await sleep(this.typeInterval); // 타이핑 간격만큼 대기
      this.setState((prevState) => ({
        text: prevState.text + character, // 문자 하나씩 추가
      }));
    }
  }

  async delete(text) {
    for (let _ of text) {
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
