import React, { Component } from "react";
import "./App.css";
import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

class App extends Component {
  id = 3;
  // state 의 초깃값을 설정합니다.
  state = {
    // 그 초깃값은 배열 형태로 넣어주었고, 내부에 기본 값들을 넣어주었습니다.
    todos: [
      {
        id: 0,
        text: "앵귤러 배우고",
        checked: true
      },
      {
        id: 1,
        text: "리액트 배우고",
        checked: false
      },
      {
        id: 2,
        text: "뷰 배우자",
        checked: false
      }
    ]
  };

  handleCreate = text => {
    // 데이터 만들고
    const todoData = {
      id: this.id++,
      text,
      checked: false
    };
    // 데이터를 등록
    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate}/>
        <div className="white-box">
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
