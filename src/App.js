import React, { Component } from 'react';
//import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import Home from "./components/Home";
//import News from "./components/News";
//import Event from "./components/Event";
//import FormSubmit from "./components/FormSubmit";
//import TodoList from "./components/TodoList";

//import ChindAndParet from "./components/ChindAndParent";

//import JsonpAndAxios from "./components/JsonpAndAxios";
//import LifeCycle from "./components/LifeCycle";
//import ReactRouter from "./components/ReactRouter";
//import Details from "./components/Details";
//import DetailsGet from "./components/DetailsGet";


import routes from "./route.js";


class App extends Component {
    constructor(props){

      super(props)
      this.state={
        msg:"父子组件传值属性",
        count:20,
        title:"改变父传值验证声明周期函数父传值验证声明周期函数"
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
      msg:data,
      flag:true
    })
  }
  getData=()=>{
    alert("如何获取父亲的整个组件,只需在传递的时候传递this")
  }
  getChildList=()=>{
    console.log(this.refs.childList.state.list);  //主动获取子组件的属性值
    this.refs.childList.getRunn()   //主动获取子组件的方法
  }
  destroy=()=>{
    this.setState({
      flag:!this.state.flag
    })
  }

  change=()=>{
    this.setState({
      title:"改变父传值验证声明周期函数"
    })
  }
  render() {
    return (
      <div className="App">
        

        <br />

          
        <br />
        <Router>
            <div>
              <header>

                {/*<Link to="/">首页</Link>*/}

                <br />
                <div className="home_box">
                    <div className="home_left">
                      <Link to="/">首页组件</Link>
                    </div>
                    <div>
                      <Link to="/Cuser">用户页面</Link>
                    </div>
                </div>
                {
                  routes.map((route,index)=>{
                    if(route.exact){
                      return (<Route key={index} path={route.path} exact 
                        //这是嵌套路由的固定写法
                        render={props => (
                          <route.component {...props} routes={route.routes} />
                        )}
                      />)
                    }else{
                      return (<Route key={index} path={route.path}
                         render={props => (
                           <route.component {...props} routes={route.routes} />
                         )} 
                      />)
                    }
                  })
                }             
                          

                <br />   
                <br />   
                <br />             
                {/*<Link to="/ReactRouter">react</Link>*/}
              </header>

              


              {/*<Route path="/"  component={LifeCycle} />*/}
              {/*<Route path="/ReactRouter" component={ReactRouter} />*/}
              {/*<Route path="/Details/:aid" component={Details} />*/}
              {/*<Route path="/DetailsGet" component={DetailsGet} />*/}
            </div>
          </Router>
        <hr />
        <br />
        {
          /*this.state//.flag?<LifeCycle title={this.state.title} />:""*/
        }
        
        {/*<Home/>*/}
        {/*<News>*/}
        {/*<Event/>*/}
        {/*<FormSubmit />*/}
        {/*<TodoList />*/}

        <br />
        <br />
        <hr />

        {/*<button onClick={this.change}>验证改变父组件触发的声明周期函数</button>*/}
        {/*<ChindAndParet ref="childList" run={this.running} name={this.state.name}  title={this.state.msg} news={this} num={this.state.count} />*/}
        {/*<button onClick={this.destroy}>点击//组件销毁触发让lifeCycle取反操作验证组件的销毁</button>*/}
        {/*<button onClick={this.getChildList}>父组件主动获取子组件的属性值</button>*/}
        {/*<JsonpAndAxios />*/}

      </div>
    ); 
  }
}

export default App;
