import React,{ Component } from "react";

import PropTypes from "prop-types";
//父子组件g给子组件传值：可以传递属性，可以传递方法，也可以之间吧整个父组件传递过来给子组件使用
//父组件主动获取子组件的属性值
//子组件给父组件传值 this.props.news.getChild.bind(this,"我来自于子组件")
//子组件通过调用自己的方法来获取父亲，直接由父亲传递过来 两种方法实现的异同

//验证父组件传值的合法性：defaultProps(子组件的默认类型) propTypes(验证父组件传古来值的合法性)
/*类.propTypes要小写；下面的合法性要大写*/
 class ChindAndParet extends Component {

	constructor(props) {
		super(props);

		this.state = {
			list:"如何让父组件直接获取子组件的属性值：使用ref"
		}
	}
	getOwn=()=>{
		//这是通过父亲传递this把整个父组件传递过来的时候实现的
		this.props.news.getData() //调用父亲的方法事件
		console.log(this.props.news.state.msg) //调取父亲的属性
	}

	getRunn=()=>{
		console.log("打印一下试一试就知道")
	}
	render(){

		return (

			<div>

				<h1>子组件的默认值:{this.props.name}</h1>
				<h1>父子组件传值的头部:{this.props.title}</h1>
				<h1>父子组件传值的头部:{this.props.num}</h1>
				<button onClick={this.props.run}>父子组件传递方法</button>
				<button onClick={this.props.news.getData}>获取父亲的整个组件中的东西</button>
				<button onClick={this.getOwn}>孩子用调用自己的方法来触发父亲的方法和属性</button>
				<button onClick={this.props.news.getChild.bind(this,"我来自于子组件")}>子组件给父组件传值</button>
			</div>
		)
	}
}
//父组件没有给子组件传递的时候默认传值defaultProps

ChindAndParet.defaultProps = {
	name:"hello"
}

//父组件传值的合法性

ChindAndParet.propTypes = {
	num:PropTypes.number
}

export default ChindAndParet