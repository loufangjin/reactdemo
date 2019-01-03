import React,{ Component } from "react";

//生命周期函数
//组件加载的时候触发的函数：constructor\componentWillMount\render\componentDidMount
//组件数据更新的时候触发的生命周期函数：componentWillUpdate\render\componentDidUpdate
//控制更新关卡：shouldComponentUpdate
//组件销毁的时候触发componentWillUnmount
//父组件改变的时候执行的：componentWillReciveProps
//组件更新后不会再执行constructor
class LifeCycle extends Component { 

	constructor(props){
		super(props);
		console.log("01组件加载第一步construcrot")
		this.state = {
			msg:"组件的初始数据"
		}
	}
	componentWillMount(){
		console.log("02组件加载执行的第二部数据渲染之前")
	}
	componentDidMount(){
		//这里发生axios请求 或者继续数据的变化更改 操作dom
		console.log("04组件加载执行的第四部数据渲染之后")
	}

	shouldComponentUpdate(nextprops,nextstate){ //表示是否让组件更新：true的时候更新的生命周期才会执行
		console.log("nextprops",nextprops) //这是父传过来的数据	
		console.log("nextstate",nextstate)	//这是子改变的数据
		return true
		
	}
	componentWillReceiveProps(){

		console.log("父组件改变值后触发该方法")
	}
	componentWillUpdate(){//数据更新之前
		console.log("01组件更新执行的第一步")
	}
	componentDidUpdate(){//更新完成之后
		console.log("03组件更新执行的第三部")
	
	}
	
	componentWillUnmount(){//用在返回按钮  保存数据的时候
		//销毁谁就放在哪个里面
		console.log("组件销毁的时候触发")
	}
	updateData=()=>{
		this.setState({
			msg:"更新后的数据"
		})
	}

	render() {
		console.log("03组件加载执行的第三部")
		console.log("02组件更新执行的第二步")
		return(
			<div>
				生命周期函数
				<br />
				<hr />
				<h1>{this.state.msg}</h1>
				{this.props.title}
				<button onClick={this.updateData} >点击让组件更新</button>
			</div>
		)
	}
}
export default LifeCycle