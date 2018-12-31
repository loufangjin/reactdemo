import React from "react";
import logo from '../assets/images/logo.svg';
//引入react的第二种写法
//组件首字母必须大写
//改变this指向的三种方法
//改变state的值 this.setState()
//引入图片 
//本地图片 两种方式
// 远程图片 直接写入
// 数组循环三种方式：其实目的就是一个{}传值操作
class News extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			userInfo:"李四",
			arr1:['11','22','33','44'],
			//arr2:[<h1 key="1">111</h1>,<h1 key="2">222</h1>,<h1 key="3">1333</h1>],
			arr3:[
				{name:"hello"},
				{name:"nihao"},
			],
			first:"第一种方法",
			second:"第二种方法",
			third:"第三种方法"
		}
		this.getSecond = this.getSecond.bind(this)
	}

	changeData=()=>{ //改变state值
		this.setState({
			userInfo:"只是改变之后的值"
		})
	}
	changeMethodData=(msg)=>{//执行方法传值

		this.setState({
			userInfo:msg
		})
	}

	getFirst(){

		alert(this.state.first)

	}
	getSecond(){
		alert(this.state.second)
	}
	getThird=()=>{
		alert(this.state.third)
	}

	render () {
		let newArr1 = this.state.arr1.map((item,index)=>{
			return <h1 key={index}>{item}</h1>
		})


		return (

			<div>
				最外层必须包裹一个div {this.state.userInfo}
				<hr />
				<br />
				<button onClick={this.getFirst.bind(this)}>第一种方法</button>
				<br />
				<br />
				<button onClick={this.getSecond}>第二种方法</button>
				<br />
				<button onClick={this.getThird}>第三种方法</button>
				<br />
				<button onClick={this.changeData}>改变state的值</button>
				<br />
				<button onClick={this.changeMethodData.bind(this,"张三")}>执行方法传值</button>
				   
				   		{
				   			this.state.arr3.map((item,index)=>{
				   				return <h2 key={index}>{item.name}</h2>
				   			})
				   		}       
				   
				   <hr />
				   		{newArr1}
				   <br />
				<hr />

				<br />
				<img src={logo} alt="" />
				<br />
				<img src={require("../assets/images/logo.svg")} alt="" />
				<br />

				<img alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545846192792&di=310e81843ee3dd3528c1a2f5afc49639&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F30adcbef76094b360f3feb46aecc7cd98c109de8.jpg" />
			</div>
		)
	}
}

export default News 