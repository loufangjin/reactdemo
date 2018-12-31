import React, { Component } from 'react';
//import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//import Home from "./components/Home";
//import News from "./components/News";
//import Event from "./components/Event";
//import FormSubmit from "./components/FormSubmit";
//import TodoList from "./components/TodoList";

import ChindAndParet from "./components/ChindAndParent";

import JsonpAndAxios from "./components/JsonpAndAxios";

class App extends Component {
    constructor(props){

      super(props)
      this.state={
        msg:"父子组件传值属性",
        count:20,
        //name:"你好啊"
      }
    }
	//render模板 jsx语法

  running=()=>{
    alert("父子组件传值的方法")
  }
  getChild=(data)=>{
    console.log(data)
    //获取子组件传递来的属性，同事改变自己的属性，然后再传给子组件，起到双向绑定作用
    this.setState({
      msg:data
    })
  }
  getData=()=>{
    alert("如何获取父亲的整个组件,只需在传递的时候传递this")
  }
  getChildList=()=>{
    console.log(this.refs.childList.state.list);  //主动获取子组件的属性值
    this.refs.childList.getRunn()   //主动获取子组件的方法
  }
  render() {
    return (
      <div className="App">
        你好！跟组件
        {/*<Home/>*/}
        {/*<News>*/}
        {/*<Event/>*/}
        {/*<FormSubmit />*/}
        {/*<TodoList />*/}
        <ChindAndParet ref="childList" run={this.running} name={this.state.name}  title={this.state.msg} news={this} num={this.state.count} />

        <button onClick={this.getChildList}>父组件主动获取子组件的属性值</button>


        <JsonpAndAxios />
      </div>
    ); 
  }
}

export default App;
