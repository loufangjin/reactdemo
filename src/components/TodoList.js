import React,{ Component } from "react";
// todoList 列表实现 待办事项和已办理事项和删除
//小坑：要改变state中的值，一定要定义衣服咯中间变量，否则无法实现
//对 <input> 的呢你内部属性的理解
//对列表中的数据进行缓存操作\以及封装缓存组件
//localStorage.getItem()  localStorage.setItem()

import storage from "../modules/storage"  //引入缓存模块
 class TodoList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			list:[/*{
				title:"你好啊",
				checked:false,
			},{
				title:"不好啊",
				checked:true,
			},{
				title:"非常好啊",
				checked:true,
			},{
				title:"部分性好啊",
				checked:false,
			},{
				title:"是吗好啊",
				checked:false,
			},{
				title:"不是啊",
				checked:false,
			},*/]
		}
	}

	renove=(index)=>{
		//要操作state里面的数据:必须要使用一个中间变量，否则不会实现this.state.list.splice(index,1)  这样是不能实现
		var valueList = this.state.list;
		valueList.splice(index,1)  //删掉之后对数组重新赋值
		this.setState({
			list:valueList
		})
		//缓存数据只支持只支持字符串形式JSON.stringify转换成字符串
		//localStorage.setItem("todoList",JSON.stringify(valueList))

		storage.set("todoList",valueList)
	}
	changeList=(index)=>{
		var valueList = this.state.list;
		valueList[index].checked = !valueList[index].checked;
		this.setState({
			list:valueList
		})
		//缓存数据只支持只支持字符串形式JSON.stringify转换成字符串
		//localStorage.setItem("todoList",JSON.stringify(valueList))         
		
		storage.set("todoList",valueList)         
	}

	addList = (e)=>{

		//console.log(this.refs.inputs.value)
		if(e.keyCode === 13) {
			var valueList = this.state.list;

			valueList.push({
				title:this.refs.inputs.value,
				checked:false
			})

			this.refs.inputs.value = ""
			//缓存数据只支持只支持字符串形式JSON.stringify转换成字符串
			//localStorage.setItem("todoList",JSON.stringify(valueList))
			
			storage.set("todoList",valueList)
			//注意这里不能直接this.state.list.push(this.refs.inputs),必须借助一个中间变量		
			this.setState({
				
				list:valueList
			})
				
		}
		

			
	}
	//react 生命周期钩子   页面渲染发生  vue=>mounted

	componentDidMount(){
		//获取储存要转化成对象，因为保存的时候只能是一个字符
		//var list = JSON.parse(localStorage.getItem("todoList"));
		var list = storage.get("todoList")
		if(list){
			this.setState({
				list:list
			})
		}
	}

	render(){

		return (

			<div>

				<input ref="inputs" onKeyDown={this.addList} />

				<h1>待办事项</h1>
				<ul>
					
					{
						this.state.list.map((item,key)=>{
							if(!item.checked){
								return(
									<li key={key}>

										<input type="checkbox" onChange={this.changeList.bind(this,key)} checked={item.checked} />

										{item.title}  

										<button onClick={this.renove.bind(this,key)}>删除</button>
									</li>
								)
							}
						})
					}
				</ul>

				<hr />

				<h1>已完成事项</h1>
				<ul>
					
					{
						this.state.list.map((item,key)=>{
							if(item.checked){
								return(
									<li key={key} >
	
										<input type="checkbox" onChange={this.changeList.bind(this,key)} checked={item.checked} />
	
										{item.title}

										<button onClick={this.renove.bind(this,key)}>删除--</button>

									</li>
								)
							} 
						})
					}
				</ul>

			</div>
		)
	}
}

export default TodoList