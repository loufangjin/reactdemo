import React,{ Component } from "react";

//获取事件对象：得到事件对象获取属性进行操作
//获取表单事件：两种方式：事件对象、ref操作DOM
//键盘事件：得到每一个键盘keyCode,通过回车得到value值操作
//双向数据绑定：model\view 相互改变相互影响
//表单value:是获取值和改变值 和 defaultValue：只是获取表单值，但是不做作双向数据绑定 
class Event extends Component { 

	constructor(props){
		super(props);
	
		this.state = {
			msg:"你好",
			userName:"",
			userModel:"初始值"
		}
	}


	fechEvent=(e)=>{
		//console.log(e.target.getAttribute('aid'))  //得到属性id值，在小程序中很常见
		e.target.style.background="red";
	}
	changeInput=(e)=>{
		//console.log(e.target.value)
		this.setState({
			userName:e.target.value
		})
	}
	getInput=()=>{
		alert(this.state.userName)
	}

	changeUsername=()=>{
		let val = this.refs.username.value
		this.setState({
			username:val
		})
	}
	
	getUsername=()=>{
		alert(this.state.username)
	}
	changeKey=(e)=>{
		//changeKey按键抬起
		console.log(e.keyCode)
		if(e.keyCode === 13){
			alert(e.target.value)
		}
	}
	changeModel=(e)=>{
		this.setState({
			userModel:e.target.value
		})
	}

	render() {
	
		return(
			<div>
				{/*模块里面加注释、要用大括号*/}
				<h1>事件对象</h1>
				<button aid="123" onClick={this.fechEvent}>获取事件对象和获取事件属性</button>
				<br />
				<h1>获取表单事件第一种：事件对象</h1>

				<input onChange={this.changeInput} />
				<button onClick={this.getInput}>点击获取到表单值</button>
				<h1>获取表单事件第二种方法：ref获取DOM节点</h1>
				<br />
				<input ref="username" onChange={this.changeUsername} />
				<button onClick={this.getUsername}>点击获取到表单值</button>
				<br />
				<h1>获取键盘事件得到每一个keycode和回车得到输入的值</h1>
				<input onKeyUp={this.changeKey} />
				<h1>react实现双向数据绑定  model改变影响view view改变影响model</h1>
				<input value={this.state.userModel} onChange={this.changeModel} />
				<p>{this.state.userModel}</p>	
			</div>
		)
	}
}
export default Event