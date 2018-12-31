import React, { Component } from 'react';

import "../assets/css/index.css";

//引入react组件的两种写法第一种

class Home extends Component {           
	constructor(props) {
		super(props); //用于父子组件传值 、固定写法
	//定义数据要在constructor方法里面
		this.state = {
			userInfo:"张三",
			color:"red",
			title:"我是title",
			style:{
				color:"red",
				fontSize:"20px",
			}
		}
	}
//绑定特殊性 
    //class 换成 className
    //for 换成 htmlFor
    //style 行内样式 style={{}} 要用双大括号 或者  style={this.state.style}
	render() {

		return ( //固定写法，和vue一样最外层div包裹
			<div>
				{this.state.userInfo}
				<br />
				<p title={this.state.title}> 只是一个titlt</p>
				<br />
				<p className={this.state.color}>z这是绑定颜色</p>
				<br />
				<label htmlFor ="name">姓名：</label>
				<input id="name" />
				<br />
				<p style={{"color":"red"}}>行内样式</p>
				<p style={this.state.style}>行内样式的第二种写法，注意驼峰命名</p>
			</div>
		)
	}
}

export default Home;

